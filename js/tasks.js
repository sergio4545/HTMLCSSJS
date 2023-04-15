"use strickt";
class myTasksBlock {
    constructor(value, block) {
        this.value = value;
        this.block = block;
    }

    render() {
        const insertingTasks = document.querySelector('.tasks');
    }
}

const newTasksBlock = document.querySelector('.new-tasks__block');

document.querySelector(".new-tasks").addEventListener('click', () => {
    newTasksBlock.classList.remove('ds-none');

});

document.querySelector('.finish-tasks').addEventListener('click', () => {
    newTasksBlock.classList.add('ds-none');
    // I get all the created tasks 
    const exportTasks = document.querySelectorAll('.my-tasks');
    //I get a block for inserting tasks
    const insertingTasks = document.querySelector('.tasks');
    //The loop goes through all the tasks and inserts them into the page
    for (let i = 0; i<exportTasks.length; i++) {
        insertingTasks.appendChild(exportTasks[i]);
    }

});

document.querySelector('.btn-plus').addEventListener('click', () => {
    const task = document.querySelector('.inp-tasks').value,
        miniBlock = document.createElement('div');
    miniBlock.classList.add('my-tasks');
    miniBlock.innerHTML = task;
    document.querySelector('.min-block').appendChild(miniBlock);
});