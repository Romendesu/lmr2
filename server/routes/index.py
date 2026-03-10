# Rutas de inicio
from fastapi import APIRouter

router = APIRouter(prefix="")

@router.get("/")
def index():
    return {"message", "Hola, bienvenido a la API"}
