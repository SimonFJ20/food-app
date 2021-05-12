import { RestaurantId, Token, UserId } from "../utils/types";
import { MapLocation } from "./MapLocation";

export interface User {
    
    id: UserId,
    name: string, 
    address: MapLocation, 
    email: string,
    phone: string,
    restaurents: RestaurantId[];
    
}
