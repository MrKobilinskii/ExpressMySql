const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express('./routes/api/posts');

//Middleware
app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes/api/posts'); //posts-file
app.use('/api/posts', posts); //basic route for posts

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server started on port ${port}`);
});

