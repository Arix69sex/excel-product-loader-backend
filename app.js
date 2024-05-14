import express from 'express';
import bodyParser from 'body-parser';
const { json } = bodyParser;
import dbInstance from './db/db.js';
import productsRoutes from './routes/products.js';
import usersRoutes from './routes/users.js';
import cors from 'cors';

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

app.use(json());
app.use('/api/products', productsRoutes);
app.use('/api/users', usersRoutes);

dbInstance.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => console.error(err));