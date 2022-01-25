import { Request, Response, Router } from "express";
import { CatalogController } from "../controllers/catalog.controller";
import { GetCatalogBySupplierValidators, GetCatalogByTermValidators } from "../validators/catalog.validator";

export const register = ( router: Router ) => {
    const catalogController = new CatalogController()
    router.get('/catalogs/:term', GetCatalogByTermValidators, ( req: Request, res: Response ) => catalogController.GetCatalogByTerm(req, res))
    router.get('/catalogs', GetCatalogBySupplierValidators, ( req: Request, res: Response ) => catalogController.GetCatalogBySupplier(req, res))
}