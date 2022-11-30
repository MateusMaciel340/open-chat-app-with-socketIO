import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";

import AppError from "./errors/AppError";
import socketio, { Socket, Server } from "socket.io";

import swaggerFile from "./swagger/swagger.json";
import router from "./routes/route";

import connectDB from "./configs/connection";

const app: Application = express();
const io = new Server({});

const connectedUsers: any = {};

dotenv.config();

// Database - MongoDB
connectDB();

// SocketIO
io.on("connection", (socket: Socket) => {
    const { user_id } = socket.handshake.query;
});

app.use((request: Request, response: Response, next: NextFunction) => {
    request.io = io;
    request.connectedUsers = connectedUsers;

    return next();
})

// Error
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            status: "error",
            message: err.message
        });
    }

    console.error(err);

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    });
});

app.use(
    cors(), express.json()
);

app.use("/api", router);

app.use(
    "/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile)
);

app.listen(process.env.PORT_SERVER || 8080, () => {
    console.log(
        `Server started on port ${process.env.PORT_SERVER || 8080}`);
});