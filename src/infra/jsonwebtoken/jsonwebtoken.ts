import { decode, sign, verify } from "jsonwebtoken"
import { injectable } from "inversify"
import { User } from "../../domain/user"

@injectable()
export class Jsonwebtoken {

    private key: string

    constructor() {
        this.key = String(process.env.KEY)
    }

    sign( payload: User ) {
        return sign( { payload }, this.key )
    }

    verify( token: string ) : any {

        let user

        try {
            const { payload } : any = verify( token, this.key)
            user = { email: payload._email, password: payload._password, supplier: payload._supplier }
        }
        catch(error){
            console.error(error)
            throw error
        }

        return new User(user)

    }

}