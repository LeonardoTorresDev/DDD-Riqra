export class Catalog {

    private _name: string
    private _supplier: string
    private _price: number

    constructor({ name, supplier, price } : { name: string, supplier: string, price: number }) {
        this._name = name
        this._supplier = supplier
        this._price = price      
    }

    get name() {
        return this._name
    }

    get supplier() {
        return this._supplier
    }

    get price() {
        return this._price
    }

}