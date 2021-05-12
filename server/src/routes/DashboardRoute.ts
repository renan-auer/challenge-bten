import { Router } from 'express';
import DashboardController from '@controllers/DashboardController';

const router: Router = Router();

router
  .route('/dashboard/cards')
  .get(DashboardController.getDataCards);

router
  .route('/dashboard/sales-graph')
  .get(DashboardController.getSalesGraph);

router
  .route('/dashboard/client-graph')
  .get(DashboardController.getClientGraph);

export const DashboardRoute: Router = router;