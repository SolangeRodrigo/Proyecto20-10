# SPEC — Proyecto20-10

> **Qué es este documento:** versión refinada de la SPEC de clase. Conserva los requisitos heredados y explicita las decisiones tomadas para resolver ambigüedades. La versión original se conserva en [`SPEC_ORIGINAL.md`](./SPEC_ORIGINAL.md). Las decisiones de producto se amplían en el [PRD](./PRD.md) y las decisiones técnicas en el [TRD](./TRD.md).

## 1. Identidad del producto

- **Nombre propio:** Proyecto20-10.
- **Una línea:** una plataforma comunitaria para personas que quieren aprender, descubrir cursos gratuitos y organizar sus propios recorridos de aprendizaje a partir de recursos compartidos y validados por la comunidad.

## 2. Problema

Las personas que quieren aprender por su cuenta suelen encontrar cursos gratuitos distribuidos en diferentes plataformas, páginas y comunidades. La búsqueda puede llevar tiempo y resulta difícil distinguir los recursos útiles, mantenerlos organizados y conocer cuáles fueron revisados antes de incorporarlos a un catálogo.

Las plataformas educativas tradicionales suelen organizar sus contenidos dentro de sus propios servicios. Las publicaciones en comunidades, foros y redes sociales permiten compartir recursos, pero la información puede quedar dispersa y no siempre cuenta con un proceso de revisión.

Una comunidad que pueda proponer cursos y validar sus datos antes de publicarlos permite reunir recursos en un catálogo común. La participación de los usuarios aporta nuevas recomendaciones, mientras que la validación busca mantener la calidad y la confiabilidad de la información.

Proyecto20-10 busca reunir esas dos necesidades: descubrir cursos gratuitos en un catálogo comunitario y organizar recursos de interés en recorridos personales de aprendizaje.

## 3. Visión

En los próximos doce meses, Proyecto20-10 aspira a convertirse en un espacio comunitario organizado en el que las personas puedan descubrir cursos gratuitos, contribuir con nuevos recursos y construir recorridos de aprendizaje personales. La plataforma deberá ofrecer una experiencia clara desde dispositivos móviles, mantener un catálogo revisado y facilitar que cada usuario organice sus objetivos de aprendizaje.

## 4. Alcance

### Dentro del alcance

- Consultar un catálogo público de cursos gratuitos validados.
- Mostrar información relevante de cada curso y un enlace al recurso original.
- Permitir que los usuarios registrados propongan cursos para revisión.
- Mantener las propuestas pendientes fuera del catálogo público hasta su validación.
- Permitir que usuarios autorizados revisen propuestas y las aprueben o rechacen.
- Registrar si la persona que propone un curso declara haberlo realizado.
- Crear y administrar recorridos personales de aprendizaje.
- Incorporar cursos del catálogo a un recorrido personal.
- Consultar el estado de las propuestas propias.
- Aplicar paginación en las consultas de listados y tablas.
- Ofrecer una interfaz mobile-first y un menú hamburguesa en dispositivos móviles.

### Fuera del alcance explícito

- Venta de cursos, suscripciones o pagos.
- Emisión de certificados oficiales.
- Alojar o reproducir el contenido educativo de plataformas externas.
- Publicar automáticamente cursos sin validación.
- Extraer cursos de otras plataformas mediante scraping como mecanismo principal del catálogo.
- Aplicaciones móviles nativas.
- Recomendaciones personalizadas basadas en inteligencia artificial.
- Seguimiento automático del progreso dentro de cursos externos.
- Funciones sociales avanzadas, como mensajería privada o una red social interna.

## 5. Reglas de producto clave

| ID | Regla | Origen |
|---|---|---|
| BR-001 | Todo curso propuesto debe ingresar en estado pendiente de revisión. Solo podrá formar parte del catálogo público después de ser validado. | SPEC de clase |
| BR-002 | Cada usuario podrá consultar y modificar únicamente sus propios recorridos de aprendizaje. | Decisión de producto; ver PRD |
| BR-003 | Al proponer un curso, el contribuyente deberá declarar si realizó ese curso. La declaración no equivale a una certificación oficial. | SPEC de clase |
| BR-004 | Solo los usuarios autorizados para la revisión podrán aprobar o rechazar propuestas. | Decisión de producto; ver PRD |
| BR-005 | Los recorridos personales no serán públicos por defecto. Su eventual publicación requerirá una decisión explícita de producto. | Decisión propuesta; ver PRD |
| BR-006 | Las propuestas deberán incluir los datos obligatorios definidos para identificar el curso y acceder a su recurso original. | Decisión de producto; campos detallados en PRD |

## 6. Stack registrado

