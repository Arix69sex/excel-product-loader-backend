import { Router } from 'express';
import { createUser } from '../interactors/createUser.interactor';
import { getUserById } from '../interactors/getUserById.interactor';
import { getUserByUsername } from '../interactors/getUserByUsername.interactor';

import Crypter from "../lib/crypter"
import JWT from "../lib/jwt"
const router = Router();

router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashedPassword = await Crypter.hash(password);
        const newUser = await create({ username, password: hashedPassword });
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await findOne({ where: { username } });
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