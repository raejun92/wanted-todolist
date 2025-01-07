import { redirect } from 'react-router';
import deleteTodoApi from './deleteTodo.api';

export default async function todoDeleteAction({
  params,
}: {
  params: { id?: string };
}) {
  try {
    await deleteTodoApi(params.id);
  } catch {
    return { error: 'delete failed' };
  }

  return redirect('/todo');
}
