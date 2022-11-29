import swaggerAutogen from "swagger-autogen";
import dotenv from "dotenv";

dotenv.config();

const doc = {
    info: {
        version: "1.0.0",
        title: "Open Chat App With SocketIO",
        description: "Development of a backend application to integrate into a socketIO chat."
    },
    host: `localhost:${process.env.PORT_SERVER}`,
    schemes: ["http", "https"],
};

const outputFile = "./swagger/swagger.json";
const endpointsFiles = ["./routes/route.ts"];

swaggerAutogen(outputFile, endpointsFiles, doc);