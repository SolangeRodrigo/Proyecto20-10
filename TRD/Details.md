# ⚙️ Detalles del Sistema — Proyecto20-10

## 1. 🧩 Descripción general

Proyecto20-10 es una aplicación web full stack destinada a la gestión y organización de cursos.

El sistema contempla autenticación de usuarios, administración de cursos, paginación y el desarrollo de una funcionalidad de roadmaps de aprendizaje.

La arquitectura buscará mantener separadas las responsabilidades de presentación, lógica de negocio y persistencia.

## 2. 🛠️ Stack tecnológico

| Capa | Tecnología | Responsabilidad |
|---|---|---|
| Frontend | React 19 | Interfaz de usuario |
| Build tool | Vite | Desarrollo y compilación |
| Gestor de paquetes | pnpm | Dependencias del frontend |
| Backend | Fastify | API y lógica del servidor |
| Base de datos | PostgreSQL | Persistencia de información |
| Infraestructura | Docker | Contenedorización |
| Orquestación | Docker Compose | Ejecución coordinada de servicios |
| Entorno Python | uv, si corresponde | Dependencias de componentes Python |

**Nota:** Fastify utiliza Node.js. `uv` pertenece al ecosistema Python, por lo que su incorporación requiere una responsabilidad concreta dentro de la arquitectura.

## 3. 🏗️ Organización del código

Se propone una arquitectura orientada a funcionalidades (*feature-based architecture*).

Estructura conceptual del frontend:

```text
src/
├── app/
│   ├── routes/
│   └── layouts/
├── features/
│   ├── auth/
│   └── curso/
├── components/
│   └── ui/
├── services/
└── assets/
```

### Responsabilidades

- `app/`: configuración general y navegación.
- `features/auth/`: registro, login y recuperación de contraseña.
- `features/curso/`: funcionalidades relacionadas con cursos.
- `components/ui/`: componentes visuales reutilizables.
- `services/`: comunicación con la API.
- `assets/`: recursos estáticos.

Esta estructura es una propuesta inicial; podrá adaptarse a las decisiones del equipo.

## 4. 🔐 Autenticación y seguridad

### Registro
- Validar los datos recibidos.
- Verificar que la cuenta pueda registrarse.
- Almacenar las contraseñas utilizando algoritmos de hash seguros.

### Inicio de sesión
- Validar las credenciales.
- Establecer una sesión o mecanismo de autenticación seguro.
- Informar errores sin revelar información sensible.

### Recuperación de contraseña
- Permitir solicitar la recuperación del acceso.
- Verificar la solicitud mediante un mecanismo seguro.
- Establecer un procedimiento para cambiar la contraseña.

El mecanismo de envío de correos y la estrategia de sesiones deberán definirse durante el diseño técnico.

### Rate limiting
- Establecer límites para solicitudes sensibles.
- Definir respuestas apropiadas al superar los límites.
- Evitar que el mecanismo dependa exclusivamente de controles en el frontend.

## 5. 📚 Módulo de cursos

El módulo permitirá crear, consultar, actualizar y eliminar cursos.

### Modelo inicial propuesto

| Campo | Descripción |
|---|---|
| `id` | Identificador único |
| `nombre` | Nombre del curso |
| `descripcion` | Descripción del contenido |
| `url` | Enlace al curso, si corresponde |
| `created_at` | Fecha de creación |
| `updated_at` | Fecha de última modificación |

Los campos definitivos, las restricciones y la relación con los usuarios se establecerán en el diseño de la base de datos.

### Reglas generales
- Validar los datos antes de persistirlos.
- Verificar la existencia del curso antes de modificarlo o eliminarlo.
- Responder con códigos HTTP apropiados.
- Mantener la persistencia en PostgreSQL.

## 6. 📄 Paginación

La API deberá permitir consultar cursos por páginas.

Se propone utilizar parámetros equivalentes a:

- `page`: número de página.
- `limit`: cantidad máxima de resultados.

El backend validará los parámetros y devolverá los resultados junto con los metadatos necesarios para la navegación.

La estrategia definitiva podrá ser paginación por desplazamiento (*offset*) o cursor, según los requisitos.

## 7. 🗺️ Roadmap de aprendizaje y Udemy

La idea contempla organizar cursos en recorridos de aprendizaje.

### Conceptos funcionales
- **Roadmap:** recorrido que agrupa cursos según un objetivo de aprendizaje.
- **Etapa:** agrupación o posición dentro del recorrido.
- **Curso:** recurso educativo asociado al recorrido.

### Recopilación de información
Se evaluará la posibilidad de obtener información pública de cursos de Udemy mediante mecanismos permitidos, priorizando alternativas oficiales cuando estén disponibles.

Antes de implementar el scraping, deberán definirse:
- La fuente y el mecanismo de obtención.
- Los datos que se almacenarán.
- La frecuencia de actualización, si corresponde.
- El tratamiento de errores y datos duplicados.
- Las condiciones de uso y restricciones aplicables.

La generación automática de roadmaps no se considera una funcionalidad confirmada hasta definir sus reglas.

## 8. 🎨 UX/UI y Mobile First

El diseño comenzará por pantallas pequeñas y se adaptará progresivamente a resoluciones mayores.

### Lineamientos
- Interfaz clara y minimalista.
- Jerarquía visual consistente.
- Componentes reutilizables.
- Navegación accesible.
- Formularios con validación y mensajes comprensibles.
- Estados de carga, error y ausencia de resultados.
- Menú hamburguesa en los diseños que lo requieran.

Google Material Design será una referencia visual, no una obligación de reproducir exactamente su interfaz.

## 9. 🗄️ Persistencia e infraestructura

PostgreSQL será responsable del almacenamiento persistente.

Docker y Docker Compose se utilizarán para facilitar la configuración del entorno de desarrollo y la ejecución coordinada de los servicios.

La configuración deberá contemplar:
- Variables de entorno.
- Conexión a la base de datos.
- Inicialización y evolución del esquema.
- Gestión de secretos fuera del repositorio.
- Instrucciones de ejecución y diagnóstico.

## 10. 📌 Decisiones pendientes

- Definir el mecanismo de autenticación y sesiones.
- Confirmar los campos definitivos de cursos.
- Definir las relaciones entre usuarios, cursos y roadmaps.
- Determinar el origen y mecanismo de recopilación de cursos de Udemy.
- Confirmar si se utilizará Python y, por lo tanto, `uv`.
- Definir los endpoints y sus contratos.
- Establecer las reglas de autorización y validación.