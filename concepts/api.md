# FeeDdMe API
All API endpoints requires authentication in the form of `token` unless otherwise specified.
## Users

`/api/users/`

### POST /register
#### **NO AUTH**

registers a new user.

`/api/users/register`

Request
```ts
{
    name: string,
    address: Location,
    email: string,
    phone: string,
    password: string
}
```

Response
```ts
{
    success: boolean,
    response: 'success' | 'username taken' | 'username inappropriate' | 'email taken' | 'email invalid' | 'incomplete' | 'error'

```

### POST /login
#### **NO AUTH**

logs in a user.

`/api/users/login`

Request
```ts
{
    phone: string,
    email: string,
    password: string
}
```

Response
```ts
{
    success: boolean,
    response: 'success' | 'taken' | 'incomplete' | 'error',
    username?: string,
    userId?: string,
    token?: string
}
```

### POST /logout

logs a user out. also invalidates token.

`/api/users/logout`

Request
```ts
{

}
```

Response
```ts
{
    success: boolean,
    response: 'success' | 'invalid token' | 'error',
}
```

### GET /getdata

gets data for user. also used for GPDR purposes.

`/api/users/getdata`

Request
```ts
{

}
```

Response
```ts
{
    success: boolean,
    response: 'success', 'invalid token', 'incomplete', 'error',
    id: string,
    name: string,
    address: Location,
    email: string,
    phone: string
    restaurants: Restaurant[],
}
```

### DELETE /delete

deletes a user account permanently

`/api/users/delete`

Request
```ts
{
    
}
```

Response
```ts
{
    success: boolean,
    response: 'success', 'invalid token', 'error'
}
```

### POST /checktoken

checks if a token has expired

`/api/users/checktoken`

Request
```ts
{

}
```

Response
```ts
{
    success: boolean,
    response: 'success', 'expired', 'error'
}
```

## Food

`/api/food/`

### GET /getlist

gets a list of food from relevant tags, category, point score and distance to user in order of relevancy

`/api/food/getlist`

Request
```ts
{
    tags: string[]
    categories: string[]
    maxDistance: number
}
```

Response
```ts
{
    success: boolean,
    response: 'success', 'incomplete', 'error'
    food: Food[]
}
```