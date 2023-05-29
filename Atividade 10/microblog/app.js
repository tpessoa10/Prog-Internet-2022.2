"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
var Post = /** @class */ (function () {
    function Post(id, text, likes) {
        this.id = id;
        this.text = text;
        this.likes = likes;
        this.comments = [];
    }
    return Post;
}());
var Microblog = /** @class */ (function () {
    function Microblog() {
        this.posts = [];
    }
    Microblog.prototype.create = function (p) {
        this.posts.push(p);
    };
    Microblog.prototype.retrieve = function (ident) {
        var postProcurado = this.posts.find(function (post) { return post.id === ident; });
        return postProcurado;
    };
    Microblog.prototype.update = function (p) {
        var index = this.posts.findIndex(function (post) { return post.id == p.id; });
        if (index != -1) {
            this.posts[index] = p;
        }
    };
    Microblog.prototype.delete = function (ident) {
        var postDeletado = this.posts.findIndex(function (post) { return post.id == ident; });
        if (postDeletado != -1) {
            this.posts.splice(postDeletado, 1);
        }
    };
    Microblog.prototype.retriveAll = function () {
        return this.posts;
    };
    Microblog.prototype.retrieveAllComments = function (p) {
        return p.comments;
    };
    Microblog.prototype.addComments = function (p, coment) {
        p.comments.push(coment);
    };
    return Microblog;
}());
var microblog = new Microblog();
var post1 = new Post(1, 'Texto 1', 10);
var post2 = new Post(2, 'Texto 2', 10);
var post3 = new Post(3, 'Texto 3', 10);
post1.comments.push('Comentario 1');
microblog.create(post1);
microblog.create(post2);
microblog.create(post3);
app.get('/posts', function (request, response) {
    var retrieveAll = microblog.retriveAll();
    response.json(retrieveAll);
});
app.get('/posts/:id', function (request, response) {
    var id = Number(request.params.id);
    var post = microblog.retrieve(id);
    if (post) {
        response.json(post);
    }
    else {
        response.status(404).send('Post não encontrado');
    }
});
app.delete('/posts/:id', function (request, response) {
    var id = Number(request.params.id);
    var post = microblog.retrieve(id);
    if (post) {
        microblog.delete(id);
        response.sendStatus(204);
    }
    else {
        response.status(404).send('Post não encontrado');
    }
});
app.post('/posts', function (request, response) {
    var text = request.body.text;
    var id = Date.now();
    var likes = 0;
    var novoPost = new Post(id, text, likes);
    microblog.create(novoPost);
    response.status(201).json(novoPost);
});
app.put('/posts/:id', function (request, response) {
    var id = Number(request.params.id);
    var post = microblog.retrieve(id);
    if (post) {
        var postAtualizado = {
            id: post.id,
            text: request.body.text,
            likes: request.body.likes,
            comments: post.comments
        };
        microblog.update(postAtualizado);
        response.sendStatus(200);
    }
    else {
        response.status(404).send('Post não encontrado');
    }
});
app.patch('/posts/:id', function (request, response) {
    var id = Number(request.params.id);
    var post = microblog.retrieve(id);
    if (post) {
        var postAtualizado = {
            id: post.id,
            text: request.body.text,
            likes: request.body.text,
            comments: post.comments
        };
        microblog.update(postAtualizado);
        response.sendStatus(200);
    }
    else {
        response.status(404).send('Post não encontrado');
    }
});
app.patch('/posts/:id/like', function (request, response) {
    var id = Number(request.params.id);
    var post = microblog.retrieve(id);
    if (post) {
        post.likes = post.likes + 1;
        response.sendStatus(200);
    }
    else {
        response.status(404).send('Post não encontrado');
    }
});
app.get('/posts/:id/comments', function (request, response) {
    var id = Number(request.params.id);
    var post = microblog.retrieve(id);
    if (post) {
        response.send(post.comments);
        response.sendStatus(200);
    }
    else {
        response.status(404).send('Post não encontrado');
    }
});
app.post('/posts/:id/comments', function (request, response) {
    var id = Number(request.params.id);
    var post = microblog.retrieve(id);
    if (post) {
        microblog.addComments(post, request.body.text);
        response.sendStatus(200);
    }
    else {
        response.status(404).send('Post não encontrado');
    }
});
app.listen(3000, function () {
    console.log('Servidor rodando');
});
