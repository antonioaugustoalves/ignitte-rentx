import express from "express";

import "reflect-metadata";
import { SwaggerUi } from "swagger-ui-express";

import { router } from "./routes";
import swaggerFile from "./swagger.json";

import "./database";
import "./shared/container";
import { createConnection } from "typeorm";

createConnection();

const app = express();
const port = 3333;

app.use(express.json());
app.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(swaggerFile));
app.use(router);

app.get("/", (request, response) => {
    response.status(200).json({ message: "Server online" });
});

app.listen(port, () => console.log(`Server listening on ${port}`));
