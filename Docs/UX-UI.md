\# UX-UI — Guía visual de estilos — Proyecto20-10



> \*\*Qué es:\*\* guía visual y de interacción de Proyecto20-10. Define los principios de diseño, los tokens, los componentes y las reglas de accesibilidad de la plataforma. La identidad combina una estética rosa pastel, crema y bordó con patrones de interacción inspirados en Material Design. Esta guía corresponde a la documentación de la Instancia A; su implementación queda pendiente.



\## 1. Principios



1\. \*\*Aprender sin distracciones:\*\* la interfaz prioriza los cursos, su información y las acciones necesarias para descubrirlos o guardarlos.

2\. \*\*Calidez sin perder claridad:\*\* los rosas suaves y el fondo crema aportan identidad, mientras que el bordó destaca las acciones importantes.

3\. \*\*Patrones familiares:\*\* botones, formularios, navegación, tarjetas y mensajes utilizan convenciones reconocibles de Material Design, adaptadas al producto.

4\. \*\*Espacio para leer:\*\* el espaciado y la jerarquía tipográfica deben facilitar la lectura y comparación de cursos sin recargar la pantalla.

5\. \*\*Mobile-first:\*\* el diseño base se define para pantallas pequeñas y se mejora progresivamente hacia tablet y escritorio.

6\. \*\*Accesibilidad desde el diseño:\*\* el color no será el único medio para comunicar estados; se utilizarán textos, iconos, foco visible y etiquetas accesibles.

7\. \*\*Consistencia:\*\* un mismo tipo de acción o estado debe mantener una apariencia y un comportamiento reconocibles en toda la plataforma.



\## 2. Design tokens



\### 2.1. Paleta de colores



| Token | Valor | Uso |

|---|---|---|

| `--color-primary` | `#903053` | Botones principales, enlaces y acciones destacadas. |

| `--color-primary-dark` | `#702440` | Estados hover y active de acciones principales. |

| `--color-primary-container` | `#F8E8ED` | Fondo de elementos seleccionados y navegación activa. |

| `--color-on-primary` | `#FFFFFF` | Texto e iconos sobre el color primario. |

| `--color-secondary` | `#D994AE` | Detalles visuales y elementos secundarios no críticos. |

| `--color-secondary-container` | `#FBEFF3` | Fondos suaves de apoyo. |

| `--color-surface` | `#FFFFFF` | Tarjetas, formularios, diálogos y paneles. |

| `--color-background` | `#FFF9F5` | Fondo general de la aplicación. |

| `--color-text` | `#30252A` | Texto principal y títulos. |

| `--color-text-muted` | `#65545B` | Descripciones, metadatos y texto secundario. |

| `--color-border` | `#D8C8CE` | Bordes de campos y separadores. |

| `--color-hover` | `#F5E9ED` | Fondo hover de elementos secundarios. |

| `--color-success` | `#246B45` | Confirmaciones y estado aprobado. |

| `--color-success-container` | `#E5F3E9` | Fondo de mensajes de éxito. |

| `--color-warning` | `#795000` | Texto de advertencia y estado pendiente. |

| `--color-warning-container` | `#FFF0CE` | Fondo de mensajes de revisión. |

| `--color-error` | `#B3261E` | Errores de validación y acciones destructivas. |

| `--color-error-container` | `#FCE8E6` | Fondo de mensajes de error. |



La paleta busca una estética cálida y femenina sin convertir cada componente en un elemento decorativo. El bordó es el color de acción principal; los tonos pastel se utilizan como superficies y contenedores, no como sustitutos del texto legible.



Los estados de un curso deberán identificarse mediante texto y, cuando resulte útil, un icono: por ejemplo, “En revisión”, “Publicado” o “Rechazado”. El color por sí solo no comunicará el estado.



Los contrastes finales de texto, iconos y controles deberán comprobarse con una herramienta de contraste antes de implementar el diseño. No se asumirán ratios de accesibilidad sin verificarlos para cada combinación real.



\### 2.2. Tipografía



| Token | Familia | Tamaño / line-height | Uso |

|---|---|---|---|

| `--font-family-base` | `Roboto, system-ui, sans-serif` | — | Texto general e interfaz. |

| `--text-xs` | Hereda la familia base | `12px / 16px` | Metadatos muy secundarios. |

