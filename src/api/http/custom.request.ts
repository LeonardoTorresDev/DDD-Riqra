import { Request } from "express";
import { User } from "../../domain/user";

export interface CustomRequest extends Request {
    user?: User
}