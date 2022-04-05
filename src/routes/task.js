const express = require("express");
const taskSchema = require("../models/task");

const router = express.Router();

//Create Tasks
router.post('/tasks', (req, res) =>{
    const task = taskSchema(req.body);
    task.save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({ message: error }))
});

//Get all Tasks
router.get('/tasks', (req, res) =>{
    taskSchema
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({ message: error }))
});

//Get just one Tasks
router.get('/tasks/:id', (req, res) =>{
    const { id } = req.params;
    taskSchema
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({ message: error }))
});

//Update Tasks
router.put('/tasks/:id', (req, res) =>{
    const { id } = req.params;
    const { title, completed } = req.body;
    taskSchema
    .updateOne({ _id: id }, { $set: {title, completed} })
    .then((data)=> res.json(data))
    .catch((error)=> res.json({ message: error }))
});

//Delete Tasks
router.delete('/tasks/:id', (req, res) =>{
    const { id } = req.params;
    taskSchema
    .remove({ _id: id })
    .then((data)=> res.json(data))
    .catch((error)=> res.json({ message: error }))
});


module.exports = router;
