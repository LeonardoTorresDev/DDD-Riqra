import { Catalog } from "../catalog";

export interface CatalogRepository {
    getByTerm( term: string ): Promise<Catalog[]>
    getBySupplier( supplier: string ): Promise<Catalog[]>
}