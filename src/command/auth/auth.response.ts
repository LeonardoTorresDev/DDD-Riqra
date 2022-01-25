export class AuthResponse {

    token: string
    supplier: string
    code: number

    constructor(token: string, supplier: string, code: number){
        this.token = token
        this.supplier = supplier
        this.code = code
    }
    
}