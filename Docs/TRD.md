# TRD — Technical Requirements Document — Proyecto20-10

> **Qué es:** documento de decisiones técnicas de Proyecto20-10. Describe el stack previsto, la arquitectura, la organización de carpetas y las convenciones de desarrollo. Corresponde a la Instancia A: las decisiones quedan documentadas antes de implementar la aplicación. Las elecciones todavía no verificadas se identifican como propuestas o pendientes de confirmación.

## 1. Stack y versiones

| Capa | Elección prevista | Versión | Justificación |
|---|---|---|---|
| Frontend | React + Vite + pnpm | Pendiente de verificar las versiones efectivas | Permite construir una interfaz web con componentes reutilizables y un entorno de desarrollo adecuado para una SPA. |
| Backend | FastAPI + uv | Pendiente de verificar las versiones efectivas | FastAPI permite definir una API HTTP con validación de datos y documentación automática. uv se utilizará para gestionar el entorno y las dependencias de Python. |
| ORM / driver | Pendiente de decisión | Por definir | La elección debe contemplar la integración con PostgreSQL, la mantenibilidad y las necesidades del modelo de datos. |
| Base de datos | PostgreSQL | 18.6, versión objetivo indicada en la consigna | Base de datos relacional para persistir usuarios, cursos, aportes y recorridos personales. |
| Infraestructura de desarrollo | Docker + Docker Compose | Pendiente de verificar | Permitirá levantar los servicios de desarrollo de forma reproducible. |

**Criterio sobre las versiones:** las versiones efectivamente instaladas deberán verificarse antes de iniciar la Instancia B. Las versiones declaradas en archivos de dependencias, las instaladas en el equipo y las imágenes utilizadas por Docker no deben confundirse. No se consideran verificadas por este documento.

## 2. Decisiones técnicas

Las siguientes decisiones constituyen una propuesta inicial de diseño. Las que afecten requisitos explícitos de la cátedra deberán contrastarse con la SPEC original antes de implementar.

| ID | Decisión | Alternativas consideradas | Elección propuesta | Justificación |
|---|---|---|---|---|
| TD-001 | Separación de responsabilidades | Lógica concentrada en endpoints / arquitectura en capas | Controllers, services y repositories | Facilita probar las reglas de negocio, mantener el código y separar HTTP del acceso a datos. |
| TD-002 | Paginación de listados | Devolver todos los registros / paginación por offset / paginación por cursor | Paginación por offset y límite | Es sencilla de comprender y adecuada para un catálogo inicial. Debe aplicarse a todos los listados. |
| TD-003 | Formato de errores de API | Mensajes libres / formato uniforme basado en Problem Details | Proponer `application/problem+json` | Permite comunicar errores con una estructura consistente. Se deberá acordar el formato definitivo y documentarlo antes de implementar. |
| TD-004 | Asociación de cursos a recorridos | Guardar los cursos como texto / relación directa / tabla intermedia | Relación mediante una entidad intermedia | Permite representar qué cursos integran cada recorrido y deja espacio para ordenar los elementos si ese requisito se confirma. |
| TD-005 | Validación de aportes | Publicación inmediata / revisión antes de publicar | Estados de aporte con revisión previa | La SPEC de clase establece que los cursos cargados y validados pasan al catálogo. El detalle de los estados debe contrastarse con el documento original. |
| TD-006 | Autenticación y permisos | Funciones públicas sin cuentas / autenticación para acciones personales | Autenticación para operaciones restringidas, si se confirma en el alcance | Los aportes, la moderación y la administración de recorridos pueden requerir permisos diferentes. El mecanismo concreto queda pendiente de definición. |

### 2.1. Criterios para revisar las decisiones

- No se deberá implementar una decisión técnica que contradiga un requisito obligatorio de la cátedra.
- Las decisiones de producto —por ejemplo, quién puede validar un aporte— deben estar definidas en el PRD o en la SPEC refinada.
- Las decisiones de persistencia deben ser coherentes con el esquema documentado en `BackendSchema.md`.
- Las decisiones de navegación y presentación deben ser coherentes con `UX-UI.md` y `APPFlow.md`.
- Si una decisión cambia, se deberá actualizar la documentación relacionada para evitar contradicciones.

## 3. Arquitectura

### 3.1. Patrón y capas

Se propone utilizar **Screaming Architecture** junto con una arquitectura en capas. La organización principal del código debe reflejar las funcionalidades del producto y no limitarse a separar archivos genéricos por tecnología.

```mermaid
flowchart LR
    HTTP["HTTP / Routers"] --> SERVICE["Services"]
    SERVICE --> REPOSITORY["Repositories"]
    REPOSITORY --> DB[("PostgreSQL")]
    SERVICE --> MODELS["Modelos y esquemas"]
```

Responsabilidades:

