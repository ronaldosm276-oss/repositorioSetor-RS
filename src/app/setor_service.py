from fastapi import HTTPException, status
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from models.setor_model import Setor
from repositories.setor_repository import SetorRepository
from schemas.setor_schema import SetorCreate, SetorUpdate


class SetorService:

    def __init__(self, db: Session):
        self.db = db
        self.repository = SetorRepository(db)

    def criar(self, dados: SetorCreate):
        setor = Setor(
            setor=dados.setor
        )
        return self.repository.criar(setor)

    def buscar_por_id(self, idsetor: int):
        setor = self.repository.buscar_por_id(idsetor)

        if not setor:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Setor não encontrado"
            )

        return setor

    def listar(self):
        return self.repository.listar()

    def atualizar(self, idsetor: int, dados: SetorUpdate):
        setor = self.buscar_por_id(idsetor)

        for campo, valor in dados.model_dump(exclude_unset=True).items():
            setattr(setor, campo, valor)

        return self.repository.atualizar(setor)

    def remover(self, idsetor: int):
        setor = self.buscar_por_id(idsetor)

        try:
            self.repository.remover(setor)
        except IntegrityError:
            self.db.rollback()
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail="Não é possível excluir este setor: existem produtos vinculados a ele."
            )