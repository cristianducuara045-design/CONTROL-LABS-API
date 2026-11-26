import { Router } from 'express';
import ambienteRoutes from './ambientes.routes';
import loanRoutes from './loan.routes';
import userRoutes from './users.routes';
import equipoRoutes from './equipos.routes';
import incidentRoutes from './incident.routes';
import dashboardRoutes from './dashboard.routes';

const router = Router();

router.use('/ambientes', ambienteRoutes);
router.use('/loans', loanRoutes);
router.use('/users', userRoutes);
router.use('/equipos', equipoRoutes);
router.use('/incidents', incidentRoutes);
router.use('/dashboard', dashboardRoutes);

export default router;