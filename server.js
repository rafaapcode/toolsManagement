import app from './app';
import dotenv from 'dotenv';

dotenv.config();

app.listen(process.env.PORT, () => console.log('Listening on port 3000'));