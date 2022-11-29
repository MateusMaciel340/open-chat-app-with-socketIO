import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";

import swaggerFile from "./swagger/swagger.json";
import router from "./routes/route";

const app: Application = express();

dotenv.config();

app.use(
    cors(), express.json(), router
);

app.use(
    "/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile)
);

app.listen(process.env.PORT_SERVER || 8080, () => {
    console.log(
        `Server started on port ${process.env.PORT_SERVER || 8080}`);
});