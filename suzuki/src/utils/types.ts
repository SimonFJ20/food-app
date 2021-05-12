
export type UserId = string;
export type FoodId = string;
export type RestaurantId = string;
export type Token = string;

export type StatusCode = number;

export type CheckResponse = 'success' | 'incomplete' | 'error';

export type CheckUserCreateResponse = CheckResponse | 'success' | 'email invalid' | 'incomplete' | 'error';


export type TypeStrings = 'undefined' | 'boolean' | 'number' | 'string' | 'bigint' | 'symbol' | 'object' | 'function' | 'null';


