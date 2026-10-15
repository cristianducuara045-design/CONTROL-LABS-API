import { Request, Response } from 'express';

export class AmbientesController {
    public static getallambientes = (req: Request, res: Response): void => {
        res.status(501).json({
            success: false,
            message: 'La consulta de ambientes todavia no esta implementada'
        });
    };

    public static registerambiente = (req: Request, res: Response): void => {
        res.status(501).json({
            success: false,
            message: 'La creacion de ambientes todavia no esta implementada'
        });
    };

    public static updateambiente = (req: Request, res: Response): void => {
        const { id } = req.params;
        res.status(501).json({
            success: false,
            message: `La actualizacion de ambientes ${id} todavia no esta implementada.`
        });
    };



}