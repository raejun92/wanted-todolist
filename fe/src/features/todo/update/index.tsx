import { TodoSchema } from '@/entities/todo/model';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { Textarea } from '@/shared/components/ui/textarea';
import { useQuery } from '@tanstack/react-query';
import { useLoaderData, useNavigate } from 'react-router';
import getTodoByIdApi from '../detail/getTodoById.api';
import { TodoUpdateCancelButton } from './ui';
import { FormEvent } from 'react';
import { useUpdateTodoMutation } from './query';
import { queryClient } from '@/shared/lib/query';

export default function TodoUpdate() {
  const navigate = useNavigate();
  const todo = useLoaderData() as TodoSchema;

  const { data: todoData } = useQuery({
    queryKey: ['todos', todo.id],
    queryFn: () => getTodoByIdApi(todo.id),
    initialData: todo,
    staleTime: Infinity,
  });

  const updateTodoMutation = useUpdateTodoMutation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    updateTodoMutation.mutate(
      {
        id: formData.get('id') as string,
        title: formData.get('title') as string,
        content: formData.get('content') as string,
        createdAt: formData.get('createdAt') as string,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ['todos', todoData.id],
          });
          navigate(`/todo/${todoData.id}`);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">Update Todo</h1>
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div>
            <Label htmlFor="title" className="text-sm font-medium">
              Title
            </Label>
            <Input
              id="title"
              type="text"
              name="title"
              defaultValue={todoData.title} // 기본값 설정
              required
            />
          </div>
          <div>
            <Label htmlFor="content" className="text-sm font-medium">
              Content
            </Label>
            <Textarea
              id="content"
              name="content"
              defaultValue={todoData.content} // 기본값 설정
              rows={5}
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white"
          >
            Save
          </Button>
        </div>

        <input type="hidden" name="id" value={todoData.id} />
        <input type="hidden" name="createdAt" value={todoData.createdAt} />
        <input
          type="hidden"
          name="updatedAt"
          value={new Date().toISOString()}
        />
      </form>

      <TodoUpdateCancelButton id={todoData.id} />
    </div>
  );
}
