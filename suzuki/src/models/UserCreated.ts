import { UserId } from "../utils/types";

export interface UserCreated {
    
    id: UserId,
    name: string, 
    address: string, 
    email: string,
    phone: string
    
}
