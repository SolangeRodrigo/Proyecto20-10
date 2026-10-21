# 🎨 UI/UX — Proyecto20-10

> ✨ **Guía de diseño de interfaz y experiencia de usuario**
>
> 📱 Enfoque: Mobile First  
> 🎨 Referencia visual: Google Material Design  
> 🎯 Objetivo: una experiencia intuitiva, clara y consistente para la gestión y el descubrimiento de cursos.

---

## 1. 🎯 Objetivo del diseño

Diseñar una interfaz moderna, minimalista y funcional que permita a los usuarios acceder a la plataforma, gestionar cursos y explorar futuros recorridos de aprendizaje de forma sencilla.

La experiencia deberá priorizar la facilidad de uso, la claridad visual, la accesibilidad y la adaptación a distintos dispositivos.

### Principios de diseño

- 📱 **Mobile First:** diseñar primero para dispositivos móviles.
- ✨ **Simplicidad:** evitar elementos visuales innecesarios.
- 🧭 **Navegación intuitiva:** facilitar el acceso a las funcionalidades principales.
- ♿ **Accesibilidad:** diseñar para diferentes capacidades y formas de interacción.
- 🧩 **Consistencia:** mantener patrones visuales y de interacción uniformes.
- ⚡ **Feedback inmediato:** informar al usuario sobre el resultado de sus acciones.
- 🔄 **Reutilización:** construir componentes compartidos para reducir inconsistencias.

---

## 2. 🎨 Identidad visual

La interfaz tomará como referencia los principios de Google Material Design, adaptándolos a la identidad de Proyecto20-10.

### Estilo general

- Diseño limpio, con espacios en blanco.
- Superficies claras y jerarquía visual definida.
- Tipografía legible y consistente.
- Bordes suaves y elevaciones discretas cuando aporten claridad.
- Iconografía sencilla y reconocible.
- Colores utilizados con una función clara, evitando la decoración excesiva.

### 🎨 Paleta de colores propuesta

| Token | Color | Uso |
|---|---|---|
| `primary` | `#1A73E8` | Acciones principales y elementos destacados |
| `primary-hover` | `#1557B0` | Estado hover de acciones principales |
| `background` | `#F8F9FA` | Fondo general |
| `surface` | `#FFFFFF` | Tarjetas, formularios y paneles |
| `text-primary` | `#202124` | Texto principal |
| `text-secondary` | `#5F6368` | Texto secundario |
| `border` | `#DADCE0` | Bordes y separadores |
| `success` | `#188038` | Confirmaciones y operaciones exitosas |
| `error` | `#D93025` | Errores y acciones destructivas |
| `warning` | `#F9AB00` | Advertencias y estados que requieren atención |

Los colores propuestos deberán verificarse en términos de contraste y accesibilidad antes de su implementación definitiva.

---

## 3. 🔤 Tipografía

Se utilizará una tipografía sans-serif moderna y legible.

### Jerarquía tipográfica propuesta

| Elemento | Uso |
|---|---|
| `H1` | Título principal de cada página |
| `H2` | Títulos de secciones |
| `H3` | Títulos de tarjetas y subsecciones |
| `Body` | Texto general |
| `Label` | Etiquetas de formularios |
| `Caption` | Ayudas, metadatos y texto secundario |

### Reglas

- Mantener una jerarquía clara entre títulos, subtítulos y contenido.
- Evitar bloques extensos de texto sin separación.
- No utilizar el color como único medio para transmitir información.
- Garantizar un tamaño de texto cómodo en dispositivos móviles.

---

## 4. 📱 Estrategia responsive — Mobile First

La interfaz se diseñará inicialmente para pantallas pequeñas y se ampliará progresivamente.

### 📲 Mobile

- Menú hamburguesa.
- Formularios en una sola columna.
- Tarjetas de cursos apiladas verticalmente.
- Botones con áreas de interacción cómodas.
- Paginación compacta.
- Acciones principales claramente identificadas.

### 💻 Tablet

- Aprovechamiento del espacio horizontal.
- Posibilidad de utilizar una cuadrícula de tarjetas.
- Menú y controles adaptados al ancho disponible.
- Formularios con distribución más flexible cuando corresponda.

### 🖥️ Desktop

- Navegación más amplia cuando aporte valor.
- Cuadrícula de cursos con múltiples columnas.
- Mayor espacio para filtros, metadatos y controles.
- Formularios con un ancho máximo para facilitar la lectura.

Los puntos de quiebre (*breakpoints*) definitivos se establecerán durante la implementación y se validarán con pruebas visuales.

---

## 5. 🧭 Arquitectura de navegación

La navegación deberá ser predecible y mantener al usuario orientado dentro de la aplicación.

### Secciones principales

