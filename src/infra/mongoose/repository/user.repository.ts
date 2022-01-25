import { inject, injectable } from "inversify"
import { connect } from "mongoose"

import { UserRepository } from "../../../domain/repository/user.repository"
import { User } from "../../../domain/user"
import { TYPES } from "../../../types"
import { Logger } from "../../logging/pino"
import { UserMapper } from "../mapper/user.mapper"
import { UserModel } from "../schemas/user.schema"

@injectable()
export class MongooseUserRepository implements UserRepository {

    private connectionString : string = String(process.env.MONGO_URI)
    
    constructor( @inject(TYPES.Logger) private logger: Logger ) {
        const myLogger = logger.get()
        connect(this.connectionString)
        myLogger.info("Database connected!")

    }

    async create(email: string, password: string): Promise<User> {
        const user = new User({ email, password })
        let newUser = new UserModel({ email: user.email, password: user.password, supplier: user.supplier })
        await newUser.save()
        return UserMapper.toDomain(newUser)
    }

    async getByEmail(email: string): Promise<User | null>{      
        const user = await UserModel.findOne({ email }).exec()
        if (user == null ) return null 
        return UserMapper.toDomain(user)   
    }
    
}