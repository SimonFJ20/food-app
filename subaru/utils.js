
exports.generateToken = (length) => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let out = '';
    for(let i = 0; i < length; i++) out += chars.charAt(Math.random() * chars.length);
    return out;
}
