import { Schema, model, Document } from "mongoose"

export interface IUserSchema extends Document {
    email: string
    password: string
    supplier: string
}

const UserSchema = new Schema<IUserSchema>({
    email: {
        type: String,
        required: [ true, 'Email is required' ]
    },
    password: {
        type: String,
        required: [ true, 'Password is required' ]
    },
    supplier: {
        type: String,
        required: [ true, 'Password is required' ]
    }
})

export const UserModel = model('User', UserSchema)