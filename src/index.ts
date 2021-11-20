const x: number = 0;

var container = document.getElementById('container');

function countdown(initial, final = 0, interval = 1) {
    var current = initial;
    while (current > final) {
        container.innerHTML = current;
        current -= interval;
    }
}

enum Completed {
    True = 1,
    False = 0
}

function FnToDoService() {
    this.todos = [];
}

FnToDoService.prototype.getAll = function () {
    return this.todos;
}

interface ToDo {
    id: number;
    name: string;
    completed?: Completed;
}

class ToDoService   {

    private static test: number = 0;
    private _state: Completed;
    // todos: ToDo[] = [];

    // constructor(todos: ToDo[]) {
    //     this.todos = todos;
    // }

    constructor(private todos: ToDo[] = []) {
        ToDoService.test++;
    }

    public getAll() {
        return this.todos;
    }

    public static getTest(): number {
        return ToDoService.test;
    }

    public set state(newState: Completed) {
        this._state = newState;
    }

    public get state() : Completed {
        return this._state;
    }

}

var todoitem = {

    name: '123',
    get state(): string {
        return this._state;
    },
    set state(newState: string) {
        this._state = newState
    },
}



//ToDoService.test++;

interface IToDoService {
    getById(id: number): ToDo;
    getAll(): ToDo[];
    delete(id: number): void;
    add(todo: ToDo): void;
}

const todo: ToDo = {
    id: 1,
    name: '',
    completed: Completed.True,
};

var displayName = `Todo #${todo.id}`;

interface jQueryElement {
    data(name: string): any;
    data(name: string, data: any): jQueryElement;
}

interface jQueryElement {
    todo(): ToDo;
    todo(todo: ToDo): jQueryElement;
}

interface jQuery {
    (selector: string| any ): jQueryElement;
    version: string,
    fn: any;
}

var $: jQuery = <jQuery>function (selector) {

}

$.fn.todo = function (todo?: ToDo): ToDo|void {
 if (todo) {
     $(this).data('todo', todo);
 } else {
     return $(this).data('todo')
 }
}

$.version = 'ddd';

const element: jQueryElement = $('123');


todo.completed = Completed.False;

const anon: { name: string } = {
 name: '222',
};
