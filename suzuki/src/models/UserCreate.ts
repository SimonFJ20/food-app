import { MapLocation } from "./MapLocation";

export interface UserCreate {
    
    name: string, 
    address: MapLocation, 
    email: string,
    phone: string,
    password: string
    
}