- 🔐 Autenticación.
- 📚 Gestión de cursos.
- 🗺️ Roadmaps de aprendizaje, cuando estén implementados.
- 👤 Opciones de sesión.

### 🍔 Menú hamburguesa

El menú deberá:

- Mostrar las secciones disponibles según el estado de autenticación.
- Permitir abrir y cerrar la navegación fácilmente.
- Indicar visualmente la sección activa.
- Cerrarse al seleccionar una opción en dispositivos móviles.
- Permitir la navegación mediante teclado.
- Gestionar correctamente el foco cuando se abra como panel modal.

### Reglas de navegación

- Las rutas privadas requieren autenticación.
- Las rutas inexistentes deben mostrar una página de error o una opción para volver.
- La navegación no debe perder innecesariamente los datos ingresados en formularios.
- Las acciones de navegación deben tener nombres claros y consistentes.

---

## 6. 🔐 Diseño de autenticación

Las pantallas de autenticación deberán ser simples, claras y consistentes entre sí.

### 🔑 Login

Elementos:
- Identidad de la aplicación.
- Campo de correo electrónico.
- Campo de contraseña.
- Opción para mostrar u ocultar la contraseña.
- Botón principal para iniciar sesión.
- Enlace para recuperar contraseña.
- Enlace para registrarse.
- Mensajes de validación y errores.

### 📝 Registro

Elementos:
- Campos requeridos para crear la cuenta.
- Indicaciones claras sobre los datos solicitados.
- Validación de los campos.
- Botón para crear la cuenta.
- Enlace para volver al login.

Los campos definitivos dependerán de los requisitos de registro.

### 🔄 Recuperación de contraseña

Elementos:
- Campo de correo electrónico.
- Botón para solicitar la recuperación.
- Confirmación de la solicitud.
- Indicaciones claras sobre los siguientes pasos.

Los mensajes deberán evitar revelar si una dirección de correo está registrada.

### 🛡️ Estados de seguridad

- Error de credenciales.
- Solicitud limitada por rate limiting.
- Sesión expirada.
- Error de conexión.
- Formulario inválido.
- Operación en proceso.

Los mensajes deberán ser comprensibles, sin exponer información técnica sensible.

---

## 7. 📚 Diseño del módulo de cursos

La gestión de cursos será una de las áreas centrales de la aplicación.

### 📋 Listado de cursos

La página deberá incluir:

- Título de la sección.
- Acción principal para crear un curso.
- Lista o cuadrícula de cursos.
- Paginación.
- Estados de carga, error y ausencia de resultados.

### 🪪 Tarjeta de curso

Cada tarjeta podrá mostrar, según los datos disponibles:

- Nombre del curso.
- Descripción breve.
- Categoría u otros metadatos.
- Enlace externo, si corresponde.
- Acciones disponibles para consultar, editar o eliminar.

La información deberá organizarse visualmente para facilitar el escaneo rápido de los cursos.

### ➕ Crear curso

- Formulario con campos claramente identificados.
- Indicación de campos obligatorios.
- Validación de datos.
- Botón para guardar.
- Acción secundaria para cancelar.
- Confirmación o mensaje de error tras el envío.

### ✏️ Editar curso

- Cargar los datos actuales.
- Diferenciar claramente la acción de guardar cambios.
- Informar si los cambios se guardaron correctamente.
- Evitar perder modificaciones por errores de validación.

### 🗑️ Eliminar curso

La eliminación deberá tratarse como una acción destructiva.

- Solicitar confirmación cuando corresponda.
- Identificar el curso que se eliminará.
- Ofrecer opciones claras para confirmar o cancelar.
- Mostrar el resultado de la operación.
- Actualizar el listado tras una eliminación exitosa.

---

## 8. 🗺️ Experiencia de roadmap de aprendizaje

La funcionalidad de roadmap está prevista como una idea de evolución del producto. Su interfaz deberá definirse cuando se concreten los requisitos funcionales.

### Conceptos visuales posibles

- **Roadmap:** recorrido de aprendizaje.
- **Etapa:** agrupación de cursos dentro de un recorrido.
- **Curso:** recurso educativo asociado a una etapa.
- **Enlace externo:** acceso a la página del curso de origen.

### Lineamientos de diseño

- Mostrar el orden del recorrido de forma comprensible.
- Diferenciar visualmente las etapas.
- Facilitar la lectura de los cursos asociados.
- Mantener una navegación clara entre el roadmap y los detalles de cada curso.
- Indicar cuándo un recurso conduce a una plataforma externa.

No se presupone que existan seguimiento del progreso, recomendaciones automáticas ni generación de roadmaps mediante inteligencia artificial.

---

## 9. 🧩 Sistema de componentes UI

Se priorizará la creación de componentes reutilizables.

### Componentes base

