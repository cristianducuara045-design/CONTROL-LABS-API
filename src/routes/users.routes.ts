import { Router } from 'express';
import { UsersController } from '../controllers/users.controller';
import { validateCreateUserPayload } from '../middlewares/validateUsers.middleware';

const router = Router();

router.get('/list', UsersController.getalluser);
router.post('/', validateCreateUserPayload, UsersController.registeruser);
router.get('/:id', UsersController.getuserbyId);
router.patch('/:id', UsersController.updateuser);
router.delete('/:id', UsersController.deleteuser);

export default router;