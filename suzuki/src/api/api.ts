import { Router } from "express"
import { usersRoutes } from "./users";
import { Errors } from "../errors/errorHandler";


export const api = () => {
    const router = Router();
    
    try {
        
        router.use(usersRoutes());
    
    } catch(error) {
        Errors.log(error, './api.ts api init');
    }
    
    return router;
}

