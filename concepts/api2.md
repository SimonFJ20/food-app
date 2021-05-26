#api2

## POST getfood
`/api/getfood`

#### Request

```ts
{
    tags: string[],
    location: {latitude: number, longitude: number}
}
```

#### Response

```ts
{
    success: boolean,
    response: 'success' | 'invalid' | 'error'|,
    foods: Food[],
    errors?: Error[],
    error?: Error
}
```


## POST gettags
`/api/gettags`

#### Request

```ts
{
    search: string
}
```

#### Response

```ts
{
    success: boolean,
    response: 'success' | 'invalid' | 'error'|,
    tags: Tag[],
    errors?: Error[],
    error?: Error
}
```


## POST login
`/api/login`

#### Request

```ts
{
    phone: string,
    password: string
}
```

#### Response

```ts
{
    success: boolean,
    response: 'success' | 'unknown' | 'error',
    token: string,
    operation: MongoTokenInsert
    error?: Error
}
```


## POST updateuser
`/api/updateuser`

#### Request

```ts
{
    token: string,
    name: string,
    email: string,
    phone: string
}
```

#### Response

```ts
{
    success: boolean,
    response: 'success' | 'unknown' | 'occupied' | 'error',
    operations: MongoUserInsert
    error?: Error
}
```

## POST register
`/api/register`

#### Request

```ts
{
    name: string,
    email: string,
    phone: string,
    password: string
}
```

#### Response

```ts
{
    success: boolean,
    response: 'success' | 'occupied' | 'invalid' | 'error',
    operation: MongoUserInsert
    errors?: Error[],
    error?: Error
}
```
