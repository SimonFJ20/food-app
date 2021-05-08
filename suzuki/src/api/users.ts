import { Router } from "express"
import { Errors } from "../errors/errorHandler";
import { registerRoute } from "./users/register";

export const usersRoutes = () => {
    const router = Router();
    
    try {

        router.use(registerRoute())

    } catch(error) {
        
        Errors.log(error, './api/users.ts register routes')

    }

    return router;
}
