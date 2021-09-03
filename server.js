const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to circle rest application." });
});

require("./app/routes/card_data.routes.js")(app);

// set port, listen for requests
app.listen(8081, () => {
    console.log("Server is running on port 8081.");
});