- **Routers / controllers:** reciben las solicitudes HTTP, validan la entrada mediante los esquemas correspondientes y delegan la operación. No concentran las reglas de negocio.
- **Services:** implementan las reglas de negocio, coordinan las operaciones y pueden probarse sin depender directamente de HTTP.
- **Repositories:** encapsulan el acceso y la persistencia de datos. No deben decidir reglas propias del producto.
- **Modelos y esquemas:** representan las entidades persistidas y las estructuras de entrada y salida de la API, según la tecnología elegida.
- **Base de datos:** almacena la información persistente y aplica las restricciones de integridad correspondientes.

El diagrama representa una arquitectura propuesta, no una implementación existente.

### 3.2. Estructura de carpetas prevista para la Instancia B

```text
Proyecto20-10/
├── backend/
│   ├── pyproject.toml
│   ├── Dockerfile
│   ├── app/
│   │   ├── main.py
│   │   ├── config.py
│   │   ├── cursos/
│   │   │   ├── router.py
│   │   │   ├── service.py
│   │   │   ├── repository.py
│   │   │   └── models.py
│   │   ├── aportes/
│   │   │   ├── router.py
│   │   │   ├── service.py
│   │   │   ├── repository.py
│   │   │   └── models.py
│   │   ├── recorridos/
│   │   │   ├── router.py
│   │   │   ├── service.py
│   │   │   ├── repository.py
│   │   │   └── models.py
│   │   └── identidad/
│   │       ├── router.py
│   │       ├── service.py
│   │       ├── repository.py
│   │       └── models.py
│   └── tests/
├── frontend/
│   ├── package.json
│   ├── Dockerfile
│   └── src/
│       ├── main.jsx
│       ├── app/
│       ├── features/
│       │   ├── catalogo/
│       │   ├── aportar/
│       │   ├── revision/
│       │   └── recorridos/
│       └── styles/
├── docker-compose.yml
└── docs/
```

Este árbol es una propuesta inicial. Los nombres y módulos definitivos podrán ajustarse según el alcance aprobado y las convenciones del proyecto. La documentación actual permanece en `docs/`; el árbol no implica que los directorios de implementación deban crearse durante la Instancia A.

### 3.3. Servicios previstos para Docker Compose

| Servicio | Imagen o base prevista | Puerto de desarrollo | Responsabilidad |
|---|---|---|---|
| `postgres` | `postgres:18.6` | `5432` | Persistencia de los datos. |
| `backend` | Imagen Python con uv | `8000` | API HTTP desarrollada con FastAPI. |
| `frontend` | Imagen Node.js con pnpm | `5173` | Servidor de desarrollo de Vite. |

Los puertos son valores de referencia para el entorno local y deberán confirmarse al configurar Docker Compose.

```mermaid
flowchart LR
    BROWSER["Navegador"] --> FE["Frontend Vite :5173"]
    FE -->|"Solicitudes /api"| BE["Backend FastAPI :8000"]
    BE --> DB[("PostgreSQL :5432")]
```

En el desarrollo, el frontend podrá comunicarse con el backend mediante una configuración de proxy o una URL de API documentada. La conexión y las variables necesarias deberán definirse durante la implementación.

La estrategia de construcción de imágenes y la configuración multi-stage se documentarán cuando corresponda según las indicaciones de la cátedra.

## 4. Convenciones de desarrollo

### 4.1. Commits

Se utilizará la convención **Conventional Commits**. Los mensajes deberán ser breves, descriptivos y coherentes con el cambio realizado.

| Prefijo | Uso | Ejemplo |
|---|---|---|
| `docs:` | Documentación | `docs: completar guia UX-UI` |
| `feat:` | Funcionalidad nueva | `feat: agregar consulta del catalogo` |
| `fix:` | Corrección de un error | `fix: corregir validacion del aporte` |
| `test:` | Pruebas | `test: agregar pruebas de paginacion` |
| `refactor:` | Reorganización sin cambiar el comportamiento esperado | `refactor: separar reglas de negocio` |
| `chore:` | Mantenimiento general | `chore: actualizar dependencias` |
| `docker:` | Configuración de contenedores | `docker: configurar servicios de desarrollo` |

Durante la Instancia A, los commits deberán describir cambios reales en la documentación. No se crearán commits que afirmen implementar funcionalidades todavía inexistentes.

### 4.2. Flujo de Git

- `main` será la rama principal del repositorio.
- Los cambios se realizarán en el contexto de trabajo acordado por la cátedra; cuando corresponda, se utilizarán ramas para separar tareas.
- Antes de integrar cambios, se revisarán los archivos modificados y el estado del repositorio.
- Los cambios documentales se agruparán en commits coherentes y descriptivos.
- No se deberá afirmar que una revisión, aprobación o integración fue realizada si no ocurrió efectivamente.

El flujo concreto de ramas y revisiones podrá ampliarse en un documento independiente si la cátedra lo solicita.

### 4.3. Errores de API

Se propone utilizar un formato de error uniforme basado en `application/problem+json`, pendiente de confirmación durante el diseño de la API.

Ejemplo ilustrativo:

```json
{
  "type": "about:blank",
  "title": "Datos inválidos",
  "status": 422,
  "detail": "Revisá los campos indicados antes de enviar el aporte."
}
```

