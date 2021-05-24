
const generateId = (length: number) => {
    let id: string = '';
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ1234567890';
    for(let i = 0; i < length; i++) id += chars.charAt(Math.floor(Math.random() * chars.length));
    return id;
};

interface UserOut {
    _id: string,
    name: string,
    email: string,
    tel: string,
    password: string
}

interface UserIn {
    name: string,
    email: string,
    tel: string,
    password: string
}

export class User {

    private static table: UserOut[] = [];

    public static insert = (user: UserIn) => {
        const id = generateId(16);
        User.table.push({
            _id: id,
            ...user
        });
        return id;
    }

    public static find = (test: (user: UserOut) => boolean) => {
        for(let i in User.table) if(test(User.table[i])) return User.table[i];
    }
    
    public static get = (id: string) => {
        for(let i in User.table) if(User.table[i]._id === id) return User.table[i];
    }



}
