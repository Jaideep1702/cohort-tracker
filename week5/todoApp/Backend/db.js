const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb+srv://jaideepjambhale15856:1A3cXPOibhfTgLF7@cluster0.cke7tz9.mongodb.net/todos');

const todoSchema = new mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean,
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
};