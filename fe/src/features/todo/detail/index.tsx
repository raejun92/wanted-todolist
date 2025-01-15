import { TodoSchema } from '@/entities/todo/model';
import { Button } from '@/shared/components/ui/button';
import { Label } from '@/shared/components/ui/label';
import { useLoaderData } from 'react-router';
import TodoDeleteButton from '../delete/ui';
import { useQuery } from '@tanstack/react-query';
import getTodoByIdApi from './getTodoById.api';

export default function TodoDetail() {
  const todo = useLoaderData() as TodoSchema;

  const { data: todoData } = useQuery({
    queryKey: ['todo', todo.id],
    queryFn: () => getTodoByIdApi(todo.id),
    initialData: todo,
    staleTime: Infinity,
  });

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">Todo Detail</h1>

      <div className="space-y-6">
        <div>
          <Label className="text-sm font-medium">Title</Label>
          <p>{todoData.title}</p>
        </div>

        <div>
          <Label className="text-sm font-medium">Content</Label>
          <p>{todoData.content}</p>
        </div>

        <form method="get" action={`/todo/update/${todoData.id}`}>
          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white"
          >
            update
          </Button>
        </form>

        <TodoDeleteButton id={todoData.id} />
      </div>
    </div>
  );
}