| `--text-sm` | Hereda la familia base | `14px / 20px` | Categorías, etiquetas y detalles de cursos. |

| `--text-base` | Hereda la familia base | `16px / 24px` | Párrafos, formularios y contenido general. |

| `--text-lg` | Hereda la familia base | `18px / 28px` | Títulos de tarjetas y bloques. |

| `--text-xl` | Hereda la familia base | `22px / 28px` | Títulos de secciones y pantallas. |

| `--text-display` | Hereda la familia base | `28px / 36px` | Título principal de una pantalla cuando corresponda. |



Roboto se propone por su relación con el ecosistema Material y su buena legibilidad en interfaces. La tipografía y sus pesos definitivos se verificarán durante la implementación. La carga de fuentes deberá contemplar alternativas de sistema y evitar que el contenido quede invisible mientras se descarga una fuente.



\### 2.3. Espaciado, radios, sombras y capas



| Token | Valor | Uso |

|---|---|---|

| `--space-1` | `4px` | Separación mínima entre elementos relacionados. |

| `--space-2` | `8px` | Espaciado interno compacto. |

| `--space-3` | `12px` | Separación entre icono y texto. |

| `--space-4` | `16px` | Padding estándar de tarjetas y formularios. |

| `--space-5` | `24px` | Separación entre bloques. |

| `--space-6` | `32px` | Separación entre secciones. |

| `--space-7` | `40px` | Separación amplia. |

| `--space-8` | `48px` | Separación de secciones principales. |

| `--radius-input` | `8px` | Campos, selects y controles de formulario. |

| `--radius-card` | `12px` | Tarjetas de cursos y paneles. |

| `--radius-button` | `20px` | Botones de acción con bordes redondeados. |

| `--radius-dialog` | `20px` | Diálogos y ventanas modales. |

| `--radius-chip` | `999px` | Chips y etiquetas compactas. |

| `--shadow-1` | `0 1px 3px rgba(48, 37, 42, 0.10)` | Elevación sutil de tarjetas. |

| `--shadow-2` | `0 4px 12px rgba(48, 37, 42, 0.14)` | Menús, diálogos y elevación destacada. |

| `--z-header` | `100` | Encabezado fijo cuando corresponda. |

| `--z-drawer` | `200` | Navegación lateral y overlay. |

| `--z-dialog` | `300` | Diálogos modales. |

| `--z-toast` | `400` | Mensajes temporales. |



\### 2.4. Bloque de variables CSS propuesto



Este bloque documenta los tokens que se utilizarán como referencia al implementar los estilos. No es código ya incorporado al frontend.



```css

:root {

&#x20; --color-primary: #903053;

&#x20; --color-primary-dark: #702440;

&#x20; --color-primary-container: #F8E8ED;

&#x20; --color-on-primary: #FFFFFF;

&#x20; --color-secondary: #D994AE;

&#x20; --color-secondary-container: #FBEFF3;



&#x20; --color-surface: #FFFFFF;

&#x20; --color-background: #FFF9F5;

&#x20; --color-text: #30252A;

&#x20; --color-text-muted: #65545B;

&#x20; --color-border: #D8C8CE;

&#x20; --color-hover: #F5E9ED;



&#x20; --color-success: #246B45;

&#x20; --color-success-container: #E5F3E9;

&#x20; --color-warning: #795000;

&#x20; --color-warning-container: #FFF0CE;

&#x20; --color-error: #B3261E;

&#x20; --color-error-container: #FCE8E6;



&#x20; --font-family-base: "Roboto", system-ui, sans-serif;

&#x20; --text-xs: 0.75rem;

&#x20; --text-sm: 0.875rem;

&#x20; --text-base: 1rem;

&#x20; --text-lg: 1.125rem;

&#x20; --text-xl: 1.375rem;

&#x20; --text-display: 1.75rem;



&#x20; --space-1: 4px;

&#x20; --space-2: 8px;

&#x20; --space-3: 12px;

&#x20; --space-4: 16px;

&#x20; --space-5: 24px;

&#x20; --space-6: 32px;

&#x20; --space-7: 40px;

&#x20; --space-8: 48px;



&#x20; --radius-input: 8px;

&#x20; --radius-card: 12px;

&#x20; --radius-button: 20px;

&#x20; --radius-dialog: 20px;

&#x20; --radius-chip: 999px;



&#x20; --shadow-1: 0 1px 3px rgba(48, 37, 42, 0.10);

&#x20; --shadow-2: 0 4px 12px rgba(48, 37, 42, 0.14);



&#x20; --z-header: 100;

&#x20; --z-drawer: 200;

&#x20; --z-dialog: 300;

&#x20; --z-toast: 400;

}

```



