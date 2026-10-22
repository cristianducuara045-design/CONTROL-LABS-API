import { Router } from 'express';
import { EquiposController } from '../controllers/equipos.controller';

const router = Router();

router.post('/create', EquiposController.registerambiente);
router.get('/list', EquiposController.getequipos );
router.patch('/:id', EquiposController.updateequipo);

export default router;
