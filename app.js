import express from 'express';
import { json } from 'body-parser';
import { sync } from './db';
import authRoutes from './routes/auth';
import profileRoutes from './routes/profile';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);

sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => console.error(err));