\## 3. Estrategia mobile-first con mejora progresiva



La SPEC establece que la presentación base debe funcionar sin media queries y que las reglas `@media (min-width: ...)` se utilizarán para agregar mejoras en pantallas más amplias.



| Capa | Dónde aplica | Comportamiento |

|---|---|---|

| Base, sin media queries | Todos los viewports; diseño inicial de referencia de 360px | Una columna, tarjetas apiladas, encabezado compacto con menú hamburguesa, formularios a ancho disponible y controles táctiles cómodos. |

| `@media (min-width: 768px)` | Tablet | Catálogo en dos columnas cuando el espacio lo permita, mayor separación entre bloques y navegación más amplia. |

| `@media (min-width: 1024px)` | Escritorio | Catálogo en tres columnas según el ancho disponible, contenedor centrado y navegación horizontal visible. |



La cantidad de columnas no debe forzarse si el ancho del contenido o la longitud de los títulos perjudican la lectura. Los puntos de quiebre son una propuesta inicial que deberá probarse con contenido real.



Reglas complementarias:



\- Los controles principales deben tener un área táctil cómoda, idealmente de al menos `44 × 44px`.

\- No se deberá requerir desplazamiento horizontal para leer información esencial.

\- La navegación y los formularios deberán seguir siendo utilizables con teclado.

\- Las mejoras de escritorio no podrán eliminar funcionalidades disponibles en la presentación base.

\- Las tablas extensas deberán adaptarse a una presentación legible en móviles.



\## 4. Componentes: anatomía y estados



\### 4.1. Botones



\*\*Primario:\*\* fondo bordó `--color-primary`, texto blanco, bordes redondeados y etiqueta que indique claramente la acción. Se reserva para la acción principal de la pantalla, como “Buscar”, “Aportar curso” o “Guardar recorrido”.



\*\*Secundario:\*\* fondo transparente o superficie clara, texto bordó y borde opcional. Se utiliza para acciones complementarias, como “Cancelar” o “Volver”.



\*\*Destructivo:\*\* utiliza el color de error y un texto explícito para acciones como eliminar un recorrido. Las acciones irreversibles deberán requerir confirmación cuando corresponda.



Estados:



\- `default`: aspecto habitual.

\- `hover`: cambio de superficie o elevación sutil.

\- `focus-visible`: indicador de foco claramente visible.

\- `active`: respuesta visual al presionar.

\- `disabled`: acción no disponible, acompañada de una señal visual inequívoca.

\- `loading`: estado de procesamiento que impide envíos repetidos.



El texto del botón deberá describir la acción; no se dependerá únicamente de un icono.



\### 4.2. Campos de formulario



Los campos utilizarán una superficie clara, borde visible, etiqueta persistente y texto de ayuda cuando sea necesario.



Estados:



\- `default`: borde estándar y etiqueta legible.

\- `focus`: borde destacado y foco visible.

\- `filled`: valor introducido con etiqueta siempre identificable.

\- `error`: borde de error, explicación textual y asociación mediante `aria-describedby`.

\- `disabled`: aspecto diferenciado y no editable.



Los errores deberán indicar cómo corregir el dato. No se utilizará únicamente un borde rojo para informar que el valor es incorrecto.



\### 4.3. Tarjeta de curso



La tarjeta será el componente principal del catálogo comunitario.



\*\*Anatomía propuesta:\*\*



1\. Título del curso.

2\. Plataforma o fuente del recurso.

3\. Categoría o tema, cuando esté disponible.

4\. Descripción breve, si existe.

5\. Metadatos definidos para el catálogo.

6\. Enlace para acceder al curso original.

7\. Acción para agregarlo a un recorrido personal, cuando el usuario tenga acceso a esa funcionalidad.



Estados:



\- `default`: superficie blanca, borde discreto y sombra sutil.

\- `hover`: elevación ligera, sin cambios exagerados.

\- `focus-visible`: indicador de foco claro cuando la tarjeta o sus acciones sean navegables.

