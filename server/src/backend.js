// src/Routes/backEnd.js

import app from './index.js';

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});