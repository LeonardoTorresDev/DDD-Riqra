import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

import { Jsonwebtoken } from "../../../infra/jsonwebtoken/jsonwebtoken";
import { CustomRequest } from "../custom.request";

export const authToken = ( req: CustomRequest, res: Response, next: NextFunction ) => {

    const jsonwebtoken = new Jsonwebtoken()
    const { token } = req.body
    if ( !token ) {
        return res.status(httpStatus.FORBIDDEN).json({
            error: "Token not found"
        })
    }

    try {
        const user = jsonwebtoken.verify(token)
        req.user = user
        next()
    }
    catch(error : any) {
        return res.status(httpStatus.UNAUTHORIZED).json({
            error: error.message
        })
    }

}