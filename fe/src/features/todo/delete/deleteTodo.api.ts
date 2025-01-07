import apiClient from '@/shared/lib/axios';

export default async function deleteTodoApi(id: string | undefined) {
  await apiClient.delete(`/todos/${id}`);
}
