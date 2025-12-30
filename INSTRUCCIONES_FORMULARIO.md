# Cómo Configurar el Formulario de Contacto

El formulario de contacto utiliza **Google Forms** para recibir los mensajes. Para que funcione correctamente desde tu página web, necesitamos conectar los campos de tu página (Nombre, Email, etc.) con los campos internos de tu formulario de Google.

Dado que no pude acceder automáticamente a tu formulario (posiblemente requiere inicio de sesión o permisos), necesitas hacer esto manualmente una sola vez.

## Paso 1: Obtener los "Entry IDs"

1.  Abre tu formulario de Google en modo **edición**.
2.  Haz clic en los **tres puntos** (arriba a la derecha) y selecciona **"Obtener vínculo prellenado"** (Get pre-filled link).
3.  Se abrirá una nueva pestaña con tu formulario. Escribe algo único en cada campo para identificarlos. Por ejemplo:
    *   En "Nombre completo", escribe: `NOMBRE123`
    *   En "Correo electrónico", escribe: `EMAIL123`
    *   En "Teléfono", escribe: `TELEFONO123`
    *   En "Mensaje", escribe: `MENSAJE123`
4.  Haz clic en el botón **"Obtener vínculo"** (Get link) al final de la página.
5.  Copia el vínculo generado.

## Paso 2: Extraer los IDs

Pega el vínculo en un bloc de notas. Se verá algo así:

`https://docs.google.com/forms/.../viewform?entry.1234567=NOMBRE123&entry.9876543=EMAIL123...`

Anota los números que aparecen después de `entry.` para cada campo:
*   **Nombre**: `entry.XXXXXXXX`
*   **Email**: `entry.YYYYYYYY`
*   **Teléfono**: `entry.ZZZZZZZZ`
*   **Mensaje**: `entry.WWWWWWWW`

## Paso 3: Actualizar el Código

Ve al archivo `src/components/Contact.tsx` y actualiza la sección `ENTRY_IDS` con tus números reales:

```javascript
  const ENTRY_IDS = {
    name: "entry.TU_ID_DE_NOMBRE",    // Ejemplo: "entry.123456789"
    email: "entry.TU_ID_DE_EMAIL",    // Ejemplo: "entry.987654321"
    phone: "entry.TU_ID_DE_TELEFONO", // Ejemplo: "entry.555555555"
    message: "entry.TU_ID_DE_MENSAJE" // Ejemplo: "entry.111111111"
  };
```

¡Una vez guardes el archivo, el formulario funcionará perfectamente!
