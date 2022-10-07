import express from 'express';
import productRouter from './routers/productRouter';
import userRouter from './routers/userRouter';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);

export default app;
