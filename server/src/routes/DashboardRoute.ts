import { Router } from 'express';
import DashboardController from '@controllers/DashboardController';
import { auth, validateJWT } from '../config/auth-validator';

const router: Router = Router();

router.get('/dashboard/cards', auth, DashboardController.getDataCards);
router.get('/dashboard/sales-graph', auth, DashboardController.getSalesGraph, validateJWT);
router.get('/dashboard/client-graph', auth, DashboardController.getClientGraph);

export const DashboardRoute: Router = router;