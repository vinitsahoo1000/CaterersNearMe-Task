import express from 'express';
import cors from 'cors';
import { connectDB } from './db';
import { catererRoutes } from './routes/caterer.routes';



const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

connectDB();

app.get('/health', (req, res) => {
  res.send('Server is running!');
});

app.use('/api/caterers', catererRoutes);

app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`);
});