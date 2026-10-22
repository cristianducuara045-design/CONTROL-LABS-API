import { Router } from 'express';
import { AmbientesController } from '../controllers/ambientes.controller';
import { validateCreateAmbientePayload } from '../middlewares/validateAmbiente.middleware';

const router = Router();

router.get('/list', AmbientesController.getallambientes );
router.post('/create', validateCreateAmbientePayload, AmbientesController.registerambiente);
router.patch('/:id', AmbientesController.updateambiente);

export default router;
