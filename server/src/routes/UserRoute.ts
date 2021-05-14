import { Router } from 'express';
import UserController from '@controllers/UserController';
import { auth } from '../config/auth-validator';

const router: Router = Router();

router.post('/user', UserController.addUser);

router.get('/user', auth, UserController.getUsers);

router.get('/user/:userId', auth, UserController.getUser);
router.put('/user/:userId', auth, UserController.updateUser);
router.delete('/user/:userId', auth, UserController.deleteUser);

export const UserRoutes: Router = router;