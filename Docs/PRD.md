# PRD — Product Requirements Document — Proyecto20-10

> **Qué es:** el QUÉ y el POR QUÉ. Define para quién se construye el producto, qué problema resuelve, qué funcionalidades incluye y qué queda fuera del alcance del MVP.

## 1. Resumen ejecutivo

Proyecto20-10 es una plataforma comunitaria para descubrir cursos gratuitos disponibles en distintas plataformas educativas y organizar recorridos personales de aprendizaje. Los usuarios podrán consultar un catálogo público, aportar cursos con sus metadatos y declarar si realizaron el curso. Los aportes deberán ser validados antes de incorporarse al catálogo público. Además, cada usuario podrá organizar cursos en rutas personales de aprendizaje.

## 2. Objetivos y métricas de éxito

| Objetivo | Cómo sabemos que lo logramos |
|---|---|
| Ofrecer un catálogo comunitario confiable. | Los cursos publicados tienen sus datos obligatorios completos y fueron validados. |
| Facilitar el descubrimiento de cursos gratuitos. | Un visitante puede consultar el catálogo paginado sin registrarse. |
| Promover la participación comunitaria. | Un usuario registrado puede enviar un aporte y consultar su estado. |
| Facilitar la planificación del aprendizaje. | Un usuario puede crear una ruta personal y agregar cursos del catálogo. |
| Evitar duplicados y aportes incompletos. | El sistema valida los campos obligatorios y detecta URLs ya registradas. |

Las métricas cuantitativas y sus valores objetivo se definirán antes de evaluar el MVP.

## 3. Personas

### Persona 1 — Alex, estudiante autodidacta

- **Contexto:** estudia por su cuenta y consulta cursos gratuitos de distintas plataformas para aprender nuevas habilidades.
- **Motivaciones:** encontrar recursos relevantes y organizar qué aprender a continuación.
- **Frustraciones hoy:** la información está distribuida entre distintos sitios y le cuesta comparar opciones.
- **Historias tipo:**
  - "Quiero explorar cursos gratuitos sin tener que crear una cuenta."
  - "Quiero encontrar cursos sobre un tema específico y acceder a la plataforma que los ofrece."
  - "Quiero ordenar los cursos que me interesan en una ruta de aprendizaje."

### Persona 2 — Sam, integrante de una comunidad de aprendizaje

- **Contexto:** encuentra cursos gratuitos y quiere compartirlos con otras personas.
- **Motivaciones:** aportar recursos útiles y consultar cursos compartidos por la comunidad.
- **Frustraciones hoy:** no siempre sabe si un recurso compartido es válido, gratuito o está disponible.
- **Historias tipo:**
  - "Quiero proponer un curso con su enlace y sus datos para que otras personas lo encuentren."
  - "Quiero saber si mi propuesta fue aprobada o rechazada."
  - "Quiero compartir cursos sin que aparezcan en el catálogo antes de ser revisados."

### Persona 3 — Responsable de validación

- **Contexto:** revisa los aportes enviados por la comunidad antes de publicarlos.
- **Motivaciones:** mantener un catálogo útil, consistente y sin duplicados.
- **Frustraciones hoy:** los aportes pueden tener datos incompletos, enlaces inválidos o información repetida.
- **Historias tipo:**
  - "Quiero revisar los datos de una propuesta antes de aprobarla."
  - "Quiero rechazar un aporte que no cumple los criterios definidos."
  - "Quiero evitar que un curso pendiente aparezca como publicado."

## 4. User stories

