import { Suppliers } from "./suppliers"

export class User {

    private _email: string
    private _password: string
    private _supplier: string
    
    constructor({ email, password, supplier } : { email: string, password: string, supplier?: string }) {
        this._email = email
        this._password = password
        this._supplier = supplier ? supplier : Suppliers[ Math.floor( Math.random() * 5 ) ]        
    }

    public get email() {
        return this._email
    }

    public get password() {
        return this._password
    }

    public get supplier() {
        return this._supplier
    }

}
