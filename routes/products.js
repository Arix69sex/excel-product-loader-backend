import { Router } from 'express';
import createProducts from '../lib/createProducts.js';
import getAllProducts from '../interactors/getAllProducts.interactor.js';
import getProductById from '../interactors/getProductById.interactor.js';
import authMiddleware from "../middleware/authMiddleware.js";

const router = Router();

router.get('', authMiddleware, async (req, res) => {
    const user = req.user
    try {
        const productsOfUser = await getAllProducts(user.id)
        res.status(201).json({
            products: productsOfUser
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get(`/:productId`, authMiddleware, async (req, res) => {
    const user = req.user
    const productId = req.params.productId;
    try {
        const product = await getProductById(user?.id, productId)
        res.status(201).json({
            product: product
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('', authMiddleware,  async (req, res) => {
    const user = req.user
    const { products } = req.body;
    try {
        await createProducts(user?.id, products)
        res.status(200).json({
            body: products
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;