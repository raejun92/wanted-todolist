import apiClient from '@/shared/lib/axios';

export default async function getTodoByIdApi(id: string | undefined) {
  const response = await apiClient.get(`/todos/${id}`);

  return response.data.data;
}
