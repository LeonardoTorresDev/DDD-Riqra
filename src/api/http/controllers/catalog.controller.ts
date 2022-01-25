import { Request, Response } from "express"
import { injectable } from "inversify"
import { IGetCatalogBySupplierCommand } from "../../../command/catalog/get-catalog-supplier.command"
import { IGetCatalogByTermCommand } from "../../../command/catalog/get-catalog-term.command"

import { container } from "../../../container"

import { TYPES } from "../../../types"
import { GetCatalogTermDTO } from "../../dto/get-catalog-term.dto"
import { CustomRequest } from "../custom.request"

@injectable()
export class CatalogController {

    public async GetCatalogByTerm( req: Request, res: Response ) {

        const command = container.get<IGetCatalogByTermCommand>(TYPES.GetCatalogByTermCommand)
        const { term } = req.params

        const getCatalogTermDTO = new GetCatalogTermDTO(term)
        const catalogs = await command.execute(getCatalogTermDTO)

        res.json(catalogs)
        
    }

    public async GetCatalogBySupplier( req: CustomRequest, res: Response ) {

        const command = container.get<IGetCatalogBySupplierCommand>(TYPES.GetCatalogBySupplierCommand)

        const catalogs = await command.execute( String(req.user?.supplier) )
        res.json(catalogs)
        
    }

}