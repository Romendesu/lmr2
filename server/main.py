from fastapi import FastAPI
from routes import (index_routes, catalog_routes, administracion_routes)
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Declaracion de rutas
app.include_router(index_routes)
app.include_router(catalog_routes)
app.include_router(administracion_routes)

# Implementacion del CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)