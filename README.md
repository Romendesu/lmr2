# lmr2

## 1.0 Requisitos del proyecto

Para ejecutar este proyecto necesitas tener instaladas las siguientes versiones de herramientas:

- **Node.js / npm**: npm >= 10.9.2  
- **Python**: python >= 3.10  
- **PostgreSQL** o SQLite** según la configuración de la base de datos  
- **Git** (opcional, para control de versiones)  

---

## 1.1 Inicializar proyecto

### Backend (FastAPI)

1. Crear un entorno virtual de Python:

```bash
python -m venv venv
```

2. Activar el entorno virtual
  -  Windows:
  ```bash
  venv\Scripts\activate
  ```
  -  macOS / Linux:

  ```bash
  source venv/bin/activate
  ```
3. Instalar dependencias:

  ```bash
  pip install -r requirements.txt
  ```

4. Ejecutar el servidor FastAPI con Uvicorn:
   
  ```bash
  uvicorn main:app --reload
  ```

  El backend estará disponible en ```http://localhost:8000.```

### Frontend (React)

1. Entrar a la carpeta del frontend:
```bash
cd frontend
```

Instalar dependencias:
```bash
npm install
```
Ejecutar el servidor de desarrollo:

```bash
npm start
```
El frontend estará disponible en ```http://localhost:3000.```

## 1.2 Configuración de la base de datos

Crear el archivo `database.ini` en la raíz del proyecto con los datos de conexión:

```ini
[postgresql]
host=localhost
user=tu_usuario
password=tu_password
database=lmr
port=5432

[sqlite]
file=./test.db
```
Se recomienda no subir `database.ini` al repositorio (agregarlo a `.gitignore`).
