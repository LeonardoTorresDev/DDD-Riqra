import { Router, Request, Response } from "express"
import { AuthController } from "../controllers/auth.controller"
import { authValidators } from "../validators/auth.validator";

export const register = (router: Router) => { 
    const authController = new AuthController()
    router.post('/auth', authValidators, (req: Request, res: Response) => authController.Auth( req, res ) )
};
