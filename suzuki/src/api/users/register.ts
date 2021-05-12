import { Router } from "express"
import { Errors } from "../../errors/errorHandler";
import { checkUserCreate } from "../../layer/checkUserCreate";
import { createUser } from "../../logic/createUser";
import { CheckUserCreateResponse, StatusCode } from "../../utils/types";

const checkRequest = (checkResponse: CheckUserCreateResponse): StatusCode => {

    if(checkResponse === 'incomplete') return 400;
    if(checkResponse === 'email invalid') return 400;
    if(checkResponse === 'success') return 200;
    return 500;

}

const callHandler = async (req: Parameters<Router>[0], res: Parameters<Router>[1]) => {
    
    try {


        const checkResponse = checkUserCreate(req.body);
        const statusCode = checkRequest(checkResponse);

        if(statusCode !== 200) {
            res.status(statusCode).json({success: false, response: checkResponse})
            return;
        }
        
        const createUserResponse = createUser({
            name: req.body.name,
            address: req.body.address,
            email: req.body.address,
            phone: req.body.phone,
            password: req.body.password
        });
        
        res.status(200).json({success: true, response: checkResponse})
    } catch(error) {
        res.status(500).json({success: true, response: 'error'});
        Errors.log(error, './api/users/register.ts callHandler');
    }

}



export const registerRoute = () => Router().post('/register', callHandler);

export const apiUsersRegisterCheckRequest = checkRequest;

