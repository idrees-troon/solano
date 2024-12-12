const express = require('express'); 
// const path = require('path');
const app = express();
const port = 30;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));





app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

//NOTE - Static Routes
app.get('/home', (req, res) => {
    res.send("this is home page");
});

app.get('/about', (req, res) => {
    res.send("this is about page");
});



//NOTE - Dynamic Routes
app.get('/user/:name', (req, res) => {
    const username = req.params.name;
    res.send(`Welcome ${username}`);
});

app.get('/user/:name/:age', (req, res) => {
    const username = req.params.name;
    const age = req.params.age;
    res.send(`Welcome ${username} - ${age}`);
});
