import * as express from "express"; 
import{ Application, Request, Response} from 'express';
import { request } from "http";
import { send } from "process";
const app:Application = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

class Post{
    id:number
    text:string
    likes:number
    comments
    constructor(id:number, text:string, likes:number){
        this.id = id
        this.text = text
        this.likes = likes
        this.comments = []
    }
}

class Microblog{
    posts: Post[] = []

    create(p:Post){
        this.posts.push(p)
    }

    retrieve(ident:number){
       const postProcurado = this.posts.find(post => post.id === ident)
        return postProcurado
    }

    update(p:Post){
        const index = this.posts.findIndex(post => post.id == p.id)
        if(index != -1){
            this.posts[index] = p
        }
    }

    delete(ident:number){
        const postDeletado = this.posts.findIndex(post => post.id == ident)
        if(postDeletado != -1){
            this.posts.splice(postDeletado, 1)
        }
    }

    retriveAll(){
        return this.posts
    }

    retrieveAllComments(p:Post){
        return p.comments
    }

    addComments(p:Post, coment:string){
        p.comments.push(coment)
    }
}

const microblog = new Microblog()
const post1 = new Post(1,'Texto 1',10)
const post2 = new Post(2,'Texto 2',10)
const post3 = new Post(3,'Texto 3',10)
post1.comments.push('Comentario 1')
microblog.create(post1)
microblog.create(post2)
microblog.create(post3)

app.get('/posts', (request, response) =>{
    const retrieveAll = microblog.retriveAll()
    response.json(retrieveAll)
})

app.get('/posts/:id', (request, response) => {
    const id = Number(request.params.id)
    const post = microblog.retrieve(id)
    if(post){
        response.json(post)
    }else{
        response.status(404).send('Post não encontrado')
    }
})

app.delete('/posts/:id', (request, response) =>{
    const id = Number(request.params.id)
    const post = microblog.retrieve(id)
    if(post){
        microblog.delete(id)
        response.sendStatus(204)
    }else{
        response.status(404).send('Post não encontrado')
    }
})

app.post('/posts', (request,response) => {
    const text = request.body.text
    const id = Date.now()
    const likes = 0
    const novoPost = new Post(id, text, likes)
    microblog.create(novoPost)
    response.status(201).json(novoPost)
})

app.put('/posts/:id', (request,response) => {
    const id = Number(request.params.id)
    const post = microblog.retrieve(id)
    if(post){
        var postAtualizado:Post = {
            id: post.id,
            text: request.body.text,
            likes: request.body.likes,
            comments: post.comments
        }
        microblog.update(postAtualizado)
        response.sendStatus(200)
    }else{
        response.status(404).send('Post não encontrado')    
    }
})

app.patch('/posts/:id', (request, response) => {
    const id = Number(request.params.id)
    const post = microblog.retrieve(id)
    if(post){
        const postAtualizado = {
            id:post.id,
            text:request.body.text,
            likes: request.body.text,
            comments:post.comments
        }
        microblog.update(postAtualizado)
        response.sendStatus(200)
        }
        else{
            response.status(404).send('Post não encontrado')
        }
})

app.patch('/posts/:id/like', (request, response) =>{
    const id = Number(request.params.id)
    const post = microblog.retrieve(id)
    if(post){
        post.likes = post.likes + 1
        response.sendStatus(200)
    }else{
        response.status(404).send('Post não encontrado')
    }
})

app.get('/posts/:id/comments', (request, response) =>{
    const id = Number(request.params.id)
    const post = microblog.retrieve(id)
    if(post){
        response.send(post.comments)
        response.sendStatus(200)
    }else{
        response.status(404).send('Post não encontrado')
    }
})

app.post('/posts/:id/comments', (request, response) =>{
    const id = Number(request.params.id)
    const post = microblog.retrieve(id)
    if(post){
        microblog.addComments(post, request.body.text)
        response.sendStatus(200)
    }else{
        response.status(404).send('Post não encontrado')
    }
})

app.listen(3000, ()=>{
    console.log('Servidor rodando')
})