| ID | Prioridad | Historia | Criterios de aceptación |
|---|---|---|---|
| US-001 | P0 | Como visitante, quiero consultar el catálogo paginado para descubrir cursos sin registrarme. | [ ] Al ingresar al catálogo se muestra la primera página con hasta 20 cursos. [ ] Si hay más de 20 cursos, se puede navegar entre páginas. [ ] Si no hay cursos publicados, se muestra un estado vacío informativo. |
| US-002 | P0 | Como usuario registrado, quiero aportar un curso con sus metadatos para enriquecer el catálogo. | [ ] Puedo enviar los campos obligatorios definidos para un curso. [ ] Si faltan datos obligatorios o el enlace no es válido, el sistema informa el error. [ ] El aporte queda pendiente de validación. [ ] El curso no aparece en el catálogo público mientras esté pendiente. |
| US-003 | P0 | Como responsable de validación, quiero aprobar o rechazar aportes para mantener la calidad del catálogo. | [ ] Puedo consultar aportes pendientes. [ ] Puedo aprobar o rechazar una propuesta. [ ] Una propuesta aprobada puede publicarse. [ ] Una propuesta rechazada no aparece en el catálogo público. |
| US-004 | P0 | Como usuario, quiero registrarme e iniciar sesión para utilizar las funcionalidades personales. | [ ] Puedo registrarme con los datos requeridos. [ ] El sistema valida los datos y evita registrar una cuenta con un email ya utilizado. [ ] Puedo iniciar sesión con credenciales válidas. [ ] Las credenciales incorrectas no permiten acceder. |
| US-005 | P1 | Como usuario registrado, quiero crear una ruta personal de aprendizaje para organizar los cursos que quiero realizar. | [ ] Puedo crear una ruta con un nombre. [ ] Puedo incorporar cursos publicados del catálogo. [ ] Puedo consultar mis rutas. [ ] No puedo modificar las rutas de otro usuario. |
| US-006 | P1 | Como usuario registrado, quiero editar o eliminar mis rutas para mantener actualizado mi plan de aprendizaje. | [ ] Puedo cambiar el nombre de una ruta propia. [ ] Puedo quitar cursos de una ruta propia. [ ] Puedo eliminar una ruta propia mediante una acción explícita. [ ] Las rutas de otros usuarios permanecen sin cambios. |
| US-007 | P1 | Como usuario que realizó un curso, quiero declarar si lo completé o lo tomé para aportar contexto a la comunidad. | [ ] Al proponer un curso puedo declarar si lo realicé. [ ] La declaración queda asociada al aporte. [ ] El sistema no presenta esa declaración como una certificación oficial. |
| US-008 | P1 | Como usuario registrado, quiero consultar el estado de mis aportes para saber si fueron revisados. | [ ] Puedo consultar mis propios aportes. [ ] Cada aporte muestra su estado actual. [ ] No puedo consultar ni modificar los aportes privados de otros usuarios. |

Las prioridades P0 y P1 representan una propuesta inicial para el MVP y deberán contrastarse con la SPEC de la cátedra.

## 5. Requisitos funcionales

| ID | Requisito | Historia relacionada |
|---|---|---|
| RF-001 | El sistema permitirá consultar el catálogo de cursos publicados sin iniciar sesión. | US-001 |
| RF-002 | El sistema paginará los resultados del catálogo en páginas de hasta 20 cursos. | US-001 |
| RF-003 | El sistema permitirá a usuarios registrados proponer cursos con los metadatos obligatorios. | US-002 |
| RF-004 | El sistema mantendrá los aportes pendientes fuera del catálogo público. | US-002, US-003 |
| RF-005 | El sistema permitirá a usuarios autorizados aprobar o rechazar aportes. | US-003 |
| RF-006 | El sistema permitirá registrar cuentas e iniciar sesión. | US-004 |
| RF-007 | El sistema permitirá crear, consultar, editar y eliminar rutas personales. | US-005, US-006 |
| RF-008 | El sistema permitirá agregar cursos publicados a las rutas personales. | US-005 |
| RF-009 | El sistema permitirá declarar si el usuario realizó el curso propuesto. | US-007 |
| RF-010 | El sistema permitirá consultar el estado de los aportes propios. | US-008 |
| RF-011 | El sistema validará los campos obligatorios y los enlaces enviados en los aportes. | US-002 |
| RF-012 | El sistema controlará los permisos de acceso a las operaciones restringidas. | US-003, US-004, US-005, US-006, US-008 |

## 6. Requisitos no funcionales

| ID | Requisito | Notas |
|---|---|---|
| RNF-001 | Todos los listados deberán estar paginados. | Requisito indicado en la plantilla de la cátedra. |
| RNF-002 | La interfaz deberá diseñarse con enfoque mobile-first y mejora progresiva. | Requisito indicado en la plantilla de la cátedra. |
| RNF-003 | La interfaz deberá mantener una navegación clara y consistente. | Criterio de usabilidad. |
| RNF-004 | Las operaciones restringidas deberán verificar la identidad y los permisos del usuario. | Criterio de seguridad. |
| RNF-005 | Los datos de entrada deberán validarse antes de persistirse. | Criterio de integridad. |
| RNF-006 | La solución deberá organizarse para facilitar su mantenimiento y evolución. | Criterio de mantenibilidad. |
| RNF-007 | El sistema deberá informar los errores de validación de forma comprensible. | Criterio de usabilidad. |

