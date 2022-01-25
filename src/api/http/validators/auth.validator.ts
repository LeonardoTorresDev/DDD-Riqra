import { body } from "express-validator"
import { fieldValidation } from "./validator"

export const authValidators = [
    body("email").isEmail(),
    body("password").notEmpty(),
    fieldValidation
]
