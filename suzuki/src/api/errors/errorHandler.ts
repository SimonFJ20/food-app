
interface LoggedError {
    error: Error,
    location: string
}

export class Errors {

    private static loggedErrors: LoggedError[] = [];

    private static addErrorToErrors = (error: Error, location: string) => {
        Errors.loggedErrors.push({error: error, location: location});
    }

    public static logError = (error: Error, location: string, suppress?: boolean) => {
        logErrorIfNotSuppressed(error, location, suppress);
        Errors.addErrorToErrors(error, location);
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

const getInstanceOfError = (error: Error) => {
    if(error instanceof EvalError) return 'EvalError';
    else if(error instanceof TypeError) return 'TypeError';
    else if(error instanceof MediaError) return 'MediaError';
    else if(error instanceof RangeError) return 'RangeError';
    else if(error instanceof ReferenceError) return 'ReferenceError';
    else if(error instanceof MSMediaKeyError) return 'MSMediaKeyError';
    else if(error instanceof MediaStreamError) return 'MediaStreamError';
    else if(error instanceof OverconstrainedError) return 'OverconstrainedError';
    else if(error instanceof SyntaxError) return 'SyntaxError';
    else if(error instanceof TypeError) return 'TypeError';
    else if(error instanceof URIError) return 'URIError';
    else if(error instanceof GeolocationPositionError) return 'GeolocationPositionError';
    else return 'Error';
}

const logErrorToConsole = (error: Error, location: string) => {

    const errorMessage = `
    ${getInstanceOfError(error)} at ${location}
    ┗Name: ${error.name}
    ┗Message: ${error.message}
    `

    console.error(errorMessage.trim());
}

const logErrorIfNotSuppressed = (error: Error, location: string, suppress?: boolean) => {
    if(!suppress) logErrorToConsole(error, location);
}


export const logError = (error: Error, location: string, suppress?: boolean) => {
    Errors.logError(error, location, suppress);
}




export default {
    Errors,
    getInstanceOfError,
    logErrorToConsole,
    logErrorIfNotSuppressed,

}

