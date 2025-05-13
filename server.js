import express from 'express';
import shoesRoutes from './src/routes/shoes.routes.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(shoesRoutes);

app.listen(port, () => {
    console.log("Server is running");
});
