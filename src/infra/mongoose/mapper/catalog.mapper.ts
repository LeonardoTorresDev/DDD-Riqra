import { Catalog } from "../../../domain/catalog"
import { ICatalogSchema } from "../schemas/catalog.schema"

export class CatalogMapper {
    public static toDomain( catalog: ICatalogSchema ) {
        const { name, supplier, price } = catalog
        return new Catalog({ name, supplier, price })
    }
}