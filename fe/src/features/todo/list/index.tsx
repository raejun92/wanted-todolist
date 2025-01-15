import { TodoSchema } from '@/entities/todo/model';
import { useLoaderData } from 'react-router';
import { TodoCreateLink } from '../create/ui';
import { TodoLinks, TodoListTitle } from './ui';
import { useQuery } from '@tanstack/react-query';
import getTodoListApi from './getTodoList.api';

export default function TodoList() {
  const todos = useLoaderData() as TodoSchema[];

  const { data: todoData } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodoListApi,
    initialData: todos,
    staleTime: Infinity,
  });

  return (
    <div className="w-1/3 border-r p-4 min-w-56">
      <div className="flex justify-between items-center mb-4">
        <TodoListTitle />
        <TodoCreateLink />
      </div>
      <TodoLinks todos={todoData} />
    </div>
  );
}
