// A brief intro to TS

/**
 * usually have to build (tsc index.ts)
 * then run the generated file (node index.js)
 *
 * With ts-node we combine the two (ts-node index.ts)
 */

import axios from 'axios';

const url = `https://jsonplaceholder.typicode.com/todos/1`;

// interfaces are used to define the shape of an object
// interfaces create a new Type
// interfaces can ignore properties
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const todo = response.data as Todo;
  const { id, title, completed } = todo;
  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  ID: ${id}
  Title: ${title}
  completed? ${completed}
  `);
};
