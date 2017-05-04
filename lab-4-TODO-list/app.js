const mongoCollection = require('./mongoCollection');
const todo = require('./todo');
let taskCollectionPromise = mongoCollection.task;

let title = 'Ponder Dinosaurs';
let description = 'Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?';

todo.createTask(title, description).then((createResult) => {
    if (createResult.result.ok < 1) throw ('Create task failed.');

    console.log(`1. Following task was created: \n${JSON.stringify(createResult.ops[0])}\n`);

    title = 'Play Pokemon with Twitch TV';
    description = 'Should we revive Helix?';
    return todo.createTask(title, description);
}).then((createResult) => {
    if (createResult.result.ok < 1) throw ('Create task failed.');

    console.log(`2. Following task was created: \n${JSON.stringify(createResult.ops[0])}\n`);

    return todo.getAllTasks();
}).then((tasks) => {
    if (tasks.length < 1) throw ('No tasks left.');
    console.log('3. Displaying all tasks:');
    console.log(tasks);
    return tasks[0];
}).then((firstTask) => {
    todo.removeTask(firstTask._id);
    console.log(`\n4.The first task was removed.\n`);
    return todo.getAllTasks();
}).then((tasks) => {
    console.log('5. Displaying all tasks again:');
    console.log(tasks);
    return tasks;
}).then((tasks) => {
    tasks.forEach((task) => {
        todo.completeTask(task._id);
    });
    console.log('\n6. All tasks have been completed.\n');

    return todo.getAllTasks();
}).then((tasks) => {
    console.log('7.Displaying all tasks(completed):');
    console.log(tasks);
}).catch((err) => {
    console.log(err)
});