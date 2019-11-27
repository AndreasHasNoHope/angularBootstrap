import {Component, OnInit} from '@angular/core';
import {ITask} from "../../Intefaces/ITask";
import {error} from "util";

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {
  public firstName: string = "Enzo";
  public lastName: string = "Tsim";
  public search: string= "";
  public numbs: number[] = [1, 2, 3, 4, 5, 6, 7];

  // Model form Variablew for new Task
  public taskTitle: string;
  public taskDueDate: Date;


  public swalOptions = {
    icon: "error",
    title: "Are you sure?",
    showCancelButton: true
  };

  public todos: ITask[] = [
    {
      _id: "1",
      dueDate: new Date("2019-11-28T20:30:00.000Z"),
      completed: false,
      title: "Learn Angular"
    }, {
      _id: "2",
      dueDate: new Date("2019-11-28T20:30:00.000Z"),
      completed: false,
      title: "Learn JavaScript"
    }, {
      _id: "3",
      dueDate: new Date("2019-11-28T20:30:00.000Z"),
      completed: false,
      title: "Learn FireBase"
    }, {
      _id: "4",
      dueDate: new Date("2019-11-28T20:30:00.000Z"),
      completed: false,
      title: "Learn MongoDB"
    }
  ];

  constructor() {
  }

  get name() {
    return this.firstName + " " + this.lastName;
  }

  set name(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }

  get filteredNumbers() {
    return this.numbs.filter(numb => numb > 4);
  }

  get completedTasks() {
    return this.todos.filter(task => task.completed === true);
  }

  get uncompletedTasks() {
    return this.todos.filter(task => task.completed === false);
  }

  ngOnInit() {
  }

  public removeTask(_id: string) {
    const posit = this.todos.findIndex(i => i._id === _id);
    this.todos.splice(posit, 1);
  }

  public completeTask(task: ITask) {
    task.completed = true;
  }

  public addTask() {
    let task={
      _id: (this.todos.length+1).toString(),
    title: this.taskTitle,
    dueDate: this.taskDueDate,
    completed: false
    };
    this.todos.push(task);
  }



}
