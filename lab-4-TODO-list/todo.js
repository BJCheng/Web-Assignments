const uuid = require('uuid');
const mongoCollection = require('./mongoCollection');

module.exports = {
    "createTask": (title, description) => {
        if (!title || !description) return new Promise((resolve, reject) => {
            reject('Did not provid title or description for createTask().');
        });
        let task = {
            "_id": uuid(),
            "title": title,
            "description": description,
            "completed": false,
            "completedAt": null
        };
        return mongoCollection.getTodoItems.then((todoItems) => {
            return todoItems.insertOne(task);
        });
    },

    "getAllTasks": () => {
        return mongoCollection.getTodoItems.then((todoItems) => {
            return todoItems.find().toArray();
        });
    },

    "getTask": (id) => {
        if (!id) return new Promise((resolve, reject)=>{
            reject('Did not provid id for getTask().');
        });
        return mongoCollection.getTodoItems.then((todoItems) => {
            return todoItems.findOne({ _id: id });
        });
    },

    "completeTask": (id) => {
        if (!id) return new Promise((resolve, reject)=>{
            reject('Did not provid id for completeTask().');
        });
        return mongoCollection.getTodoItems.then((todoItems) => {
            return todoItems.updateOne({ _id: id }, { $set: { completed: true } });
        });
    },

    "removeTask": (id) => {
        if (!id) return new Promise((resolve, reject)=>{
            reject('Did not provid id for removeTask().');
        });
        return mongoCollection.getTodoItems.then((todoItems) => {
            return todoItems.remove({ _id: id });
        });
    }
}