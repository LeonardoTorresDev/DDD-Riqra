import httpStatus from 'http-status';
import { injectable } from "inversify";
import { Request, Response } from 'express';

import { container } from '../../../container';
import { TYPES } from '../../../types';
import { IAuthCommand } from '../../../command/auth/auth.command'
import { AuthDTO } from '../../dto/auth.dto'
import { InvalidPasswordError } from '../../../errors/errors'

@injectable()
export class AuthController {

    public async Auth( req: Request, res: Response) : Promise<void> {

        const command = container.get<IAuthCommand>(TYPES.AuthCommand)
        const { email, password } = req.body
        const authDTO = new AuthDTO( String(email), String(password) )

        try {
            const { token, code, supplier} = await command.execute(authDTO)
            res.status(code).json({ token, supplier })
        }
        catch( error: any ) {
            if( error instanceof InvalidPasswordError) {
                res.status(error.code).json({ error: error.message })
            }
            else{
                console.error(error)
                res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: "Unknown error" })
            }
        }

    }
}
