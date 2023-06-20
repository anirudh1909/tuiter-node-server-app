import express from 'express'
import session from "express-session";
import cors from 'cors'
import HelloController from "./controllers/hello-controller.js"
import UserController from "./users/users-controller.js"
import TuitsController from "./controllers/tuits/tuits-controller.js";
import AuthController from "./users/auth-controller.js";
import mongoose from "mongoose";
const CONNECTION_STRING = 'mongodb+srv://anirudh1909:anirudh123@cluster0.ehhrpn0.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_STRING);


const app = express()

app.use(
  session({
    secret: "any string",
    resave: false,
    saveUninitialized: true,
  })
 );

 app.use(
  cors({
    credentials: true,
    origin: (origin, callback) => {
      // Allow all origins
      callback(null, true);
    },
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], // Allow all CRUD operations
    })
  );

app.use(express.json());
app.use(express.json());

TuitsController(app);
HelloController(app)
UserController(app)
AuthController(app);

app.listen(process.env.PORT || 4000)