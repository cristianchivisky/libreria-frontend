# LibroMundo (Frontend)

LibroMundo es un proyecto de librería online diseñado para ofrecer una experiencia de compra moderna y accesible.

## Sistema Web

Frontend: Desarrollado con Next.js y Tailwind CSS para un diseño adaptable y atractivo.
Backend: Servidor GraphQL.
Base de Datos: PostgreSQL.
Integración de Logging: Google y Microsoft.
API de Pago: Integración con Mercado Pago.

## Características del Sitio Web

### Catálogo de Libros

- Carga de libros con información detallada: imagen, nombre, precio, autor, descripción, editorial, encuadernado, dimensiones, cantidad de páginas, reseña, validación, etc.
- Posibilidad de ordenar por categoría y aplicar filtros de búsqueda.
- Mostrar productos en stock y aquellos que no están disponibles solo para el equipo interno.

### Lista de Deseos

- Los usuarios pueden crear una lista de deseos con enlaces a los libros que desean, para compartir en redes sociales o enviar por correo.

### Promociones y Descuentos

- Destacar promociones y descuentos en la página principal.

### Carrito de Compras

- Funcionalidad de carrito de compras donde los usuarios pueden agregar productos.

### Registro de Usuarios

- Registro mediante cuentas de Google y Microsoft.
- Recopilación de información como correo, teléfono, dirección, favoritos y lista de deseos.

### Proceso de Compra y Pago

- Integración con Mercado Pago para realizar pagos.
- Posibilidad de guardar carrito para completar la compra más tarde.
- Manejo de pagos rechazados: el carrito queda pendiente hasta que el pago sea exitoso.

### Envíos

- Opción de envío por correo o retiro en el local.
- Cálculo del costo de envío basado en el código postal.

### Información de Contacto

- Información de contacto visible en la página, teléfono y correo electrónico.

### Preguntas Frecuentes

- Sección de preguntas frecuentes relacionadas con pedidos, envíos y otros aspectos.

### Diseño y Apariencia

- Diseño atractivo y profesional que refleje la identidad de la librería.

## Instalación

Para configurar el frontend localmente, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/cristianchivisky/libreria-frontend.git
   ```

2. Navega al directorio del proyecto:
    ```bash
    cd libreria-frontend
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

## Uso

Para iniciar en modo de desarrollo, ejecuta:
    ```bash
    npm run dev
    ```

Abre tu navegador y visita http://localhost:3000 para ver la aplicación.

## Contribución

¡Las contribuciones son bienvenidas! Si deseas colaborar, sigue estos pasos:

1. Haz un fork del proyecto.

2. Crea una rama para tu feature
    ```bash
    git checkout -b feature/AmazingFeature
    ```

3. Realiza un commit de tus cambios
    ```bash
    git commit -m 'Add some AmazingFeature'
    ```

4. Haz push a la rama
    ```bash
    git push origin feature/AmazingFeature
    ```

5. Abre un pull request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más información.

## Contacto

Para preguntas o soporte, por favor contacta a cristian.chivisky@gmail.com.
