import express from 'express';
import dotenv from 'dotenv';
import { initWebRoutes } from './routes/web.js';
import { viewEngine } from './config/viewEngine.js';
import { connectDB } from './config/connect_db.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initWebRoutes(app);
viewEngine(app);

connectDB();

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
