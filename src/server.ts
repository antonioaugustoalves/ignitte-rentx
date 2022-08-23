import express from "express";

const app = express();
const port = 3333;

app.use(express.json());

app.get("/", (request, response) => {
    response.status(200).json({ message: "Server online" });
});

app.listen(port, () => console.log(`Server listening on ${port}`));