El stack previsto para el proyecto es el siguiente. Las versiones que todavía no se verificaron deberán confirmarse antes de iniciar la implementación; no se consideran versiones instaladas hasta comprobarlas.

| Componente | Tecnología | Versión o estado |
|---|---|---|
| Frontend | React + Vite | React 19; versión exacta de Vite pendiente de verificación |
| Gestor de paquetes frontend | pnpm | Versión exacta pendiente de verificación |
| Backend | FastAPI | Versión exacta pendiente de verificación |
| Gestor de dependencias backend | uv | Versión exacta pendiente de verificación |
| Base de datos | PostgreSQL | 18.6, versión prevista |
| Infraestructura de desarrollo | Docker + Docker Compose | Versiones pendientes de verificación |

Las versiones exactas de las herramientas instaladas y las dependencias seleccionadas deberán registrarse durante la preparación de la Instancia B. Las dependencias del proyecto se fijarán en sus archivos de configuración y bloqueo correspondientes.

## 7. Restricciones técnicas heredadas de la SPEC de clase

### 7.1. Mobile-first y progressive enhancement

La interfaz se diseñará primero para pantallas pequeñas. La estructura y las funcionalidades esenciales deberán funcionar en la presentación base, sin depender de media queries para existir. Las reglas `@media` con `min-width` se utilizarán para ampliar o mejorar la experiencia en pantallas de mayor tamaño.

### 7.2. Paginación

Todas las consultas de listados y tablas deberán implementar paginación. No se deberá depender de cargar la totalidad de los registros en una sola consulta para mostrar listados.

### 7.3. Navegación móvil

La navegación deberá incorporar un menú hamburguesa en dispositivos móviles para mantener una interfaz clara y aprovechar el espacio disponible.

### 7.4. Screaming Architecture

La organización del código deberá reflejar los dominios y las responsabilidades principales del sistema, en lugar de agrupar todos los archivos exclusivamente por tipo técnico. La estructura concreta de carpetas y módulos se documentará en la sección 3.2 del [TRD](./TRD.md).

## 8. Vacíos de la SPEC de clase y decisiones tomadas

| Vacío o ambigüedad | Opciones consideradas | Decisión o estado | Referencia |
|---|---|---|---|
| Quién valida los cursos | Publicación automática o revisión por usuarios autorizados | Se requiere validación antes de publicar. Los permisos concretos del rol revisor deben quedar documentados en el PRD. | PRD |
| Qué significa agregar un curso al catálogo | Publicar directamente o crear una propuesta pendiente | Se crea una propuesta pendiente; solo se publica tras su aprobación. | BR-001 |
| Qué significa crear un recorrido personal | Recorrido individual o compartido públicamente | Se define como personal y privado por defecto; la publicación pública queda fuera del alcance inicial. | PRD |
| Cómo se identifica al contribuyente | Permitir propuestas anónimas o asociarlas a una cuenta | Se prevé que las propuestas estén asociadas a un usuario registrado. | PRD |
| Qué significa declarar que se realizó un curso | Declaración informal o acreditación oficial | Se registra como declaración del contribuyente, sin presentarla como certificación. | BR-003 |
| Cómo se detectan cursos duplicados | Permitir todos los enlaces o controlar duplicados | Se propone validar la URL normalizada para reducir duplicados; el criterio definitivo deberá detallarse en el PRD y la implementación. | PRD |
| Qué filtros tendrá el catálogo | Búsqueda por texto, categorías u otros criterios | Los filtros definitivos quedan pendientes de priorización para el MVP. | PRD |
| Qué versiones exactas se utilizarán | Usar versiones actuales o fijar versiones verificadas | Se registrarán las versiones comprobadas al preparar el entorno de desarrollo. | TRD |

Las decisiones que todavía figuran como propuestas o pendientes deberán revisarse antes de considerarse requisitos definitivos. Las decisiones de producto se detallan en el PRD y las técnicas en el TRD.

## 9. Historia de la SPEC

| Fecha | Cambio | Motivo |
|---|---|---|
| 20/10/2026 | Recepción de la SPEC de clase. | Documento base de la actividad. |
| 26/10/2026 | Recuperación de una copia de la SPEC original en `docs/SPEC_ORIGINAL.md`. | Preservar el contenido original antes de refinarlo. |
| 26/10/2026 | Preparación de esta versión refinada de la SPEC. | Explicitar el alcance, las reglas de producto, las restricciones heredadas y las decisiones pendientes. |

**Nota sobre el historial:** las fechas de esta tabla documentan el proceso de trabajo. No implican que el primer commit del repositorio haya sido creado el 20/10/2026 ni que la copia original se haya incorporado en esa fecha. El historial real de Git es la fuente de referencia para verificar cuándo se registró cada cambio.