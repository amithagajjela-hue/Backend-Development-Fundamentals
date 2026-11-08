
const express = require("express");

const app = express();

// Home route
app.get("/", (request, response) => {
    response.send("Welcome to Backend Development Fundamentals!");
});

// About route
app.get("/about", (request, response) => {
    response.json({
        name: "Gajjela Amitha",
        section: "S-14"
    });
});

// Time route
app.get("/time", (request, response) => {
    response.json({
        currentDateTime: new Date()
    });
});

// 404 route
app.use((request, response) => {
    response.status(404).send("404 - Page Not Found");
});

// Start server
app.listen(3000, () => {
    console.log("Express server running at http://localhost:3000");
});
