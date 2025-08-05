import express from 'express';
import {createServer} from 'node:http';

import {Server} from 'socket.io';

import mongoose from 'mongoose';
import {connectToSocket} from './controllers/socketManager.js';


import cors from 'cors';
import userRoutes from './routes/users.routes.js';



const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", (process.env.PORT || 8000));
app.use(cors());
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({extended: true, limit: "40kb"}));

// app.get('/home', (req, res) => {
//     return res.json({"hello": "world"});
// });

app.use('/api/v1/users', userRoutes);

const start = async () => {
    const connectionDb = await mongoose.connect('mongodb+srv://bp747444:pLA67Zjjk52Uk7IY@cluster0.rgk8nm.mongodb.net/');
    
    console.log(`Database connected: ${connectionDb.connection.host}`);
    server.listen(app.get("port"), () => {
        console.log("LISTENIN ON PORT 8000")
    });
}

start();    