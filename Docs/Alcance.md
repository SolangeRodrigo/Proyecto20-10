# 📌 Alcance — Proyecto20-10

## 1. 🔐 Autenticación de usuarios

La aplicación contará con funcionalidades de autenticación que incluirán:

- Registro de usuarios.
- Inicio de sesión.
- Cierre de sesión.
- Recuperación de contraseña.
- Validación de datos de entrada.
- Rate limiting en los endpoints correspondientes.
- Protección de las rutas y operaciones que requieran autenticación.

## 2. 📚 Gestión de cursos

Se implementará un módulo de gestión de cursos con las siguientes operaciones:

- **Create:** creación de cursos.
- **Read:** consulta y visualización de cursos.
- **Update:** modificación de cursos existentes.
- **Delete:** eliminación de cursos.

Los campos definitivos de cada curso se establecerán durante el diseño del modelo de datos.

## 3. 📄 Paginación

El listado de cursos incorporará paginación para:

- Dividir los resultados en páginas.
- Navegar entre los resultados disponibles.
- Controlar la cantidad de registros mostrados por página.
- Consultar los datos de manera eficiente.

## 4. 🗺️ Roadmap de aprendizaje

Se contempla el desarrollo de una funcionalidad orientada a la organización de cursos en recorridos de aprendizaje.

El alcance previsto incluye:

- Definir una estructura para representar un roadmap.
- Explorar la recopilación de información de cursos de Udemy.
- Evaluar la organización de cursos por etapas o niveles.
- Diseñar una forma de visualizar los recorridos de aprendizaje.

La implementación concreta del scraping, los campos recopilados y las reglas de organización se definirán durante el análisis técnico.

## 5. 🎨 UX/UI

La interfaz seguirá los siguientes lineamientos:

- Enfoque **Mobile First**.
- Diseño visual claro y minimalista.
- Referencia estética: Google Material Design.
- Componentes de interfaz reutilizables.
- Menú hamburguesa para la navegación.
- Adaptación a diferentes tamaños de pantalla.
- Estados de carga, mensajes de error y confirmaciones.

## 6. 🏗️ Arquitectura del frontend

El frontend se organizará por funcionalidades, priorizando la separación de responsabilidades.

Estructura conceptual:

- `Features/Curso`: funcionalidades relacionadas con cursos.
- `Components/UI`: componentes visuales reutilizables.
- Módulos de autenticación y navegación, organizados según las necesidades del proyecto.

Los nombres y las ubicaciones definitivas se ajustarán a la estructura real del repositorio.

## 7. ⚙️ Backend y persistencia

- Desarrollo de una API mediante Fastify.
- Persistencia de datos en PostgreSQL.
- Validación de las solicitudes recibidas.
- Manejo consistente de errores.
- Integración entre el frontend, la API y la base de datos.

`uv` se incorporará únicamente si se define un componente o servicio que requiera Python.

## 8. 🐳 Infraestructura

- Configuración del entorno mediante Docker.
- Definición de servicios con Docker Compose.
- Configuración de variables de entorno.
- Documentación de los pasos necesarios para ejecutar el proyecto.

## 📦 Entregable

Una aplicación web que integre las funcionalidades definidas y cuente con una estructura técnica documentada para facilitar su desarrollo y mantenimiento.