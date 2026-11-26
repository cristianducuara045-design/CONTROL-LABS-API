import { Router } from 'express';
import { UserController } from '../controllers/users.controller';
import { validateUserPayload } from '../middlewares/validateUsers.middleware';

const router = Router();

router.get('/consulta', UserController.getAll);
router.post('/registro', validateUserPayload, UserController.create);
router.get('/detalle/:id', UserController.getUserById);
router.patch('/actualiza/:id', UserController.update);
router.patch('/estado/:id', UserController.setActive);
router.delete('/elimina/:id', UserController.remove);

export default router;