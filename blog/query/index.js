const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 4002;

const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts); 
})

app.post('/events', (req, res) => {
    const { type, data } = req.body;

    if (type === 'PostCreated') {

        const { id , title } = data;

        posts[id] = { id, title, comments: []}
    }

    if ( type === 'CommentCreated') {
        const { id, content, postId } = data;
        const post = posts[postId]

        post.comments.push({ id, content });
    }

    console.log(posts, 'posts')

    res.send({});
})

app.listen(port, () => {
    console.log('Listening on ' + port)
})

