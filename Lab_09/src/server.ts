import express, { Application } from 'express';
import cors from 'cors';

import mainRouter from './routers/mainRouter';

const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10): 4080;

const app: Application = express();

app.use(cors());

app.use(express.static('public'));
app.use('/', mainRouter);
app.listen(PORT, 'localhost', () => console.log(`Server listening on port ${PORT}`))
    .on('error', (err: any) => console.log((err.code == 'EADDRINUSE') ? `Port ${PORT} is already in use.` : err));
