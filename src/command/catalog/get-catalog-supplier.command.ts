import { inject, injectable } from "inversify";

import { Catalog } from "../../domain/catalog";
import { CatalogService } from "../../domain/service/catalog.service";
import { TYPES } from "../../types";

export interface IGetCatalogBySupplierCommand {
    execute( supplier: string ) : Promise<Catalog[]>
}

@injectable()
export class GetCatalogBySupplierCommand implements IGetCatalogBySupplierCommand {
    
    private catalogService: CatalogService

    constructor( @inject(TYPES.CatalogService) catalogService: CatalogService) {
        this.catalogService = catalogService
    }

    async execute( supplier: string ): Promise<Catalog[]> {
        return this.catalogService.getCatalogBySupplier( supplier )
    }
    
}