import apiClient from '@/shared/lib/axios';

export default async function createTodoApi(title: string, content: string) {
  await apiClient.post('/todos', { title, content });
}
