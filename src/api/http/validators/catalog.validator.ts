import { param } from "express-validator"
import { authToken } from "../middlewares/authToken"
import { fieldValidation } from "./validator"

export const GetCatalogByTermValidators = [
    param("term").isLength({ min: 0, max: 25 }),
    fieldValidation
]

export const GetCatalogBySupplierValidators = [
    authToken
]