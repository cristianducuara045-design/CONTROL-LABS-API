import { Request, Response, NextFunction } from 'express';
import { ICreateEquipoDTO } from '../dtos/equipos.dto';

const isCreateEquipoDTO = (value: unknown): value is ICreateEquipoDTO => {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return false;
  }

  const equipo = value as Record<string, unknown>;
  return (
    typeof equipo.numeroPC === 'number' &&
    Number.isInteger(equipo.numeroPC) &&
    typeof equipo.marca === 'string' &&
    equipo.marca.trim() !== '' &&
    typeof equipo.modelo === 'string' &&
    equipo.modelo.trim() !== '' &&
    typeof equipo.serial === 'string' &&
    equipo.serial.trim() !== '' &&
    typeof equipo.ambiente === 'string' &&
    equipo.ambiente.trim() !== ''
  );
};

export const validateCreateEquipoPayload = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const body: unknown = req.body;

  if (!isCreateEquipoDTO(body)) {
    res.status(400).json({
      success: false,
      error: 'Datos del equipo inválidos.'
    });
    return;
  }

  next();
};