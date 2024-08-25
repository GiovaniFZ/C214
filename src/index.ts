// let: variável de escopo local
// const: constante
// var: variável de escopo global

type Task = {
  name: string;
  schedule: Date;
};

class toDoListManager {
  private tasks: Task[] = [];
  constructor() {}

  insertTask(task: Task) {
    this.tasks.push(task);
  }
}

const task: Task = {
  name: "aula 03",
  schedule: new Date("2024-08-23"),
};

// Criando a variável taskManager
const taskManager = new toDoListManager();
// Inserindo a task na lista de tasks
taskManager.insertTask(task);

console.log("TASK", task);
