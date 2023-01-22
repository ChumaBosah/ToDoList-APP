const tasks = [
    'Clean House',
    'Wash Car',
    'Cook Beans',
    'Buy Couch',
    'Complete Task',
    'Buy Domain',
    'Subscribe Metre',
    'Subscribe Dstv',
    'Call Mom',
    'Read the Bible',
];

const completedTask = [];
const menu = ['View tasks', 'Complete a Task', 'View Completed Tasks'];

const name = prompt('Please enter your name: ').toUpperCase();
const greeting = console.log(`\nWELCOME TO YOUR TASKS ${name}\n`);

const app = () => {
    console.log(`----------------------------------------------------\n`);
    for(let i = 0; i < menu.length; i++){
        console.log(`${i + 1}. ${menu[i]} \n`)
    }
    const selectMenu = prompt("Select an Item: ");

    if (selectMenu == 1) {
        displayTask();
        app();
    } else if (selectMenu == 2) {
        displayTask();
        completeTask();
        app();
    } else if (selectMenu == 3) {
        displayCompleted();
        app();
    } else {
        console.log(`PLEASE INPUT A VALID MENU NUMBER!`)
        app();
    }
};

const displayTask = () => {
    console.log(`-------------------------------------------------------\n`)
    console.log("Tasks to be done are:");
    for(let i = 0; i < tasks.length; i++){
        console.log(`${i + 1}. ${tasks[i].toLocaleUpperCase()} \n`)
    }
};

const completeTask = () => {
    let completedTaskNo = +prompt('Please Enter Task Number') - 1
    let complete = tasks.splice(completedTaskNo, 1);
    completedTask.push(complete);
    console.log(`Dear ${name}, you have completed ${complete}\n`)
};

const displayCompleted = () => {
    if (completedTask.length == 0){
        console.log(`Dear ${name} you have not completed any task!\n`)
    } else {
        console.log(`----------------------------------------------------\n`)
        console.log(`Dear ${name}, you completed:`);
        for(let i = 0; i < completedTask.length; i++){
            console.log(`${i + 1}. ${completedTask[i]} \n`)
        }
    }
};

app();