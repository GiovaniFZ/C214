"use strict";
// let: variável de escopo local
// const: constante
// var: variável de escopo global
class toDoListManager {
    constructor() {
        this.tasks = [];
    }
    insertTask(task) {
        this.tasks.push(task);
    }
}
const task = {
    name: 'aula 03',
    schedule: new Date('2024-08-23')
};
// Criando a variável taskManager
const taskManager = new toDoListManager();
// Inserindo a task na lista de tasks
taskManager.insertTask(task);
console.log('TASK', task);
