import express from 'express';
import cors from "cors"
import { config } from 'dotenv'
import { router } from "./router/index"

config()

const app = express();

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));

app.use("/", router)

app.listen(3000, () => console.log("Server is running on http://localhost:3000"));
