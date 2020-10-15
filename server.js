const express = require("express");
const app = express();

const port = process.env.PORT | 3333;

app.use(express.static(__dirname + "/public"));

app.get("/*", (request, response) => {
    response.sendFile(__dirname + "/public/index.html");
});

app.listen(port);