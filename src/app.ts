import express from 'express';
import productRouter from './routers/productRouter';
import userRouter from './routers/userRouter';
import loginRouter from './routers/loginRouter';
import orderRouter from './routers/oderRouter';
import httpErrorMiddleware from './middlewares/http.error.middleware';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/login', loginRouter);
app.use('/orders', orderRouter);

app.use(httpErrorMiddleware);

export default app;
