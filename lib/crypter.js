import bcrypt from 'bcryptjs';
require('dotenv').config();
const salt = process.env.SALT

class Crypter {
    static async hash(data) {
        return await bcrypt.hash(data, salt);
    }

    static async compare(data, dataToCompare) {
        return await bcrypt.compare(data, dataToCompare);
    }
}

module.exports = Crypter;