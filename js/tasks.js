"use strickt";
const newTasksBlock = document.querySelector('.new-tasks__block');

document.querySelector(".new-tasks").addEventListener('click', () => {
    newTasksBlock.classList.remove('ds-none');

});

document.querySelector('.finish-tasks').addEventListener('click', () => {
    newTasksBlock.classList.add('ds-none');
});