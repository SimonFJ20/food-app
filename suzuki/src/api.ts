import { Router } from "express"
import { usersRoutes } from "./api/users";


export const api = () => {
    const router = Router();
    
    
    router.use(usersRoutes());
    
    
    return router;
}

