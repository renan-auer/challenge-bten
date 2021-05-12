import { Request, Response } from 'express';
import { User } from '@models/User';
import UserService from '@services/UserService';

class UserController {
  async getUsers(req: Request, res: Response) {
    try {
      const user: User[] = await UserService.getUsers();
      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }

  async getUser(req: Request, res: Response) {
    try {
      const { userId = null } = req.params;
      if (!userId) return res.status(400).json({ error: 'UserId is missing' });

      const user: User = await UserService.getUser(userId);
      if (!user) return res.status(404).json({ error: 'User not found' });

      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }

  async addUser(req: Request, res: Response) {
    try {
      const { name = null, age = null } = req.body;
      if (!name) return res.status(400).json({ error: 'Name is missing' });
      if (!age) return res.status(400).json({ error: 'Age is missing' });

      const user: User = await UserService.addUser(req.body);
      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const { userId = null } = req.params;
      if (!userId) return res.status(400).json({ error: 'UserId is missing' });

      if (req.body.password !== req.body.confPassword) {
        return res.status(400).json({ error: 'Confirmation password is wrong' });
      }
      delete req.body.confPassword;

      const user: User = await UserService.updateUser(userId, req.body);
      if (!user) return res.status(404).json({ error: 'User not found' });

      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const { userId = null } = req.params;
      if (!userId) return res.status(400).json({ error: 'UserId is missing' });

      const result = await UserService.deleteUser(userId);
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new UserController();