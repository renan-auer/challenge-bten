import { Response, Request, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export function validateJWT(token: string = null): boolean {
  if (!token) return false;

  token = token.replace('Bearer ', '');
  try {
    const decoded: any = jwt.verify(token, process.env.JWTSECRET);
    if (!decoded) return false;
  } catch (err) {
    return false;
  }

  return true;
}

export const auth = (req: Request, res: Response, next: NextFunction): any => {
  const canAcess = validateJWT(req.headers ? req.headers.authorization : null);
  if (!canAcess) {
    res.sendStatus(401);
  } else next();
};