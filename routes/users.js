import { Router } from 'express';

import createUser  from '../interactors/createUser.interactor.js';
import getUserByUsername from '../interactors/getUserByUsername.interactor.js';
import Crypter from "../lib/crypter.js"
import JWT from "../lib/jwt.js"
import createProducts from '../lib/createProducts.js';

const router = Router();

router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashedPassword = await Crypter.hash(password);
        const newUser = await createUser({ username, password: hashedPassword });
        const jwt = JWT.sign(newUser.id, newUser.username)
        await createProducts(newUser.id)
        return res.status(200).json({ jwt: jwt });
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: err.message });
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await getUserByUsername(username);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const isMatch = await Crypter.compare(password, user.password);
        if (isMatch) {
            const jwt = JWT.sign(user.id, user.username)
            return res.status(200).json({ jwt: jwt });
        } else {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;