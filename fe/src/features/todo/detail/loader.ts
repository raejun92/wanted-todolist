import getTodoByIdApi from './getTodoById.api';

export default async function todoDetailLoader({
  params,
}: {
  params: { id?: string };
}) {
  try {
    const data = await getTodoByIdApi(params.id);

    return data;
  } catch {
    return { error: 'load failed' };
  }
}