El ejemplo expresa el formato propuesto; no corresponde a una respuesta de una API implementada. Los errores deberán evitar exponer contraseñas, secretos, trazas internas o información sensible.

### 4.4. Variables de entorno

| Variable | Ejemplo orientativo | Obligatoria | Descripción |
|---|---|---|---|
| `DATABASE_URL` | `postgresql://usuario:clave@postgres:5432/base` | Sí, para el backend conectado a la BD | Cadena de conexión a PostgreSQL. |
| `APP_ENV` | `development` | Por definir | Entorno de ejecución. |
| `CORS_ORIGINS` | `http://localhost:5173` | Según configuración | Orígenes permitidos para solicitudes del navegador. |
| `SECRET_KEY` | No se debe usar un valor real en la documentación | Si el mecanismo de autenticación elegido la requiere | Secreto de la aplicación. |

Los valores son ejemplos de configuración, no credenciales reales. Los secretos deberán mantenerse fuera del repositorio mediante variables de entorno y archivos locales ignorados por Git. Si se incorpora un `.env.example`, deberá contener únicamente valores ficticios o no sensibles.

### 4.5. Logging y excepciones

Los servicios deberán registrar eventos relevantes para el diagnóstico, como errores de persistencia y fallos inesperados, sin incluir contraseñas, tokens ni datos sensibles innecesarios.

Las excepciones deberán manejarse en la capa adecuada y convertirse en respuestas comprensibles para el cliente. Los detalles internos se conservarán en los registros del servidor cuando corresponda, sin exponer trazas técnicas en las respuestas públicas.

El formato, el nivel de detalle y el destino de los registros se definirán al implementar la aplicación.

## 5. Requisitos no funcionales técnicos

| Restricción o requisito | Cómo se prevé cumplir | Dónde se verificará |
|---|---|---|
| Todos los listados deben estar paginados. | Definir un contrato de paginación uniforme en la API y aplicarlo a cada listado. | Endpoints de listado y pruebas de API. |
| Mobile-first con mejora progresiva. | Definir estilos base sin media queries y agregar mejoras mediante `min-width`. | `UX-UI.md` y pruebas de interfaz. |
| Menú hamburguesa en móviles. | Documentar el comportamiento accesible de navegación y su adaptación por viewport. | `APPFlow.md`, guía UX-UI y pruebas de navegación. |
| Screaming Architecture. | Organizar módulos por dominio y separar routers, servicios y repositorios. | Revisión de la estructura del repositorio. |
| Control de acceso. | Definir permisos para operaciones restringidas y comprobarlos en el backend. | PRD, diseño de API y pruebas de autorización. |
| Validación de datos. | Validar las entradas y aplicar restricciones de integridad en persistencia. | Esquemas, servicios y pruebas. |
| Mantenibilidad. | Documentar las decisiones, mantener responsabilidades separadas y utilizar convenciones consistentes. | Revisión del código y de la documentación. |

Esta tabla describe mecanismos previstos. Su cumplimiento deberá comprobarse durante las etapas de implementación y pruebas.

## 6. Riesgos técnicos

| Riesgo | Probabilidad inicial | Impacto | Mitigación prevista |
|---|---|---|---|
| Diferencias entre la SPEC original y el stack actualmente previsto. | Media | Alto | Contrastar los documentos de la cátedra y registrar la decisión antes de implementar. |
| Versiones incompatibles entre frontend, backend, herramientas y contenedores. | Media | Alto | Verificar versiones, fijar dependencias y probar el entorno de desarrollo. |
| Complejidad de la autenticación y autorización. | Media | Alto | Definir roles y permisos antes de implementar las operaciones restringidas. |
| Enlaces de cursos inválidos, duplicados o que dejen de estar disponibles. | Media | Medio | Definir validaciones y criterios de revisión en el PRD y la SPEC. |
| Diferencias entre la paginación del frontend y la API. | Media | Medio | Documentar un contrato único y comprobarlo mediante pruebas. |
| Problemas de contraste o navegación en móviles. | Media | Medio | Revisar contrastes, navegación por teclado y adaptación responsive. |

La probabilidad y el impacto son estimaciones iniciales para orientar la planificación, no resultados de una evaluación técnica ejecutada.

---

## 7. Estado y pendientes

Este documento corresponde a la documentación técnica de la Instancia A. Antes de comenzar la implementación deberán resolverse o confirmarse los siguientes puntos:

- Verificar las versiones efectivas de las herramientas y dependencias.
- Contrastar el stack previsto con la SPEC original y las indicaciones de la cátedra.
- Definir el ORM o driver de PostgreSQL.
- Confirmar las decisiones de autenticación, paginación y formato de errores.
- Validar la estructura de carpetas y los servicios de Docker Compose.
- Alinear las decisiones técnicas con el PRD, `BackendSchema.md`, `UX-UI.md` y `APPFlow.md`.

**Estado:** propuesta técnica documentada; implementación pendiente de aprobación y de la etapa correspondiente.

---

**Referencia**

- Design Docs at Google — https://www.industrialempathy.com/posts/design-docs-at-google/