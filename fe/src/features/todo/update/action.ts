import { redirect } from 'react-router';
import updateTodoByIdApi from './updateTodoById.api';

export default async function todoUpdateAction({
  request,
}: {
  request: Request;
}) {
  const formData = await request.formData();
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const id = formData.get('id') as string;
  const createdAt = formData.get('createdAt') as string;
  const updatedAt = formData.get('updatedAt') as string;

  try {
    await updateTodoByIdApi(id, title, content, createdAt, updatedAt);
  } catch {
    return { error: 'Failed to load todos' };
  }

  return redirect('/todo');
}
