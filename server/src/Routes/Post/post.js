// /src/Routes/Post/post.js

import express from 'express';

const router = express.Router();

router.post('/Login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'user@example.com' && password === '123456') {
        return res.status(200).json({ message: 'Login bem-sucedido' });
    } else {
        return res.status(401).json({ message: 'Email ou senha incorretos!' });
    }
});

export default router;