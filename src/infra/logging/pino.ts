import pino from 'pino'
import { injectable } from 'inversify'

@injectable()
export class Logger {
    get(): pino.Logger {
        return pino()
    }
}