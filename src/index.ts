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

interface ToDo {
    id: number;
    name: string;
    completed?: Completed;
}

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
