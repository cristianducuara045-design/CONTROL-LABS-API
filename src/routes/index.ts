import { Router } from 'express';
import loanRoutes from './loan.routes';
import usersRoutes from './users.routes';
import ambientesRoutes from './ambientes.routes'
import equiposroutes from './equipos.routes';

const router = Router();
router.use('/loans', loanRoutes);
router.use('/users', usersRoutes);
router.use('/ambientes', ambientesRoutes)
router.use('/equipos',equiposroutes)

export default router;