import express from 'express';

import { doLogin,getProducts } from '../controllers/products.js';

const router = express.Router();

router.post('/login', doLogin);
router.get('/', getProducts);


export default router;