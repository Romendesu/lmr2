import enum
import uuid
from datetime import datetime
from sqlalchemy import Column, String, Float, Boolean, DateTime, Enum
from sqlalchemy.dialects.postgresql import UUID  
from database.connection import Base

# Enumeración de cada comunidad autónoma
class CommunityEnum(enum.Enum):
    andalucia = "Andalucía"
    aragon = "Aragón"
    asturias = "Asturias"
    balears = "Islas Baleares"
    canarias = "Canarias"
    cantabria = "Cantabria"
    castilla_la_mancha = "Castilla-La Mancha"
    castilla_y_leon = "Castilla y León"
    catalunya = "Cataluña"
    extremadura = "Extremadura"
    galicia = "Galicia"
    madrid = "Madrid"
    murcia = "Murcia"
    navarra = "Navarra"
    pais_vasco = "País Vasco"
    la_rioja = "La Rioja"
    valencia = "Comunidad Valenciana"
    ceuta = "Ceuta"
    melilla = "Melilla"

# Enumeración del estado del traspaso
class StatusEnum(enum.Enum):
    available = "available"
    reserved = "reserved"
    sold = "sold"

# Modelo administracion
class Administration(Base):
    # Nombre de la tabla
    __tablename__ = "administrations"

    # Campos automáticos
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, unique=True, index=True)
    created_date = Column(DateTime, default=datetime.utcnow)
    updated_date = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Campos a rellenar
    name = Column(String, nullable=False)
    number = Column(String)
    community = Column(Enum(CommunityEnum), nullable=False)
    province = Column(String)
    city = Column(String, nullable=False)
    address = Column(String)
    price = Column(Float, nullable=False)
    annual_sales = Column(Float)
    square_meters = Column(Float)
    description = Column(String)
    image_url = Column(String)
    status = Column(Enum(StatusEnum), nullable=False, default=StatusEnum.available)
    featured = Column(Boolean, default=False)
    contact_phone = Column(String)
    contact_email = Column(String)

