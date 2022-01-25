import { inject, injectable } from "inversify";
import { TYPES } from "../../types";
import { Catalog } from "../catalog";
import { CatalogRepository } from "../repository/catalog.repository";

export interface ICatalogService {
    getCatalogByTerm( term: string ) : Promise<Catalog[]>
    getCatalogBySupplier( supplier: string ) : Promise<Catalog[]>
}

@injectable()
export class CatalogService implements ICatalogService {

    private catalogRepository: CatalogRepository

    constructor( @inject(TYPES.CatalogRepository) catalogRepository: CatalogRepository ) {
        this.catalogRepository = catalogRepository
    }

    getCatalogByTerm(term: string): Promise<Catalog[]> {
        return this.catalogRepository.getByTerm(term)
    }
    getCatalogBySupplier(supplier: string): Promise<Catalog[]> {
        return this.catalogRepository.getBySupplier(supplier)
    }

}