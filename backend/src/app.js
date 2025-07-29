import cookieParser from 'cookie-parser';
import express, { urlencoded } from 'express';
import adminRoutes from '../src/routes/admin.routes.js';
import publicRoutes from '../src/routes/public.routes.js';
import authRoutes from './routes/auth.routes.js';

const app = express();
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api', publicRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/v1/auth', authRoutes);

export default app;
