import * as express from "express";
import connector from "./bot";


const app = express();
app.post("/api/messages", connector.listen());



export default app;