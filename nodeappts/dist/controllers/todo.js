"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodo = exports.deleteTodo = exports.getTodo = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
let TODOS = [];
const createTodo = (request, response, next) => {
    const text = request.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    response.status(201).json({ message: 'Created Todo ', createdTodo: newTodo });
};
exports.createTodo = createTodo;
const getTodo = (request, response, next) => {
    response.json({ todos: TODOS });
};
exports.getTodo = getTodo;
const deleteTodo = (request, response, next) => {
    const todoId = request.params.id;
    const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
    TODOS.splice(todoIndex, 1);
    response.json({ message: 'Todo deleted successfully' });
};
exports.deleteTodo = deleteTodo;
const updateTodo = (request, response, next) => {
    const todoId = request.params.id;
    const updatedText = request.body.text;
    const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error('Could not find the todod.');
    }
    TODOS[todoIndex] = new todo_1.Todo(todoId, updatedText);
    response.json({
        message: 'Todo updated successfully',
        updatedTodo: TODOS[todoIndex],
    });
};
exports.updateTodo = updateTodo;
