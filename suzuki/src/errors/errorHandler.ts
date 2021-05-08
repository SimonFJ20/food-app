

interface LoggedError {
    error: Error,
    location: string
}



export const getInstanceOfError = (error: Error) => {
    if(error instanceof EvalError) return 'EvalError';
    else if(error instanceof TypeError) return 'TypeError';
    else if(error instanceof RangeError) return 'RangeError';
    else if(error instanceof ReferenceError) return 'ReferenceError';
    else if(error instanceof SyntaxError) return 'SyntaxError';
    else if(error instanceof URIError) return 'URIError';
    else if(error instanceof Error) return 'Error';
    else return 'Unknown Error';
}

export const formatError = (error: Error, location: string) => {
    return `${getInstanceOfError(error)} at ${location}\n┗Name: ${error.name}\n┗Message: ${error.message}\n`;
}

const logErrorToConsole = (error: Error, location: string) => {
    console.log(formatError(error, location));
}

const logErrorIfNotSuppressed = (error: Error, location: string, suppress?: boolean) => {
    if(!suppress) logErrorToConsole(error, location);
}


export class Errors {

    private static loggedErrors: LoggedError[] = [];

    private static addErrorToErrors = (error: Error, location: string) => {
        Errors.loggedErrors.push({error: error, location: location});
    }



    public static log = (error: Error, location: string, suppress?: boolean) => {
        logErrorIfNotSuppressed(error, location, suppress);
        Errors.addErrorToErrors(error, location);
    }

    public static clear = () => {
        Errors.loggedErrors = [];
    }

    public static getLength = () => {
        return Errors.loggedErrors.length;
    }

    public static getAllLoggedErrors = () => {
        return Errors.loggedErrors;
    }
    
    public static getAllErrors = () => {
        const returnErrors: Error[] = [];
        Errors.loggedErrors.forEach((loggedError: LoggedError) => {
            returnErrors.push(loggedError.error);
        });
        return returnErrors;
    }
    
    public static printAll = () => {
        Errors.loggedErrors.forEach((loggedError: LoggedError) => {
            logErrorToConsole(loggedError.error, loggedError.location);
        });
    }

}

