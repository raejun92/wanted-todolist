import { authService } from '@/entities/auth/model';
import { redirect } from 'react-router';
import getTodoListApi from './getTodoList.api';
import { queryClient } from '@/shared/lib/query';

export async function todoListLoader() {
  if (!authService.isAuthenticated) {
    return redirect('/');
  }

  try {
    const data = await queryClient.ensureQueryData({
      queryKey: ['todos'],
      queryFn: getTodoListApi,
    });

    return data;
  } catch {
    return { error: 'Failed to load todos' };
  }
}
