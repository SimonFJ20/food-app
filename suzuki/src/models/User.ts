import { RestaurantId, Token, UserId } from "../utils/types";

export interface User {
    
    id: UserId,
    name: string, 
    address: string, 
    email: string,
    phone: string,
    restaurents: RestaurantId[];
    
}
