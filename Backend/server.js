import express from 'express';
import dotenv from 'dotenv';
import userRoute from './routes/userRoutes.js';
import connectDB from './db/dbConnect.js';

dotenv.config();
const app = express();

//for using req.body use this middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.use('/users', userRoute);

app.get('/', (req, res) => {
  res.send('Api is running');
});

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
