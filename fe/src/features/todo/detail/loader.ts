import { queryClient } from '@/shared/lib/query';
import getTodoByIdApi from './getTodoById.api';

export default async function todoDetailLoader({
  params,
}: {
  params: { id?: string };
}) {
  try {
    const data = await queryClient.ensureQueryData({
      queryKey: ['todos', params.id],
      queryFn: () => getTodoByIdApi(params.id),
    });

    return data;
  } catch {
    return { error: 'load failed' };
  }
}
