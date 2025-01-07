import { TodoSchema } from '@/entities/todo/model';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { Textarea } from '@/shared/components/ui/textarea';
import { Form, useLoaderData } from 'react-router';

export default function TodoUpdate() {
  const todo = useLoaderData() as TodoSchema;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">Update Todo</h1>
      <Form method="post">
        <div className="space-y-6">
          <div>
            <Label htmlFor="title" className="text-sm font-medium">
              Title
            </Label>
            <Input
              id="title"
              type="text"
              name="title"
              defaultValue={todo.title} // 기본값 설정
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
              defaultValue={todo.content} // 기본값 설정
              rows={5}
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white"
          >
            Save Changes
          </Button>
        </div>

        <input type="hidden" name="id" value={todo.id} />
        <input type="hidden" name="createdAt" value={todo.createdAt} />
        <input
          type="hidden"
          name="updatedAt"
          value={new Date().toISOString()}
        />
      </Form>
      <Form method="get" action={`/todo/${todo.id}`}>
        <Button
          type="submit"
          className="w-full bg-zinc-500 hover:bg-zinc-600 text-white mt-6"
        >
          cancel
        </Button>
      </Form>
    </div>
  );
}
