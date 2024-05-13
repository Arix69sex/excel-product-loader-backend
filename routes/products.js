import { Router } from 'express';
import { createProduct } from '../interactors/createProduct.interactor';
import { getAllProducts } from '../interactors/getAllProducts.interactor';
import { getProductById } from '../interactors/getProductById.interactor';
import authMiddleware from "../middleware/authMiddleware";

const router = Router();

router.get('/products', authMiddleware, async (req, res) => {
    const user = req.user
    try {
        const productsOfUser = getAllProducts(user.userId)
        res.status(201).json({
            products: productsOfUser
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get(`/products/:productId`, authMiddleware, async (req, res) => {
    const user = req.user
    const productId = req.params.productId;
    try {
        const product = getProductById(user.userId, productId)
        res.status(201).json({
            product: product
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/products', authMiddleware,  async (req, res) => {
    const user = req.user
    const { products } = req.body;
    try {
        await createProduct(user.userId, products)
        res.status(200).json({
            body: products
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;