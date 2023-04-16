"use strickt";

//класс для формирования блоков задач на день

class MyTasksBlock {
    constructor(value) {
        this.value = value;
    }

    render(callback) {
        const insertingTasks = document.querySelector('.tasks'),
            tasksMinBlock = document.createElement('div');
            tasksMinBlock.classList.add('my-day-tasks');
        tasksMinBlock.innerHTML = `<div class="title">${this.value}</div>
        <div class="inp-block"><input type="checkbox" class="inp-check"></div>`;
        insertingTasks.appendChild(tasksMinBlock);
        if(typeof callback === 'function') {
            callback();
        }
    }
}

// Получаю данные с базы данных задачи на день

function fetchTasks() {
  return fetch('get-tasks.php')
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < data.length; i++) {
        const task = new MyTasksBlock(data[i].task);
        task.render();
      }
    })
    .catch(error => console.log(error));
}
//функция асинхронность дожидается выполнения fetchTasks
fetchTasks().then(() => {
    const checkboxes = document.querySelectorAll('.inp-check');
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener("change", function() {
            const parentElement = this.parentNode.parentNode;
        if (this.checked) {
            // Получаем родителя elementa this
            parentElement.classList.add('back');
        } else {
            parentElement.classList.remove('back');
        }
        });
    });
});

// const myDayTasks = fetch("get-tasks.php").then(responce => responce.json()).then(data => {for (let i = 0; i < data.length; i++) {
//     new MyTasksBlock(data[i].task).render();}
//  }).catch(error => console.log(error));

const newTasksBlock = document.querySelector('.new-tasks__block'),
    minBlock = document.querySelector('.min-block');

//открываем окно для создания задач

document.querySelector(".new-tasks").addEventListener('click', () => {
    newTasksBlock.classList.remove('ds-none');

});

//завершение создания задач

document.querySelector('.finish-tasks').addEventListener('click', () => {
    newTasksBlock.classList.add('ds-none');
    minBlock.innerHTML = '';

});

//добавление задач

document.querySelector('.btn-plus').addEventListener('click', () => {
    const task = document.querySelector('.inp-tasks').value,
        miniBlock = document.createElement('div');
    miniBlock.classList.add('my-tasks');
    miniBlock.innerHTML = task;
    minBlock.appendChild(miniBlock);
    new MyTasksBlock(task).render();
    nullInpVal('.inp-tasks');
    tasksPost(task);
});

//функция для отправки задач на день

function tasksPost(task) {
    const xmlHttp = new XMLHttpRequest();

    xmlHttp.open('POST', 'task.php');

    xmlHttp.setRequestHeader('Content-Type', 'application/json');

    xmlHttp.onload = function() {
        if(xmlHttp.status === 200) {
            console.log('Ok');
        } else {
            console.log('False');
        }
    };

    xmlHttp.send(JSON.stringify({jsonTasks: task}));
};



//функция для очистки значения ipnput

function nullInpVal(classNam) {
    document.querySelector(classNam).value = '';
}

//проверка input на true checkbox

// const checkboxes = document.querySelectorAll('.inp-check');
// console.log(checkboxes);
// checkboxes.forEach(function(checkbox) {
//     checkbox.addEventListener("change", function() {
//       if (this.checked) {
//         console.log("Checkbox is checked.");
//       } else {
//         console.log("Checkbox is not checked.");
//       }
//     });
// });

