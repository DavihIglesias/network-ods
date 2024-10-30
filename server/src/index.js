//ser/Routes/index.js

import express from 'express';
import cors from 'cors';
import postRoutes from './Routes/Post/post.js';

const app = express();

//permite acesso ao front-end
app.use(cors({
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//rotas de login
app.use(postRoutes);

export default app;