\- `loading`: estructura skeleton mientras se cargan los datos.

\- `empty`: mensaje informativo si no hay resultados.

\- `unavailable`: si un curso deja de estar disponible, mostrar el estado solo cuando haya sido verificado.



Los cursos pendientes de validación no deberán mostrarse como publicados en el catálogo público. La tarjeta pública no incluirá acciones de moderación reservadas a usuarios autorizados.



\### 4.4. Listados y paginación



En móviles, el catálogo utilizará tarjetas apiladas. En pantallas amplias podrá adoptar una grilla de dos o tres columnas según el espacio.



La paginación deberá:



\- Indicar la página actual.

\- Permitir avanzar y retroceder con controles accesibles.

\- Mostrar claramente los controles deshabilitados.

\- Conservar los criterios de búsqueda y filtros al cambiar de página, cuando existan.

\- Informar cuando no haya resultados.



Los listados de gestión podrán utilizar tablas en pantallas amplias y una presentación adaptada a tarjetas en móviles. La paginación debe corresponderse con la que defina la API.



\### 4.5. Navegación móvil



El encabezado contendrá el nombre o logotipo de Proyecto20-10, el acceso al menú y las acciones de sesión correspondientes.



En la presentación móvil se utilizará un menú hamburguesa que abra un panel lateral o menú equivalente. Los enlaces principales contemplarán las secciones de catálogo, aportes y recorridos personales según los permisos del usuario.



Requisitos de interacción:



\- El botón tendrá un nombre accesible y atributos `aria-expanded` y `aria-controls`.

\- El menú podrá cerrarse mediante su botón de cierre y la tecla `Escape`.

\- El foco deberá gestionarse de manera coherente al abrir y cerrar el panel.

\- El elemento de navegación actual se identificará visualmente y mediante semántica accesible.

\- Los enlaces a funciones restringidas deberán respetar el estado de sesión y los permisos.



\### 4.6. Diálogo de confirmación



Se utilizará para acciones que necesiten una decisión explícita, por ejemplo, eliminar un recorrido.



El diálogo incluirá un título claro, una explicación breve y acciones diferenciadas. La acción destructiva no será la única opción disponible: deberá existir una forma clara de cancelar.



El diálogo deberá tener nombre accesible, gestionar el foco y permitir el cierre mediante `Escape` cuando la operación y el contexto lo permitan.



\### 4.7. Mensajes de estado



Los mensajes temporales informarán el resultado de operaciones como guardar un recorrido o enviar un aporte.



Tipos:



\- \*\*Éxito:\*\* acción completada.

\- \*\*Advertencia:\*\* situación que requiere atención.

\- \*\*Error:\*\* operación fallida y posible corrección.

\- \*\*Información:\*\* aviso neutral sobre el estado del sistema.



Los mensajes importantes no deberán desaparecer antes de que la persona pueda leerlos. Los errores que requieran una corrección deberán permanecer visibles junto al campo o la acción correspondiente.



Se utilizarán roles accesibles adecuados, como `role="status"` para actualizaciones informativas y `role="alert"` para errores urgentes.



\### 4.8. Skeleton y estados vacíos



\*\*Skeleton:\*\* bloques neutros que imitan la estructura de las tarjetas mientras se cargan los cursos. La animación será sutil y respetará la preferencia de movimiento reducido.



\*\*Estado vacío:\*\* explica por qué no hay contenido y, cuando corresponda, ofrece una acción útil. Ejemplos:



\- Catálogo sin resultados: “No encontramos cursos con estos criterios”.

\- Sin recorridos: “Todavía no creaste un recorrido de aprendizaje”.

\- Sin aportes propios: “Todavía no aportaste cursos”.



La acción sugerida deberá corresponder al contexto y a los permisos del usuario.



\## 5. Layout y navegación



\### 5.1. Encabezado



Se propone un encabezado de aproximadamente `64px` de alto en pantallas amplias, con fondo claro, marca del producto y navegación accesible. En móviles se prioriza el menú hamburguesa para conservar espacio para el contenido.



El encabezado podrá mantenerse fijo si las pruebas de usabilidad confirman que ayuda a navegar. En ningún caso deberá tapar los títulos ni el contenido al cambiar de sección.



\### 5.2. Contenedor principal



\- Ancho máximo propuesto en escritorio: `1140px`.

