import { Request, Response } from 'express';
import LoginService from '@services/LoginService';
import { User } from '@models/User';
import jwt from 'jsonwebtoken';

class LoginController {
  async auth(req: Request, res: Response) {
    try {
      const user = req.body;
      if (!user.name) return res.status(400).json({ error: 'Name is missing' });
      if (!user.password) return res.status(400).json({ error: 'Password is missing' });

      const userDB: User = await LoginService.auth(user.name, user.password);

      if (userDB) {
        const token = jwt.sign({ name: userDB.name }, 'secreKey');
        return res.status(200).json({ token });
      }
      return res.status(401).json('Unauthorized');
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new LoginController();