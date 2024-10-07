import initWebRoutes from "./routes/v1";
import express from 'express';
import cors from 'cors';
import job from "./config/checkBookingStatus";

require('dotenv').config();
require('./config/passport');
// require('./config/connection').connectionServer(); // test connection

const app = express();
app.use(cors(
    {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }
));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

initWebRoutes(app);

app.listen(port, host, () => {
    console.log(`Server is running on ${port}`);
    console.log(`Swagger is running on http://${host}:${port}/api-docs`);
})

export default app;