import express from 'express'
// < -- per utilizzare questa sintassi bisogna inserire "type": "module", all'interno di package.json sotto main
// const express = require('express') metodo vecchio per includere modulo

import mongoose from 'mongoose' //pacchetto che ci permette di utilizzare mongodb "rispetto al pacchetto mongodb ha dellle funzionalità aggiuntive"
import cors from 'cors' // ci permette di gestire le chiamate cors
import dotenv from 'dotenv'

import usersRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'

import { authenticateToken } from './middlewares/auth.js';

const app = express()
dotenv.config()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use('/users', authenticateToken, usersRoutes)// ogni url che inizia con users verra gestito da questo route
app.use('/auth', authRoutes)
app.get('/', (req,res)=> res.send("benvenuto nella homepage"))

mongoose.set("strictQuery", false);

mongoose.connect(process.env.CONNECTION_URL)
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server runing on port: ${PORT}`)
    })
})
.catch(error=>console.log(error))
