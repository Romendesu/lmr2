from sqlalchemy.orm import Session
from sqlalchemy import func
from models.administrations import Administration, StatusEnum, CommunityEnum

class AdministrationService:
    def __init__(self, db: Session):
        self.db = db

    # CREATE
    def create(self, admin_data: dict) -> Administration:
        admin = Administration(**admin_data)
        self.db.add(admin)
        self.db.commit()
        self.db.refresh(admin)
        return admin

    # READ - por ID
    def get_by_id(self, admin_id: str) -> Administration | None:
        return self.db.query(Administration).filter(Administration.id == admin_id).first()

    # READ - todos
    def get_all(self, skip: int = 0, limit: int = 100):
        return self.db.query(Administration).offset(skip).limit(limit).all()

    # UPDATE
    def update(self, admin_id: str, update_data: dict) -> Administration | None:
        admin = self.get_by_id(admin_id)
        if not admin:
            return None
        for key, value in update_data.items():
            setattr(admin, key, value)
        self.db.commit()
        self.db.refresh(admin)
        return admin

    # DELETE
    def delete(self, admin_id: str) -> bool:
        admin = self.get_by_id(admin_id)
        if not admin:
            return False
        self.db.delete(admin)
        self.db.commit()
        return True

    # COUNT total
    def count_all(self) -> int:
        return self.db.query(func.count(Administration.id)).scalar()

    # COUNT por status
    def count_by_status(self):
        results = self.db.query(
            Administration.status,
            func.count(Administration.id)
        ).group_by(Administration.status).all()
        return {status.value: count for status, count in results}

    # COUNT por community
    def count_by_community(self):
        results = self.db.query(
            Administration.community,
            func.count(Administration.id)
        ).group_by(Administration.community).all()
        return {community.value: count for community, count in results}