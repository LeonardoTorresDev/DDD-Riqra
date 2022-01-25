import 'dotenv/config'

import { connect, disconnect } from 'mongoose'
import { CatalogModel } from '../infra/mongoose/schemas/catalog.schema'



let products = [
    new CatalogModel({
        name: "J2",
        supplier: "Samsung",
        price: 123
    }),
    new CatalogModel({
        name: "J5",
        supplier: "Samsung",
        price: 140
    }),
    new CatalogModel({
        name: "P30",
        supplier: "Huawei",
        price: 150
    }),
    new CatalogModel({
        name: "iPhone 10",
        supplier: "Apple",
        price: 250
    }),
    new CatalogModel({
        name: "iPhone 11",
        supplier: "Apple",
        price: 350
    }),
    new CatalogModel({
        name: "Mi 3",
        supplier: "Xiaomi",
        price: 78
    }),
    new CatalogModel({
        name: "Mi 4",
        supplier: "Xiaomi",
        price: 99
    }),
    new CatalogModel({
        name: "K50",
        supplier: "LG",
        price: 120
    }),
    new CatalogModel({
        name: "K41",
        supplier: "LG",
        price: 109
    }),
]

async function seed() {
    await connect(String(process.env.MONGO_URI))
    await CatalogModel.insertMany(products)
    console.log("Seeding complete...")
}

async function main() {
    await seed()
    process.exit(1)
}

main()
