import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();
const salt = process.env.SALT
console.log("salt", salt)

class Crypter {
    static async hash(data) {
        return bcrypt.hash(data, Number(salt));
    }

    static async compare(data, dataToCompare) {
        return await bcrypt.compare(data, dataToCompare);
    }
}

export default Crypter;
