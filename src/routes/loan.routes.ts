import { Router } from 'express';
import { LoanController } from '../controllers/loan.controller';
import { validateLoanPayload } from '../middlewares/validateLoan.middleware';

const router = Router();

router.post('/',validateLoanPayload, LoanController.createLoan);
router.get('/search', LoanController.getLoansByFilter);
router.get('/:id', LoanController.getLoanById);
router.post('/create', LoanController.createLoan);
router.put('/:id/accept', LoanController.acceptLoanInventory);

export default router;