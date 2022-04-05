const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

//Create User
router.post('/users', (req, res) =>{
    const user = userSchema(req.body);
    user.save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({ message: error }))
});

//Get all Users
router.get('/users', (req, res) =>{
    userSchema
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({ message: error }))
});

//Get just one Users
router.get('/users/:id', (req, res) =>{
    const { id } = req.params;
    userSchema
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({ message: error }))
});

//Update Users
router.put('/users/:id', (req, res) =>{
    const { id } = req.params;
    const { name, password } = req.body;
    userSchema
    .updateOne({ _id: id }, { $set: {name, password} })
    .then((data)=> res.json(data))
    .catch((error)=> res.json({ message: error }))
});

//Delete Users
router.delete('/users/:id', (req, res) =>{
    const { id } = req.params;
    userSchema
    .remove({ _id: id })
    .then((data)=> res.json(data))
    .catch((error)=> res.json({ message: error }))
});


module.exports = router;

