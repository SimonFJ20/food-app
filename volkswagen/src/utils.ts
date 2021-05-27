
export const hostname = 'https://feedme.simonfj20.site';

export const removeEventlistenersOnId = (id: string) => {
    const oldElement = document.getElementById(id);
    if(!oldElement) return;
    const newElement = oldElement.cloneNode(true);
    oldElement.parentNode?.replaceChild(newElement, oldElement);
}

export const generateId = (length: number) => {
    const chars = 'abcdefghijklmonpqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let out = '';
    for(let i = 0; i < length; i++) out += chars.charAt(Math.floor(Math.random() * chars.length));
    return out;
}
