import 'reflect-metadata'

import { Container } from 'inversify'

import { Server, IServer } from './api/http/server'

import { Logger } from './infra/logging/pino'

import { TYPES } from './types'
import { MongooseUserRepository } from './infra/mongoose/repository/user.repository'
import { UserRepository } from './domain/repository/user.repository'
import { IUserService, UserService } from './domain/service/user.service'
import { Jsonwebtoken } from './infra/jsonwebtoken/jsonwebtoken'
import { AuthCommand, IAuthCommand } from './command/auth/auth.command'
import { Nodemailer } from './infra/nodemailer/nodemailer'
import { CatalogRepository } from './domain/repository/catalog.repository'
import { MongooseCatalogRepository } from './infra/mongoose/repository/catalog.repository'
import { CatalogService, ICatalogService } from './domain/service/catalog.service'
import { GetCatalogByTermCommand, IGetCatalogByTermCommand } from './command/catalog/get-catalog-term.command'
import { GetCatalogBySupplierCommand, IGetCatalogBySupplierCommand } from './command/catalog/get-catalog-supplier.command'

const container = new Container()

container.bind<IServer>(TYPES.Server).to(Server).inSingletonScope()

container.bind<UserRepository>(TYPES.UserRepository).to(MongooseUserRepository).inSingletonScope()
container.bind<CatalogRepository>(TYPES.CatalogRepository).to(MongooseCatalogRepository).inSingletonScope()

container.bind<IUserService>(TYPES.UserService).to(UserService)
container.bind<ICatalogService>(TYPES.CatalogService).to(CatalogService)

container.bind<IAuthCommand>(TYPES.AuthCommand).to(AuthCommand)
container.bind<IGetCatalogByTermCommand>(TYPES.GetCatalogByTermCommand).to(GetCatalogByTermCommand)
container.bind<IGetCatalogBySupplierCommand>(TYPES.GetCatalogBySupplierCommand).to(GetCatalogBySupplierCommand)

container.bind(TYPES.Logger).to(Logger)
container.bind(TYPES.Jsonwebtoken).to(Jsonwebtoken)
container.bind(TYPES.Nodemailer).to(Nodemailer)

export { container }
