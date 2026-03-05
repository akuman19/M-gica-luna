const Client = require('ssh2-sftp-client');
const path = require('path');
const fs = require('fs');

const CONFIG = {
    host: '82.198.232.165',
    port: 65002,
    username: 'u687496864',
    password: 'sdnhjsdsnaSAj34',
    readyTimeout: 30000,
    retries: 3,
    retry_factor: 2,
    retry_minTimeout: 2000,
    debug: (msg) => {
        if (msg.includes('Auth') || msg.includes('auth') || msg.includes('handshake') || msg.includes('password')) {
            console.log('   [DEBUG]', msg);
        }
    },
    algorithms: {
        kex: [
            'ecdh-sha2-nistp256',
            'ecdh-sha2-nistp384',
            'ecdh-sha2-nistp521',
            'diffie-hellman-group-exchange-sha256',
            'diffie-hellman-group14-sha256',
            'diffie-hellman-group14-sha1',
            'diffie-hellman-group1-sha1',
        ],
        cipher: [
            'aes128-ctr',
            'aes192-ctr',
            'aes256-ctr',
            'aes128-gcm',
            'aes128-gcm@openssh.com',
            'aes256-gcm',
            'aes256-gcm@openssh.com',
            'aes256-cbc',
            'aes128-cbc',
        ],
        serverHostKey: [
            'ssh-rsa',
            'ssh-ed25519',
            'ecdsa-sha2-nistp256',
            'ecdsa-sha2-nistp384',
            'ecdsa-sha2-nistp521',
            'rsa-sha2-512',
            'rsa-sha2-256',
        ],
        hmac: [
            'hmac-sha2-256',
            'hmac-sha2-512',
            'hmac-sha1',
        ],
    },
};

const DIST_DIR = path.resolve(__dirname, 'dist');
const REMOTE_DIR = '/home/u687496864/domains';

async function findPublicHtml(sftp) {
    // Try common paths for Hostinger
    const possiblePaths = [
        '/home/u687496864/public_html',
        '/public_html',
        '/home/u687496864/domains',
        '/var/www/html',
        '/www',
    ];

    // First, let's see what's in the home directory
    console.log('🔍 Explorando estructura del servidor...');

    try {
        const homeList = await sftp.list('/home/u687496864');
        console.log('📂 Contenido de /home/u687496864:');
        homeList.forEach(item => {
            console.log(`   ${item.type === 'd' ? '📁' : '📄'} ${item.name}`);
        });

        // Check if public_html exists directly
        const hasPublicHtml = homeList.some(item => item.name === 'public_html');
        if (hasPublicHtml) {
            return '/home/u687496864/public_html';
        }

        // Check domains folder for Hostinger multi-domain setup
        const hasDomains = homeList.some(item => item.name === 'domains');
        if (hasDomains) {
            const domainsList = await sftp.list('/home/u687496864/domains');
            console.log('\n📂 Contenido de /home/u687496864/domains:');
            domainsList.forEach(item => {
                console.log(`   ${item.type === 'd' ? '📁' : '📄'} ${item.name}`);
            });

            // Find the domain folder and its public_html
            for (const domain of domainsList) {
                if (domain.type === 'd') {
                    try {
                        const domainContent = await sftp.list(`/home/u687496864/domains/${domain.name}`);
                        const hasPH = domainContent.some(item => item.name === 'public_html');
                        if (hasPH) {
                            const targetPath = `/home/u687496864/domains/${domain.name}/public_html`;
                            console.log(`\n✅ Encontrado: ${targetPath}`);
                            return targetPath;
                        }
                    } catch (e) {
                        // Skip if can't read
                    }
                }
            }
        }
    } catch (e) {
        console.log(`  Error explorando home: ${e.message}`);
    }

    // Try each possible path
    for (const p of possiblePaths) {
        try {
            await sftp.list(p);
            console.log(`✅ Encontrado: ${p}`);
            return p;
        } catch (e) {
            // Path doesn't exist, try next
        }
    }

    throw new Error('No se encontró la carpeta public_html en el servidor');
}

async function uploadDirectory(sftp, localDir, remoteDir, indent = '') {
    const items = fs.readdirSync(localDir);

    for (const item of items) {
        const localPath = path.join(localDir, item);
        const remotePath = remoteDir + '/' + item;
        const stat = fs.statSync(localPath);

        if (stat.isDirectory()) {
            console.log(`${indent}📁 Creando carpeta: ${item}/`);
            try {
                await sftp.mkdir(remotePath, true);
            } catch (e) {
                // Directory might already exist
            }
            await uploadDirectory(sftp, localPath, remotePath, indent + '  ');
        } else {
            const sizeKB = (stat.size / 1024).toFixed(1);
            console.log(`${indent}📄 Subiendo: ${item} (${sizeKB} KB)`);
            await sftp.put(localPath, remotePath);
        }
    }
}

async function cleanDirectory(sftp, remoteDir) {
    try {
        const items = await sftp.list(remoteDir);
        for (const item of items) {
            const remotePath = remoteDir + '/' + item.name;
            if (item.name === '.' || item.name === '..') continue;

            // Skip .well-known and other important server directories
            if (item.name === '.well-known') {
                console.log(`   ⏭️  Saltando: ${item.name} (directorio del servidor)`);
                continue;
            }

            if (item.type === 'd') {
                await cleanDirectory(sftp, remotePath);
                await sftp.rmdir(remotePath);
                console.log(`   🗑️  Eliminada carpeta: ${item.name}`);
            } else {
                await sftp.delete(remotePath);
                console.log(`   🗑️  Eliminado: ${item.name}`);
            }
        }
    } catch (e) {
        console.log(`   ⚠️  Error limpiando: ${e.message}`);
    }
}

async function main() {
    const sftp = new Client();

    try {
        console.log('🚀 Conectando al servidor Hostinger...');
        console.log(`   Host: ${CONFIG.host}:${CONFIG.port}`);
        console.log(`   Usuario: ${CONFIG.username}\n`);

        await sftp.connect(CONFIG);
        console.log('✅ Conexión exitosa!\n');

        // Find the public_html directory
        const publicHtmlPath = await findPublicHtml(sftp);
        console.log(`\n📍 Directorio destino: ${publicHtmlPath}\n`);

        // Clean existing files
        console.log('🧹 Limpiando archivos existentes...');
        await cleanDirectory(sftp, publicHtmlPath);
        console.log('✅ Limpieza completada!\n');

        // Upload new files
        console.log('📤 Subiendo archivos nuevos...');
        await uploadDirectory(sftp, DIST_DIR, publicHtmlPath);

        console.log('\n🎉 ¡DESPLIEGUE EXITOSO!');
        console.log('   Los archivos se han subido correctamente a Hostinger.');
        console.log(`   Directorio: ${publicHtmlPath}`);

        // List uploaded files for verification
        console.log('\n📋 Verificando archivos subidos...');
        const uploadedFiles = await sftp.list(publicHtmlPath);
        uploadedFiles.forEach(item => {
            console.log(`   ${item.type === 'd' ? '📁' : '📄'} ${item.name}`);
        });

    } catch (error) {
        console.error('\n❌ Error durante el despliegue:', error.message);
        process.exit(1);
    } finally {
        await sftp.end();
        console.log('\n🔌 Conexión cerrada.');
    }
}

main();
