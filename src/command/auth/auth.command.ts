import httpStatus from "http-status";
import { inject, injectable } from "inversify";

import { AuthDTO } from "../../api/dto/auth.dto";
import { UserService } from "../../domain/service/user.service";
import { User } from "../../domain/user";
import { Jsonwebtoken } from "../../infra/jsonwebtoken/jsonwebtoken";
import { Nodemailer } from "../../infra/nodemailer/nodemailer";
import { TYPES } from "../../types";
import { AuthResponse } from "./auth.response";

export interface IAuthCommand {
    execute( authDTO: AuthDTO ): Promise<AuthResponse>
}

@injectable()
export class AuthCommand implements IAuthCommand {

    private userService : UserService
    private jsonwebtoken: Jsonwebtoken
    private nodemailer: Nodemailer

    constructor(
         @inject(TYPES.UserService) userService: UserService,
         @inject(TYPES.Jsonwebtoken) jsonwebtoken: Jsonwebtoken,
         @inject(TYPES.Nodemailer) nodemailer: Nodemailer
    ) {
        this.userService = userService
        this.jsonwebtoken = jsonwebtoken
        this.nodemailer = nodemailer
    }

    async execute( authDTO: AuthDTO ): Promise<AuthResponse> {

        let user: User | null
        let code = httpStatus.OK

        try {
            user = await this.userService.login( authDTO.email, authDTO.password )
            if ( user == null ) {
                user = await this.userService.create( authDTO.email, authDTO.password )
                code = httpStatus.CREATED
                this.nodemailer.sendMail( user.email, " Welcome to our application, your supplier is " + user.supplier )
            } 
        }
        catch(error) {
            console.error(error)
            throw error
        }
        
        const token = this.jsonwebtoken.sign(user)
        return new AuthResponse(token, user.supplier, code)


    }

}