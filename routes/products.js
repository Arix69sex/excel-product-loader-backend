import { Router } from 'express';
import createProducts from '../lib/createProducts.js';
import getAllProducts from '../interactors/getAllProducts.interactor.js';
import getProductById from '../interactors/getProductById.interactor.js';
import deleteProduct from '../interactors/deleteProduct.interactor.js';
import updateProduct from '../interactors/updateProduct.interactor.js';
import authMiddleware from "../middleware/authMiddleware.js";
import parseProductToUpdate from '../lib/parseProductToUpdate.js';

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
    const productId = req.params.productId;
    try {
        const product = await getProductById(productId)
        if  (!product) {
            res.status(400).json({ error: "Product doesn't exist." });
        } else {
            res.status(200).json({
            product: product
        });
        }
        
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

router.patch('/:productId', authMiddleware,  async (req, res) => {
    const productId = req.params.productId;
    const productData = req.body;
    try {
        const product = await getProductById(productId)
        if  (!product) {
            res.status(400).json({ error: "Product doesn't exist." });
        } else {
            const parsedData = parseProductToUpdate(product, productData)
        const result = await updateProduct(product, parsedData)
        res.status(200).json({
            body: result
        });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete('/:productId', authMiddleware,  async (req, res) => {
    const productId = req.params.productId;
    try {
        const product = await getProductById(productId);
        if  (!product) {
            res.status(400).json({ error: "Product doesn't exist." });
        } else {
            await deleteProduct(product)
        res.status(200).json({
            body: product
        });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;