import { Errors } from "../errors/errorHandler";
import { CheckUserCreateResponse } from "../utils/types";
import { exists, validateEmail } from "./checkers";

export const checkUserCreate = (input: any): CheckUserCreateResponse => {

    try {

        if(!exists(input.name, input.address, input.email, input.phone, input.password)) return 'incomplete';

        // TODO

        // definetionen på name?
        // definetionen på address?
        // definetionen på phone?

        if(!validateEmail(input.email)) return 'email invalid';

        return 'success';
    } catch(error) {
        Errors.log(error, './layer/checkUserCreate.ts checkUserCreate');
        return 'error';
    }

}
