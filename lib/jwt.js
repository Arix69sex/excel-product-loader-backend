import jwt from 'jsonwebtoken';
require('dotenv').config();

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


module.exports = JWT;