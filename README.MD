# DDD-Riqra

REST API diseñada utilizando conceptos de DDD

## Endpoints
### Auth Module : /auth
Obtendrá un token para acceder a otros endpoints, sino está registrado se le enviará un correo y se le asignará un supplier
```json
{
    "email": "email@example.com",
    "password": "contraseña",
}
```
### Get Term : /catalogs/:term
Obtendrá los productos de acuerdo a su nombre

### Get Term : /catalogs
Obtendrá los productos de acuerdo al supplier asignado en su registro
```json
{
    "token": "jsonwebtoken"
}