## 7. Reglas de negocio

| ID | Regla | Fuente |
|---|---|---|
| BR-001 | Un curso aportado no aparecerá en el catálogo público hasta ser validado. | SPEC de la cátedra; verificar sección exacta. |
| BR-002 | Quien aporte un curso deberá declarar si lo realizó o no. | SPEC de la cátedra; verificar sección exacta. |
| BR-003 | Las rutas de aprendizaje serán personales y privadas por defecto. | Decisión propuesta para el producto. |
| BR-004 | No se permitirá registrar dos aportes con la misma URL normalizada de curso. | Decisión propuesta para evitar duplicados. |
| BR-005 | Solo los perfiles autorizados podrán aprobar o rechazar propuestas. | Decisión de control de acceso. |
| BR-006 | Un usuario solo podrá administrar sus propias rutas. | Decisión de privacidad y permisos. |
| BR-007 | Los cursos publicados deberán contar con los campos obligatorios definidos para el catálogo. | Decisión de calidad de datos. |
| BR-008 | La declaración de haber realizado un curso no equivaldrá a una certificación oficial. | Decisión de interpretación del dato. |

## 8. Fuera de alcance (out of scope)

La primera versión no incluirá:

- Pagos, suscripciones ni venta de cursos.
- Cursos pagos como parte del catálogo de cursos gratuitos.
- Emisión de certificados oficiales por parte de la plataforma.
- Alojamiento o reproducción del contenido educativo de terceros.
- Aplicaciones móviles nativas para Android o iOS.
- Integraciones automáticas con plataformas educativas que requieran scraping como mecanismo principal.
- Mensajería privada, foros o redes sociales internas.
- Recomendaciones personalizadas mediante inteligencia artificial.
- Seguimiento automático del progreso dentro de plataformas externas.
- Publicación automática de propuestas sin validación.

## 9. Supuestos y decisiones sobre la SPEC de clase

Este PRD desarrolla el producto a partir de la idea de un catálogo comunitario de cursos gratuitos y rutas de aprendizaje. Antes de considerar definitivas las reglas de negocio, debe verificarse cada requisito contra la especificación original en `docs/SPEC.md`.

Decisiones propuestas que requieren validación:

- Página de catálogo de hasta 20 cursos.
- Rutas personales privadas por defecto.
- Detección de duplicados mediante URL normalizada.
- Separación entre usuario registrado y responsable de validación.
- Priorización inicial de historias P0 y P1.
- Exclusión del scraping como mecanismo principal del catálogo.

No deben considerarse requisitos confirmados de la cátedra hasta contrastarlos con la SPEC original.

## 10. Preguntas abiertas

| Pregunta | Impacto | Estado |
|---|---|---|
| ¿Cuáles son exactamente los metadatos obligatorios de un curso? | Alto | Abierta |
| ¿Qué criterios determinan que un curso es gratuito y válido? | Alto | Abierta |
| ¿Qué rol puede validar los aportes y cómo se asigna? | Alto | Abierta |
| ¿La SPEC exige autenticación y recuperación de contraseña en el MVP? | Alto | Pendiente de contraste con SPEC |
| ¿Las rutas personales deben ser privadas por defecto? | Medio | Decisión propuesta; validar |
| ¿Se debe permitir declarar que se realizó el curso al aportar o también después? | Medio | Abierta |
| ¿Qué filtros y criterios de búsqueda requiere el catálogo? | Medio | Abierta |
| ¿Qué métricas cuantitativas se usarán para evaluar el MVP? | Medio | Abierta |

---

## Referencias

- Plantilla PRD de Atlassian: https://www.atlassian.com/software/confluence/templates/product-requirements
- Plantilla de requisitos de Atlassian: https://www.atlassian.com/software/confluence/templates/requirements
- Especificación de la cátedra: `docs/SPEC.md`
