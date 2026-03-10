from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from database.config import get_db_config 

# Elegir la DB. Cambiar a "sqlite" para test
db_name = "postgresql"  
db_config = get_db_config(db_name)

# Construir la URL de conexión
if db_name == "postgresql":
    DATABASE_URL = (
        f"postgresql://{db_config['user']}:{db_config['password']}"
        f"@{db_config['host']}:{db_config['port']}/{db_config['database']}"
    )
    engine = create_engine(DATABASE_URL)

else:  
    DATABASE_URL = f"sqlite:///{db_config['file']}"
    engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})

# Sesión de la DB
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base para declarar modelos
Base = declarative_base()

# Dependencia FastAPI
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()