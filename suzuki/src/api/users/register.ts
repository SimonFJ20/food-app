import { Router } from "express"

const callHandler = async (req: Parameters<Router>[0], res: Parameters<Router>[1]) => {

    

}



export const registerRoute = () => Router().post('/register', callHandler);
