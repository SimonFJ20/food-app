
export interface CreateUserRequest {
    
    name: string,
    address: string,
    email: string,
    phone: string,
    password: string
    
}

export interface CreateUserResponse {
    
    id: string,
    address: string,
    email: string,
    phone: string
    
}
