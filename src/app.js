import express from 'express';
import homeRoutes from './routes/cobaRoute.js';


const app= express();
const port= 3000;

app.use('/',homeRoutes);

app.listen(port, () => {
    console.info(`Server is running on port: ${port}`);
})