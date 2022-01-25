const TYPES = {
    Logger: Symbol.for('Logger'),
    Jsonwebtoken: Symbol.for('Jsonwebtoken'),
    Nodemailer: Symbol.for('Nodemailer'),
  
    Server: Symbol.for('Server'),

    UserService: Symbol.for('UserService'),
    CatalogService: Symbol.for('CatalogService'),

    AuthCommand: Symbol.for('AuthCommand'),
    GetCatalogByTermCommand: Symbol.for('GetCatalogByTermCommand'),
    GetCatalogBySupplierCommand: Symbol.for('GetCatalogBySupplierCommand'),

    UserRepository: Symbol.for('UserRepository'),
    CatalogRepository: Symbol.for('CatalogRepository')
}
  
export { TYPES }