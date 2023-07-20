
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import productRoutes from './routes/products.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/products', productRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on : http://localhost:${PORT}`)
})
