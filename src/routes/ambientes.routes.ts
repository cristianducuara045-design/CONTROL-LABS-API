import { Router } from 'express';
import { AmbientesController } from '../controllers/ambientes.controller';

const router = Router();

router.get('/', AmbientesController.getallambientes );
router.post('/create', AmbientesController.registerambiente);
router.patch('/:id', AmbientesController.updateambiente);

export default router;
