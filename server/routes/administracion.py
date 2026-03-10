from fastapi import Depends, APIRouter
from database.connection import get_db
from sqlalchemy.orm import Session
from services.administration_service import AdministrationService

router = APIRouter(prefix="/administracion")

@router.get("/count-all")
async def count_all(db: Session = Depends(get_db)):
    service = AdministrationService(db)
    total = service.count_all()
    return {"total": total}
