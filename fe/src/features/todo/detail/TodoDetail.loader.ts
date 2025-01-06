import apiClient from '@/shared/lib/axios';

export default async function todoDetailLoader({
  params,
}: {
  params: { id?: string };
}) {
  const response = await apiClient.get(`/todos/${params.id}`);

  return response.data.data;
}
