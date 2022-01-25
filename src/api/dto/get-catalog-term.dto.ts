export class GetCatalogTermDTO {

    private _term: string

    constructor( term: string ) {
        this._term = term
    }

    get term() {
        return this._term
    }

}