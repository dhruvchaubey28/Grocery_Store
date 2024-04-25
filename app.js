const express = require('express');
const path = require('path');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get("/", (req, res) => {
    res.render('index');
});
app.get("/index", (req, res) => {
    res.render('index');
});
app.get("/about", (req, res) => {
    res.render('about');
});
app.get("/contact", (req, res) => {
    res.render('contact');
});
app.get("/login", (req, res) => {
    res.render('login');
});
app.get("/sign", (req, res) => {
    res.render('sign');
});
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
