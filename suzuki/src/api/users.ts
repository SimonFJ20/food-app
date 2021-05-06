import { Router } from "express"
import { registerRoute } from "./users/register";

export const usersRoutes = () => {
    const router = Router();
    
    try {

        router.use(registerRoute())

    } catch(catchError) {
        //console.error('userRoutes initialization failed:', error);
        const error = catchError as Error;
        console.log(error.name)
        console.log(error.message)
        console.log(typeof error.stack)
    }

    return router;
}
