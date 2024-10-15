import 'dotenv/config';
import express from 'express';
import studentRoutes from './routes/authRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app= express();
const port= 3000;

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use('/student',studentRoutes);

app.use(errorHandler);

app.listen(port, () => {
    console.info(`Server is running on port: ${port}`);
})