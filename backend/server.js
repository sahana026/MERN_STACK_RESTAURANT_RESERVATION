import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes.js';
import reservationRoute from './routes/reservationRoute.js';
import { errorMiddleware } from './middlewares/error.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:3000'],
  credentials: true
}));

app.use('/api/auth', authRoutes);
app.use('/reservation', reservationRoute);

// Error handling middleware
app.use(errorMiddleware);

// connect to mongo and start server ...
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Mongo connected'))
  .catch(err => console.error(err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on ${port}`));

