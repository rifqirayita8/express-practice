import express from 'express';
import studentRoutes from './routes/student.js';
import path from 'path';


const app= express();
const port= 3000;

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use('/student',studentRoutes);

app.listen(port, () => {
    console.info(`Server is running on port: ${port}`);
})