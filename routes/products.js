import { Router } from 'express';
import { createProduct } from '../interactors/createProduct.interactor';
import { getAllProducts } from '../interactors/getAllProducts.interactor';
import { getProductById } from '../interactors/getProductById.interactor';

import Crypter from "../lib/crypter"
import authMiddleware from "../middleware/authMiddleware";

const router = Router();

router.get('/products', authMiddleware, async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashedPassword = await Crypter.hash(password);
        const newUser = await create({ username, password: hashedPassword });
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get(`/products/${productId}`, authMiddleware, async (req, res) => {
    const { username, password } = req.body;
    Product.findAll({ include: Author }).then(books => {
        books.forEach(book => {
          console.log(`${book.title} by ${book.Author.name}`);
        });
      });
    try {
        const hashedPassword = await Crypter.hash(password);
        const newUser = await create({ username, password: hashedPassword });
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


router.post('/products', authMiddleware,  async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashedPassword = await Crypter.hash(password);
        const newUser = await create({ username, password: hashedPassword });
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;