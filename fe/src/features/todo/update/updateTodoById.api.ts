import apiClient from '@/shared/lib/axios';

export default async function updateTodoByIdApi(
  id: string,
  title: string,
  content: string,
  createdAt: string,
  updatedAt: string
) {
  await apiClient.put(`/todos/${id}`, {
    title,
    content,
    id,
    createdAt,
    updatedAt,
  });
}
