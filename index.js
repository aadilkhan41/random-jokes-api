const express = require("express");
const jokes = require("./jokes");

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("Welcome to the Random Jokes API!");
});

app.get("/api/jokes/random", (req, res) => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    res.json({ joke: jokes[randomIndex] });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});