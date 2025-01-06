import apiClient from '@/shared/lib/axios';
import { redirect } from 'react-router';

export default async function todoCreateAction({
  request,
}: {
  request: Request;
}) {
  const formData = await request.formData();
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  await apiClient.post('/todos', { title, content });

  return redirect('/todo');
}
