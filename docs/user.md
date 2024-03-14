# User Api Spec

## Register Api Spec

Request POST /api/user/register

```json
{
  "email": "adrian@email.com",
  "name": "adrian",
  "password": "anjay"
}
```

Response success

```json
{
  "id": 1,
  "email": "adrian@email.com",
  "name": "adrian"
}
```

Response error

```json
{
  "errors": "name already exits"
}
```

## Login Api Spec

Request POST /api/users/login

```json
{
  "email": "adrian@email.com",
  "password": "anjay"
}
```

Response Success

```json
{
  "data": {
    "token": "unique-value"
  }
}
```

Response Error

```json
{
  "errors": "Email or Password wrong"
}
```

## Update User Api

Request PATH /api/update/current

Header :

- Auth Token

```json
{
  "name": "adrian", // optional
  "password": "new_password" // optional
}
```

Response success

```json
{
  "data": {
    "name": "adrian",
    "password": "new_password"
  }
}
```

Response error

```json
{
  "errors": "Name length 100 max"
}
```

## Get User Api

Request GET /api/users/current

Response success

```json
{
  "data": {
    "name": "adrian",
    "email": "adrian@email.com"
  }
}
```

Response error

```json
{
  "errors": "Not found"
}
```

## Logout User Api

Request DELETE /api/users/logout

Header:

- Auth token

Response success

```json
{
  "status": "OK"
}
```

Response error

```json
{
  "errors": "UnAuth"
}
```
