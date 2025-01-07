import { TodoSchema } from '@/entities/todo/model';
import { useLoaderData } from 'react-router';
import { TodoCreateLink } from '../create';
import { TodoLinks, TodoListTitle } from './TodoList.ui';

export default function TodoList() {
  const todos = useLoaderData() as TodoSchema[];

  return (
    <div className="w-1/3 border-r p-4 min-w-56">
      <div className="flex justify-between items-center mb-4">
        <TodoListTitle />
        <TodoCreateLink />
      </div>
      <TodoLinks todos={todos} />
    </div>
  );
}
