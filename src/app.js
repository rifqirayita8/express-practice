import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth/authRoute.js';
import { errorHandler } from './middleware/errorHandler.js';

const app= express();
const port= process.env.APP_PORT;

app.use(cors(
    {
        origin: 'http://adult.com',
        credentials: true,
    }
));
app.use((req, res, next) => {
    console.log('Request Origin:', req.get('origin')); // Mencetak origin dari permintaan
    next();
});

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use('/student',authRouter);

app.get('/tes', (req, res) => {
    res.json('rifqi gantenkk');
})

app.use(errorHandler);

app.listen(port, () => {
    console.info(`Server is running on port: ${port}`);
})