import { redirect } from 'react-router';
import createTodoApi from './createTodo.api';

export default async function todoCreateAction({
  request,
}: {
  request: Request;
}) {
  const formData = await request.formData();
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  try {
    await createTodoApi(title, content);
  } catch {
    return { error: 'create failed' };
  }

  return redirect('/todo');
}
