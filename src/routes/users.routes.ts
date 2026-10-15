import { Router } from 'express';
import { UsersController } from '../controllers/users.controller';

const router = Router();

router.get('/', UsersController.getalluser);
router.post('/create', UsersController.registeruser);
router.get('/:id', UsersController.getuserbyId);
router.patch('/:id', UsersController.updateuser);
router.delete('/:id', UsersController.deleteuser);

export default router;