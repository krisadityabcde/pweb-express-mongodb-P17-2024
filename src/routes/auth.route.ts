import express, { Router, Request, Response, RequestHandler } from 'express';
import { login, register } from '../controllers/auth.controller';

const router: Router = express.Router();

const asyncHandler = (fn: (req: Request, res: Response) => Promise<any>): RequestHandler => {
    return (req: Request, res: Response, next) => {
        Promise.resolve(fn(req, res)).catch(next);
    };
};

router.post('/register', asyncHandler(register));
router.post('/login', asyncHandler(login));

export default router;
