import { TypeStrings } from "../utils/types";
import Filter from 'bad-words';
import { MapLocation } from "../models/MapLocation";

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
    return re.test(email.trim());
}

export const validateName = (name: string): boolean => {
    const filter = new Filter();
    const re = /^([A-ZÆØÅ]?[a-zæøå]+\s){1,}([A-ZÆØÅ]?[a-zæøå]+)$/;
    return !filter.isProfane(name.trim()) && re.test(name.trim());
}

export const validatePhone = (phone: string): boolean => {
    const re = /^\d{8}/;
    return re.test(phone.replace(/\s/g, ''));
}

export const validateMapLocation = (location: MapLocation): boolean => {
    return location.latitude >= -90 && location.latitude <= 90
    && location.longitude >= -180 && location.longitude <= 180;
}

