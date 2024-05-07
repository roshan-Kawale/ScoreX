import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.js";
import teamRouter from "./routes/team.js";
import userRouter from "./routes/user.js";
import matchRouter from "./routes/match.js"
import { errormiddleware } from "./utils/error.js";

dotenv.config(); 
// Create an instance of the express application
const app = express();

// Connect to MongoDB
mongoose 
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message); 
  });

  app.use(express.json());
  app.use(cookieParser());


// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.use("/api/auth" , authRouter);
app.use('/api/teams', teamRouter);
app.use('/api/user' , userRouter);
app.use('/api/match', matchRouter);

app.use(errormiddleware);

// Set the server to listen on a specific port (e.g., 3000) 
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
