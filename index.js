const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.get("/hello", (req, res) => {
    const name = req.query.name;
    res.send(`Hello, ${name}!`);
});

app.get("/quote", (req, res) => {
    res.json({
        quote: "YOU DON'T MATTER, GIVE UP!",
        author: "Terrible UX Design"
    });
});

app.listen(PORT, console.log(`Listening on port ${PORT}...`));
