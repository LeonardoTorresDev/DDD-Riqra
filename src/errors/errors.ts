export class InvalidPasswordError extends Error {

    public code: number
    public message: string

    constructor( message: string ) {
        super()
        this.code = 403
        this.message = message
    }

}