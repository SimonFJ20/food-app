
# errorHander.ts
**Stores, prints and handles errors**

- [errorHander.ts](#errorhanderts)
  - [interface LoggedError](#interface-loggederror)
  - [export getInstanceOfError()](#export-getinstanceoferror)
  - [export formatError()](#export-formaterror)
  - [logErrorToConsole()](#logerrortoconsole)
  - [logErrorIfNotSuppressed()](#logerrorifnotsuppressed)
  - [export class Errors](#export-class-errors)
    - [private static loggedErrors[]](#private-static-loggederrors)
    - [private static addErrorToErrors()](#private-static-adderrortoerrors)
    - [public static log()](#public-static-log)
    - [public static clear()](#public-static-clear)
    - [public static getLength()](#public-static-getlength)
    - [public static getAllLoggedErrors()](#public-static-getallloggederrors)
    - [public static getAllErrors()](#public-static-getallerrors)
    - [public static printAll()](#public-static-printall)

## interface LoggedError

Contains error and location

```ts
interface LoggedError {
    error: Error,
    location: string
}
```

## export getInstanceOfError()

Returns the Error subclass name

```ts
const getInstanceOfError: (error: Error) => "EvalError" | "TypeError" | "RangeError" | "ReferenceError" | "SyntaxError" | "URIError" | "Error" | "Unknown Error"
```

## export formatError()

Return a nice error string, based on error and location

```ts
const formatError: (error: Error, location: string) => string
```

Format:
```
TypeError at {location}
┗Name: {error.name}
┗Message: {error.message}
```

## logErrorToConsole()

Formats error and location

```ts
const logErrorToConsole: (error: Error, location: string) => void
```

## logErrorIfNotSuppressed()

If not suppressed, log error with logErrorToConsole()

```ts
const logErrorIfNotSuppressed: (error: Error, location: string, suppress?: boolean | undefined) => void
```

## export class Errors

Log, store, print and handle errors

### private static loggedErrors[]

Store logged errors

```ts
(property) Errors.loggedErrors: LoggedError[]
```

### private static addErrorToErrors()

Push new LoggedError to loggedErrors[]

```ts
(property) Errors.addErrorToErrors: (error: Error, location: string) => void
```

### public static log()

Log an error with a location, and logs error to console if not suppressed

```ts
(property) Errors.log: (error: Error, location: string, suppress?: boolean | undefined) => void
```

### public static clear()

Clears loggedErrors[]

```ts
(property) Errors.clear: () => void
```

### public static getLength()

Get length of loggedErrors[]

```ts
(property) Errors.getAllLoggedErrors: () => LoggedError[]
```

### public static getAllLoggedErrors()

Get loggedErrors[] as LoggedError[]

```ts
(property) Errors.getAllLoggedErrors: () => LoggedError[]
```

### public static getAllErrors()

Get loggedErrors[] as Error[]

```ts
(property) Errors.getAllErrors: () => Error[]
```

### public static printAll()

Print all errors formatted

```ts
(property) Errors.printAll: () => void
```



