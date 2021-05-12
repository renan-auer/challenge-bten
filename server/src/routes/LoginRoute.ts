import { Router } from 'express';
import LoginController from '@controllers/LoginController';

const router: Router = Router();

router
  .route('/auth')
  .post(LoginController.auth);

export const LoginRoute: Router = router;