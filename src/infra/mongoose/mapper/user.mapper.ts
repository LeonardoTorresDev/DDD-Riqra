import { User } from "../../../domain/user"
import { IUserSchema } from "../schemas/user.schema"

export class UserMapper {
    public static toDomain( user: IUserSchema ) {
        const { email, password, supplier } = user
        return new User({ email, password, supplier })
    }
}