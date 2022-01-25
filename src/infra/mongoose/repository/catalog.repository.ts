import { inject, injectable } from "inversify"
import { connect } from "mongoose"

import { Catalog } from "../../../domain/catalog"
import { CatalogRepository } from "../../../domain/repository/catalog.repository"
import { TYPES } from "../../../types"
import { Logger } from "../../logging/pino"
import { CatalogMapper } from "../mapper/catalog.mapper"
import { CatalogModel } from "../schemas/catalog.schema"

@injectable()
export class MongooseCatalogRepository implements CatalogRepository {

    private connectionString : string = String(process.env.MONGO_URI)
    
    constructor( @inject(TYPES.Logger) private logger: Logger ) {
        const myLogger = logger.get()
        connect(this.connectionString)
        myLogger.info("Database connected!")

    }
    
    async getByTerm(term: string): Promise<Catalog[]> {
        const query = { name: new RegExp(term, 'i') };
        const catalogs = await CatalogModel.find(query).exec()
        return catalogs.map( (catalog) => CatalogMapper.toDomain(catalog))
    }
    async getBySupplier(supplier: string): Promise<Catalog[]> {
        const catalogs = await CatalogModel.find({ supplier }).exec()
        return catalogs.map( (catalog) => CatalogMapper.toDomain(catalog))
    }
    
}