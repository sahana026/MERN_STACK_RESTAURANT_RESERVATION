import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes.js';
import reservationRoute from './routes/reservationRoute.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));

app.use('/api/auth', authRoutes);
app.use('/reservation', reservationRoute);

// connect to mongo and start server ...
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Mongo connected'))
  .catch(err => console.error(err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on ${port}`));

