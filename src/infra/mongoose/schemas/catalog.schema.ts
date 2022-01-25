import { Schema, model, Document } from "mongoose"

export interface ICatalogSchema extends Document {
    name: string,
    supplier: string,
    price: number
}

const CatalogSchema = new Schema<ICatalogSchema>({
    name: {
        type: String,
        required: [ true, 'Name is required' ]
    },
    supplier: {
        type: String,
        required: [ true, 'Supplier is required' ]
    },
    price: {
        type: Number,
        required: [ true, 'Price is required' ]
    }
})

export const CatalogModel = model('Catalog', CatalogSchema)