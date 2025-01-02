const express = require('express');
const app = express();
const path = require('path');

// Array to store blog posts (in real app, use a database)
let posts = [{
    id: 1,
    title: 'Welcome to Nellog!',
    content: 'This is your beautiful new blog. Create your first post to begin!',
    date: new Date()
}];

// Middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.render('index', { posts });
});

app.get('/new', (req, res) => {
    res.render('new');
});

app.post('/new', (req, res) => {
    const { title, content } = req.body;
    const newPost = {
        id: posts.length + 1,
        title,
        content,
        date: new Date()
    };
    posts.unshift(newPost);
    res.redirect('/');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 