import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const secretKey = process.env.JWT_SECRET
const expireIn = "7d"

class JWT {
    static sign(userId, username) {
        return jwt.sign({ id: userId, username: username }, secretKey, { expiresIn: expireIn });
    }

    static verify(token) {
        const decodedToken = jwt.verify(token, secretKey);
        return decodedToken
    }
}

export default JWT;