- `Button`
- `Input`
- `Textarea`
- `Select`
- `Checkbox`
- `Card`
- `Modal`
- `Dropdown`
- `Pagination`
- `Spinner`
- `Alert`
- `Toast`
- `EmptyState`
- `ErrorState`
- `Skeleton`

### Componentes de navegación

- `Navbar`
- `HamburgerMenu`
- `NavigationItem`
- `PageHeader`

### Componentes de cursos

- `CourseCard`
- `CourseList`
- `CourseForm`
- `CourseActions`

Los componentes específicos de cada funcionalidad deberán permanecer dentro del módulo correspondiente cuando no necesiten compartirse con otras áreas.

### Organización conceptual

```text
src/
├── components/
│   └── ui/
├── features/
│   ├── auth/
│   └── curso/
├── app/
└── services/
```

Esta estructura es orientativa y deberá mantenerse alineada con la arquitectura definitiva del proyecto.

---

## 10. 🔄 Estados de interfaz

Toda interacción importante deberá contemplar los estados necesarios para comunicar qué está ocurriendo.

### ⏳ Loading

- Mostrar indicadores de carga.
- Evitar envíos duplicados.
- Mantener una respuesta visual mientras se procesa la solicitud.

### ✅ Success

- Confirmar que la operación terminó correctamente.
- Proporcionar contexto sobre el resultado.
- Actualizar los datos visibles cuando corresponda.

### ❌ Error

- Explicar el problema en lenguaje sencillo.
- Indicar cómo continuar cuando sea posible.
- Evitar mensajes técnicos innecesarios.
- Permitir reintentar operaciones recuperables.

### 📭 Empty state

Cuando no existan cursos:

- Explicar que todavía no hay cursos disponibles.
- Ofrecer una acción relevante, como crear el primer curso, si el usuario tiene permiso.

### 🌐 Error de conexión

- Informar que no fue posible completar la solicitud.
- Permitir reintentar cuando corresponda.
- Evitar borrar los datos ingresados en un formulario sin necesidad.

---

## 11. ♿ Accesibilidad

La interfaz deberá seguir buenas prácticas de accesibilidad, tomando como referencia las pautas WCAG 2.2 nivel AA.

### Criterios principales

- Utilizar etiquetas asociadas a los campos de formulario.
- Mantener contraste suficiente entre texto y fondo.
- Permitir navegar por las funcionalidades mediante teclado.
- Mostrar indicadores visibles de foco.
- Utilizar elementos semánticos de HTML.
- Proporcionar nombres accesibles a los controles con iconos.
- Asociar los errores con los campos correspondientes.
- No depender únicamente del color para indicar estados.
- Respetar las preferencias de reducción de movimiento.
- Mantener áreas táctiles cómodas para dispositivos móviles.

---

## 12. ⚡ Microinteracciones

Las interacciones visuales deberán reforzar la comprensión de las acciones.

Ejemplos:
- Cambio visual al pasar el cursor sobre botones.
- Indicadores de foco en campos y controles.
- Animaciones breves al abrir o cerrar el menú.
- Confirmaciones después de operaciones exitosas.
- Indicadores de carga durante las solicitudes.
- Transiciones discretas entre estados.

Las animaciones no deberán dificultar la navegación ni perjudicar el rendimiento.

---

## 13. 🧪 Validación UX/UI

Antes de considerar una pantalla terminada, se verificará:

- [ ] La interfaz funciona en tamaños de pantalla pequeños y grandes.
- [ ] Las acciones principales son fáciles de identificar.
- [ ] Los formularios incluyen validaciones y mensajes claros.
- [ ] Los estados de carga, error y ausencia de datos están contemplados.
- [ ] La navegación mediante teclado funciona correctamente.
- [ ] El contraste y el foco visible son adecuados.
- [ ] Los componentes mantienen consistencia visual.
- [ ] Las operaciones destructivas cuentan con confirmación apropiada.
- [ ] Las pantallas no presentan desbordamientos horizontales innecesarios.
- [ ] Los errores de la API se traducen en mensajes comprensibles.

---

## 14. 📌 Decisiones pendientes

Antes de cerrar el sistema de diseño, se deberán definir:

- La identidad visual definitiva y el logotipo.
- La tipografía final.
- Los breakpoints responsive.
- Los campos definitivos de los formularios.
- La estrategia de navegación para las acciones CRUD.
- El diseño final de las tarjetas de cursos.
- La representación visual del roadmap.
- Las reglas de interacción para los estados de carga, error y confirmación.

---

## 🏁 Resultado esperado

Una experiencia de usuario coherente, accesible y adaptable, con componentes reutilizables y patrones visuales consistentes, alineada con la arquitectura y las funcionalidades definidas para Proyecto20-10.

**Proyecto20-10 · UI/UX Guidelines · 2026**