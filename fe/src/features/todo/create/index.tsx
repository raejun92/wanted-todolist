import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { Textarea } from '@/shared/components/ui/textarea';
import { Form } from 'react-router';

export default function TodoCreate() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">
        Create New Todo
      </h1>
      <Form method="post" className="space-y-6">
        <div>
          <Label htmlFor="title" className="text-sm font-medium">
            Title
          </Label>
          <Input
            id="title"
            type="text"
            name="title"
            placeholder="Enter the title"
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
            placeholder="Enter the content"
            rows={5}
            required
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white"
        >
          Create
        </Button>
      </Form>
    </div>
  );
}