\- Padding lateral inicial en móviles: `16px`.

\- Padding lateral en pantallas amplias: `24px` o más según el espacio disponible.

\- Separación vertical entre secciones: a partir de `32px`.

\- Fondo general crema y superficies de contenido claras.



Estos valores son referencias iniciales de diseño, no requisitos funcionales.



\### 5.3. Pantallas principales



La guía visual se aplicará, como mínimo, a las siguientes pantallas:



\- \*\*Catálogo:\*\* búsqueda y navegación entre cursos publicados.

\- \*\*Detalle del curso:\*\* información disponible y acceso al recurso original.

\- \*\*Aportar curso:\*\* formulario para proponer un curso y consultar su estado.

\- \*\*Revisión de aportes:\*\* interfaz restringida para validar propuestas.

\- \*\*Mis recorridos:\*\* listado y administración de recorridos personales.

\- \*\*Inicio de sesión y registro:\*\* formularios con errores y estados accesibles.



Los flujos y las transiciones entre estas pantallas se documentarán en \[APPFlow.md](./APPFlow.md). Los campos definitivos de los formularios deberán coincidir con el PRD y el esquema de datos.



\## 6. Accesibilidad mínima



1\. \*\*Contraste:\*\* verificar las combinaciones de texto, fondo, controles y estados. Como referencia, el texto normal debe cumplir un contraste de al menos `4.5:1`, y el texto grande de al menos `3:1`, de acuerdo con WCAG AA.

2\. \*\*Foco visible:\*\* todos los elementos interactivos deben mostrar un indicador de foco perceptible al navegar con teclado.

3\. \*\*Color no exclusivo:\*\* los estados de validación, aprobación y error deben incluir texto o iconografía además del color.

4\. \*\*Nombres accesibles:\*\* los botones de icono, los campos y los controles de navegación deben tener etiquetas comprensibles.

5\. \*\*Formularios:\*\* las etiquetas deben estar asociadas a sus campos y los errores deben identificar el problema y cómo resolverlo.

6\. \*\*Navegación por teclado:\*\* el orden de foco debe seguir una secuencia lógica, sin trampas involuntarias.

7\. \*\*Movimiento reducido:\*\* las animaciones decorativas deben respetar `prefers-reduced-motion`.

8\. \*\*Imágenes:\*\* las imágenes informativas tendrán texto alternativo; las decorativas se ocultarán a tecnologías de asistencia cuando corresponda.

9\. \*\*Objetivos táctiles:\*\* los controles deberán disponer de un área de interacción cómoda en móviles.

10\. \*\*Semántica:\*\* utilizar encabezados, botones, enlaces, formularios y regiones HTML según su propósito.



La accesibilidad se verificará durante la implementación con herramientas de contraste, navegación por teclado y pruebas manuales. La elección de colores por sí sola no demuestra conformidad con WCAG.



\## 7. Iconografía y assets



\- \*\*Sistema de iconos propuesto:\*\* Material Symbols, de Google Fonts: https://fonts.google.com/icons

\- \*\*Uso:\*\* iconos para búsqueda, navegación, enlaces externos, estados y acciones; siempre acompañados de texto cuando la acción pueda resultar ambigua.

\- \*\*Tamaño de referencia:\*\* `20px` para iconos dentro de botones y `24px` para acciones independientes.

\- \*\*Color:\*\* heredado del texto o del estado del componente, manteniendo contraste suficiente.

\- \*\*Imágenes de cursos:\*\* utilizar únicamente imágenes o logotipos disponibles legítimamente y relevantes para el contenido; no inventar certificaciones ni atributos del curso.

\- \*\*Estados vacíos:\*\* priorizar ilustraciones simples, iconos y texto claro antes que imágenes decorativas que compitan con el contenido.

\- \*\*Dependencias visuales:\*\* evitar incorporar una biblioteca completa de componentes si los requisitos pueden cubrirse con componentes propios accesibles y consistentes.



Material Symbols es una propuesta de iconografía coherente con la inspiración Material; la forma definitiva de incorporar sus recursos se decidirá al implementar el frontend.



\---



\*\*Estado del documento:\*\* guía visual propuesta para la Instancia A. Los tokens, componentes y reglas quedan documentados como base de diseño. Su implementación, la comprobación de contrastes y las pruebas de accesibilidad se realizarán en las etapas correspondientes.

