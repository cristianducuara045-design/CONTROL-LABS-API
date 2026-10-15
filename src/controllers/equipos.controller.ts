import { Request, Response } from 'express';

export class EquiposController {
    
    public static registerambiente = (req: Request, res: Response): void => {
        res.status(501).json({
            success: false,
            message: 'La creacion de equipos todavia no esta implementada'
        });
    };

    public static getequipos = (req: Request, res: Response): void => {
            res.status(501).json({
                success: false,
                message: 'La consulta de equipos todavia no esta implementada'
            });
        };

    public static updateequipo = (req: Request, res: Response): void => {
        const { id } = req.params;
        res.status(501).json({
            success: false,
            message: `La actualizacion de equipos ${id} todavia no esta implementada.`
        });
    };

}