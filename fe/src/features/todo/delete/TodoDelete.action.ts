import apiClient from '@/shared/lib/axios';
import { redirect } from 'react-router';

export default async function TodoDeleteAction({
  params,
}: {
  params: { id?: string };
}) {
  await apiClient.delete(`/todos/${params.id}`);

  return redirect('/todo');
}
