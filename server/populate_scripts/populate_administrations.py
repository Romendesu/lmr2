import random
from faker import Faker
from sqlalchemy.orm import Session

# Importa según la estructura de carpetas
import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from database.connection import engine, Base, SessionLocal
from models.administrations import Administration, CommunityEnum, StatusEnum

# Inicializar Faker
fake = Faker("es_ES")  # Español

# Crear tablas si no existen
Base.metadata.create_all(bind=engine)

# Número de registros a generar
N = 50

def create_fake_admin():
    return Administration(
        name=fake.company(),
        number=str(fake.random_number(digits=5)),
        community=random.choice(list(CommunityEnum)),
        province=fake.state(),
        city=fake.city(),
        address=fake.address(),
        price=round(random.uniform(50000, 500000), 2),
        annual_sales=round(random.uniform(100000, 1000000), 2),
        square_meters=round(random.uniform(50, 500), 2),
        description=fake.text(max_nb_chars=200),
        image_url=fake.image_url(),
        status=random.choice(list(StatusEnum)),
        featured=fake.boolean(chance_of_getting_true=20),
        contact_phone=fake.phone_number(),
        contact_email=fake.company_email()
    )

def populate():
    db: Session = SessionLocal()
    for _ in range(N):
        admin = create_fake_admin()
        db.add(admin)
    db.commit()
    db.close()
    print(f"{N} registros insertados en la tabla Administration")

if __name__ == "__main__":
    populate()