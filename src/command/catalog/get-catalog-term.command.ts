import { inject, injectable } from "inversify";
import { GetCatalogTermDTO } from "../../api/dto/get-catalog-term.dto";
import { Catalog } from "../../domain/catalog";
import { CatalogService } from "../../domain/service/catalog.service";
import { TYPES } from "../../types";

export interface IGetCatalogByTermCommand {
    execute( getCatalogTermDTO : GetCatalogTermDTO ) : Promise<Catalog[]>
}

@injectable()
export class GetCatalogByTermCommand implements IGetCatalogByTermCommand {
    
    private catalogService: CatalogService

    constructor( @inject(TYPES.CatalogService) catalogService: CatalogService) {
        this.catalogService = catalogService
    }

    async execute(getCatalogTermDTO: GetCatalogTermDTO): Promise<Catalog[]> {
        return this.catalogService.getCatalogByTerm(getCatalogTermDTO.term)
    }
    
}