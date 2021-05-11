import { Router } from "express"
import { Errors } from "../../errors/errorHandler";

const callHandler = async (req: Parameters<Router>[0], res: Parameters<Router>[1]) => {
    
    try {


        
    } catch(error) {
        res.status(500).json({success: true, response: 'error'});
        Errors.log(error, './api/users/register.ts callHandler');
    }

}



export const registerRoute = () => Router().post('/register', callHandler);
