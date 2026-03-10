from fastapi import APIRouter

router = APIRouter(prefix="/catalog")

@router.get("/")
def index():
    return {"message", "Hola, bienvenido desde catalog"}
