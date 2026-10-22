import { Router } from 'express';
import { EquiposController } from '../controllers/equipos.controller';
import { validateCreateEquipoPayload } from '../middlewares/validateEquipo.middleware';

const router = Router();

router.post('/create', validateCreateEquipoPayload, EquiposController.registerambiente);
router.get('/list', EquiposController.getequipos );
router.patch('/:id', EquiposController.updateequipo);

export default router;
