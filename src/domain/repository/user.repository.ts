import { User } from "../user";

export interface UserRepository {
    create( email: string, password: string ): Promise<User>
    getByEmail( email: string ): Promise<User | null>
}