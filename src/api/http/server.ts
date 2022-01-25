import express from "express";
import cors from "cors";
import { injectable, inject } from 'inversify'

import { registerRoutes } from "./routes";

import { TYPES } from '../../types'
import { Logger } from "../../infra/logging/pino";

export interface IServer {
    routes(): void
    middlewares(): void
    start(): void
}

@injectable()
export class Server implements IServer {

    private app: express.Application
    private port: string

    @inject(TYPES.Logger) private logger: Logger

    constructor() {
        this.app = express()
        this.port = String(process.env.PORT)
        this.middlewares();
        this.routes()
    }

    middlewares(): void {
        this.app.use(cors())
        this.app.use(express.json())
    }
    
    routes(): void {
        const router = express.Router()
        this.app.use(router)
        registerRoutes(router)
    }

    start(): void {
        const logger = this.logger.get()
        this.app.listen(this.port, () => {
            logger.info(`Running on port ${this.port}`)
        })
    }

}