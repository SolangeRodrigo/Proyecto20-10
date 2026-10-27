## Como levantar el proyecto

El entorno de desarrollo se esta preparando. Al completar T2, T3 y T4, se podra iniciar con Docker Compose:

```bash
cp .env.example .env
docker compose up
```

Servicios previstos:
- Frontend: http://localhost:5173
- Backend: http://localhost:8000/health

---

# Proyecto20-10

> WebApp de gestión de comunidad de cursos: catálogo comunitario de cursos gratuitos y roadmaps personales de aprendizaje.
>
> **Estado:** 🛠️ Instancia B — scaffold y desarrollo del MVP en curso.

**Stack previsto:** React 19 + Vite + pnpm · FastAPI + uv · PostgreSQL 18.6 · Docker Compose (desarrollo)

---

## Qué hace

Proyecto20-10 busca facilitar el descubrimiento y la organización de cursos gratuitos disponibles en distintas plataformas educativas. Las personas podrán consultar un catálogo comunitario y proponer nuevos cursos con su información correspondiente. Cada aporte pasará por un proceso de validación antes de incorporarse al catálogo público. Además, los usuarios podrán organizar cursos en roadmaps personales de aprendizaje.

## Documentación

| Documento | Responde la pregunta | Archivo |
|---|---|---|
| SPEC | ¿Qué nos pidieron construir y qué decisiones se tomaron? | [docs/SPEC.md](docs/SPEC.md) |
| PRD | ¿Para quién es el producto, qué problema resuelve y qué queda fuera? | [docs/PRD.md](docs/PRD.md) |
| TRD | ¿Cómo se construye técnicamente y por qué? | [docs/TRD.md](docs/TRD.md) |
| UX-UI | ¿Cómo se ve y se comporta la interfaz? | [docs/UX-UI.md](docs/UX-UI.md) |
| APPFlow | ¿Qué pantallas hay y cómo se navega? | [docs/APPFlow.md](docs/APPFlow.md) |
| BackendSchema | ¿Qué datos se almacenan y qué API se expone? | [docs/BackendSchema.md](docs/BackendSchema.md) |
| Implementation Plan | ¿En qué orden se realizará el desarrollo y cómo se verificará? | [docs/IMPLEMENTATION_PLAN.md](docs/IMPLEMENTATION_PLAN.md) |

## Cómo revisar este repositorio

- Los archivos Markdown (`.md`) se pueden leer directamente desde GitHub.
- Los diagramas Mermaid deben estar dentro de bloques de código identificados con `mermaid` para que GitHub los renderice.
- Para previsualizar la documentación localmente en VS Code, se puede utilizar `Ctrl+Shift+V`.

## Estado del trabajo

| Instancia | Contenido | Estado |
|---|---|---|
| A — Documentación | Repositorio, especificación y seis documentos complementarios | En preparación para revisión docente |
| B — Desarrollo del MVP | Implementación según el plan aprobado | Pendiente de aprobación docente |
| C — Testing y despliegue | Pruebas, Docker multi-stage y gestión del cambio | Pendiente |


## Versionado y flujo de Git

- **`main`:** rama exclusiva para releases versionados (`vX.Y.Z`), con `CHANGELOG.md` actualizado y tags anotados. No se realizan commits directos ni se integran tickets directamente.
- **`dev`:** rama de integración de los tickets de desarrollo.
- **Ramas de tickets:** se crean desde `dev` con el formato `feat/T{N}-descripcion-corta` o `fix/T{N}-descripcion-corta` y se integran nuevamente en `dev`.
- **Convención de commits:** Conventional Commits al 100%, con prefijos como `feat:`, `fix:`, `docs:`, `test:`, `docker:` y `chore:`.
- **Release:** al completar los tickets, se actualiza el changelog, se integra `dev` en `main` y se crea un tag anotado.

## Referencias de aprendizaje

### Markdown y GitHub

- [Markdown Guide — sintaxis básica](https://www.markdownguide.org/basic-syntax/)
- [Markdown Guide — cheat sheet](https://www.markdownguide.org/cheat-sheet/)
- [CommonMark](https://commonmark.org/help/)
- [GitHub — Writing on GitHub](https://docs.github.com/en/get-started/writing-on-github)
- [GitHub — diagramas Mermaid](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams)

### Por tipo de documento

- **PRD:** [Atlassian — plantilla PRD](https://www.atlassian.com/software/confluence/templates/product-requirements)
- **TRD:** [Design Docs at Google](https://www.industrialempathy.com/posts/design-docs-at-google/)
- **UX-UI:** [Nielsen Norman Group — Front-End Style Guides](https://www.nngroup.com/articles/front-end-style-guides/) · [Material Design 3](https://m3.material.io/)
- **APPFlow:** [Nielsen Norman Group — Information Architecture](https://www.nngroup.com/articles/information-architecture-sitemaps/)
- **BackendSchema:** [Mermaid — ER Diagrams](https://mermaid.js.org/syntax/entityRelationshipDiagram.html) · [PostgreSQL — documentación](https://www.postgresql.org/docs/current/)
- **Implementation Plan:** [Atlassian — plantilla de plan de proyecto](https://www.atlassian.com/software/confluence/templates/project-plan)

## Licencia y uso

Trabajo práctico de Desarrollo de Software — UTN Facultad Regional La Plata, 2026.
