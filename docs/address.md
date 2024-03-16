# Address Api Spec

## Create Address

- Auth

Request POST /api/address

```json
{
  "street": "telekomunikasi",
  "province": "Bandung",
  "city": "Bandung"
}
```

Response success

```json
{
  "data": {
    "id": 1,
    "street": "telekomunikasi",
    "province": "Jawa Barat",
    "city": "Bandung"
  }
}
```

Response error

```json
{
  "errors": "required city"
}
```

## Update Address

Request POST /api/address/:idaddress

```json
{
  "street": "telekomunikasi",
  "province": "Jawa Barat",
  "city": "Bandung"
}
```

Response success

```json
{
  "data": {
    "id": 1,
    "street": "telekomunikasi",
    "province": "Bandung",
    "city": "Bandung"
  }
}
```

Response error

```json
{
  "errors": "Auth no exits"
}
```

## Get Address

Request GET /api/address

Response success

```json
{
  "data": {
    "id": 1,
    "street": "telekomunikasi",
    "province": "Bandung",
    "city": "Bandung"
  }
}
```

Response error

```json
{
  "errors": "Id not found"
}
```

## Delete Address

Request DELETE /api/address/:idaddress

Response success

```json
{
  "status": "ok"
}
```

Response error

```json
{
  "errors": "data not found"
}
```
