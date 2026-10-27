
from fastapi import FastAPI

app = FastAPI(
    title="Proyecto20-10 API",
    description="API para la hoja de ruta de cursos",
    version="0.1.0",
)


@app.get("/health")
def health_check():
    return {"status": "ok"}


@app.get("/cursos")
def listar_cursos():
    return []
