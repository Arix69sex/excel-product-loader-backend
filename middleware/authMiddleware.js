import { JWT } from '../lib/jwt';

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    try {
        const decoded = JWT.verify(token);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ error: 'JWT invalid or missing.' });
    }
};

export default authMiddleware;
