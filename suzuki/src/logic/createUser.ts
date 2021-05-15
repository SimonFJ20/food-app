import { User } from "../models/User";
import { UserCreate } from "../models/UserCreate";

export const createUser = async (userCreate: UserCreate): Promise<User> => {
    
    return new Promise((res) => {
        res({
            id: '',
            name: '',
            address: {latitude: 0, longitude: 0},
            email: '',
            phone: '',
            restaurents: []
        });
    });
    
}
