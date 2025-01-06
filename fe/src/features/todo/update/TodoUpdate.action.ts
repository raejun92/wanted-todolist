import apiClient from '@/shared/lib/axios';
import { redirect } from 'react-router';

export default async function TodoUpdateAction({
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

  await apiClient.put(`/todos/${id}`, {
    title,
    content,
    id,
    createdAt,
    updatedAt,
  });

  return redirect('/todo');
}
