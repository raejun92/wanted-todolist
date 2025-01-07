import { authService } from '@/entities/auth/model';
import { redirect } from 'react-router';
import getTodoListApi from './getTodoList.api';

export async function todoListLoader() {
  if (!authService.isAuthenticated) {
    return redirect('/');
  }

  try {
    const data = await getTodoListApi();

    return data;
  } catch {
    return { error: 'Failed to load todos' };
  }
}
