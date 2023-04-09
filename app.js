import mongoose from "mongoose";
mongoose.connect('mongodb+srv://mgb0123:supersecretpassword@cluster0.khmmtax.mongodb.net/?retryWrites=true&w=majority');
import express from 'express';
import HelloController
    from "./controllers/hello-controller.js";
import UserController
    from "./controllers/users/users-controller.js";
import TuitsController
    from "./controllers/tuits/tuits-controller.js";
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors());


TuitsController(app);
HelloController(app);
UserController(app);
app.listen(process.env.PORT || 4000);

