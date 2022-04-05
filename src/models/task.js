const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    completed:{
        type: Boolean,
        require: true,
    }
});

module.exports = mongoose.model('Task', taskSchema);