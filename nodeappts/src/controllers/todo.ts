import { RequestHandler } from 'express';
import { Todo } from '../models/todo';

let TODOS: Todo[] = [];

export const createTodo: RequestHandler = (request, response, next) => {
  const text = (request.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);
  response.status(201).json({ message: 'Created Todo ', createdTodo: newTodo });
};

export const getTodo: RequestHandler = (request, response, next) => {
  response.json({ todos: TODOS });
};

export const deleteTodo: RequestHandler<{ id: string }> = (
  request,
  response,
  next
) => {
  const todoId = request.params.id;
  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
  TODOS.splice(todoIndex, 1);

  response.json({ message: 'Todo deleted successfully' });
};

export const updateTodo: RequestHandler<{ id: string }> = (
  request,
  response,
  next
) => {
  const todoId = request.params.id;
  const updatedText = (request.body as { text: string }).text;
  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
  if (todoIndex < 0) {
    throw new Error('Could not find the todod.');
  }
  TODOS[todoIndex] = new Todo(todoId, updatedText);

  response.json({
    message: 'Todo updated successfully',
    updatedTodo: TODOS[todoIndex],
  });
};
