import { Request, Response } from 'express';

export class UsersController {
    public static getalluser = (req: Request, res: Response): void => {
        res.status(501).json({
            success: false,
            message: 'La consulta de usuarios todavia no esta implementada'
        });
    };

    public static registeruser = (req: Request, res: Response): void => {
        res.status(501).json({
            success: false,
            message: 'La creacion de usuarios todavia no esta implementada'
        });
    };

    public static getuserbyId = (req: Request, res: Response): void => {
        const { id } = req.params;
        res.status(501).json({
            success: false,
            message: `La consulta de usuarios por ${id} todavia no esta implementada.`
        });
    };

    public static updateuser = (req: Request, res: Response): void => {
        const { id } = req.params;
        res.status(501).json({
            success: false,
            message: `La actualizacion de usuarios ${id} todavia no esta implementada.`
        });
    };

    public static deleteuser = (req: Request, res: Response): void => {
        const { id } = req.params;
        res.status(501).json({
            success: false,
            message: `La eliminacion de usuarios ${id} todavia no esta implementada.`
        });
    };


}