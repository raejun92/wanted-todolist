import apiClient from '@/shared/lib/axios';

export default async function getTodoListApi() {
  const response = await apiClient.get('/todos');

  return response.data.data;
}
