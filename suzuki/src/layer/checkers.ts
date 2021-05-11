import { TypeStrings } from "../utils/types";

export const exists = (...values: any[]) => {
    for(let i in values) if(values[i] === null || values[i] === undefined) return false;
    return true;
}

export const isType = (value: any, type: TypeStrings) => {
    if(type !== 'null') return typeof value === type;
    return value === null;
}

export const validateEmail = (email: string): boolean => {
    const re = /^[\w\.\-]+@[\w\-]+\.?[\w\-]+\.\w{2,6}$/;
    return re.test(email)
}
