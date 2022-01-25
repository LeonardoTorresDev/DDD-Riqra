import { inject, injectable } from "inversify";
import { InvalidPasswordError } from "../../errors/errors";

import { TYPES } from "../../types";
import { UserRepository } from "../repository/user.repository";
import { User } from "../user";

export interface IUserService {
    login( email: string, password: string ): Promise<User|null>
    create( email: string, password: string): Promise<User>
}

@injectable()
export class UserService implements IUserService {

    private userRepository: UserRepository;

    constructor(@inject(TYPES.UserRepository) userRepository: UserRepository) {
        this.userRepository = userRepository
    }

    async login( email: string, password: string ) :  Promise<User|null> {
        let user = await this.userRepository.getByEmail(email)
        if ( !user ) return null
        if ( password != user.password ) throw new InvalidPasswordError("Invalid password")
        return user
    }

    create( email: string, password: string ): Promise<User> {
        return this.userRepository.create(email, password)
    }

}