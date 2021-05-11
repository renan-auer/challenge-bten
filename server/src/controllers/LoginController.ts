import { Request, Response } from 'express';
import LoginService from '@services/LoginService';

class LoginController {
  async auth(req: Request, res: Response) {
    try {
      const user = req.body;
      if (!user.name) return res.status(400).json({ error: 'Name is missing' });
      if (!user.password) return res.status(400).json({ error: 'Password is missing' });
      if (!user.password  != !user.confPassword) return res.status(400).json({ error: 'Password Confimation is wrong' });

      const jwtToken: string = await LoginService.auth(user.name, user.password);
      return res.status(200).json(jwtToken);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new LoginController();