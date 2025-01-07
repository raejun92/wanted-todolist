import { TodoSchema } from '@/entities/todo/model';
import { Link } from 'react-router';

export function TodoListTitle() {
  return <h1 className="text-xl font-bold mb-4">Todo List</h1>;
}

export function TodoLinks({ todos }: { todos: TodoSchema[] }) {
  return (
    <ul className="space-y-4">
      {todos.map((todo) => (
        <li key={todo.id}>
          <Link
            to={`/todo/${todo.id}`}
            className="block bg-gradient-to-r from-blue-100 to-blue-50 p-3 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition transform duration-200"
          >
            <h3 className="text-lg font-semibold text-blue-600">
              {todo.title}
            </h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}
