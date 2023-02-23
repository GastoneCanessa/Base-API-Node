import mongoose from "mongoose";
// const mongoose = require('mongoose')
// const Schema = mongoose.Schema
//possibile altra sintassi

// modello prima dell'autenticazione

// const usersSchema = mongoose.Schema({
//    nome: {
//     type: String,
//     require: true
//    } ,
//    cognome: {
//     type: String,
//     require: true
//    },
//    email: {
//     type: String,
//     require: true
//    }
// },
// {
  // con questo campo gestirà automaticamente il createAt e updateAt
//     timestamps: true
// }
// )

// export const User = mongoose.model('User', usersSchema)

const usersSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    nome: {
        type: String,
        require: true
    }
 },
 {
   // con questo campo gestirà automaticamente il createAt e updateAt
     timestamps: true
 }
 )

 export const User = mongoose.model('User', usersSchema)
