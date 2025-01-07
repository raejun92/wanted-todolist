import { authService } from '@/entities/auth/auth.model';
import apiClient from '@/shared/lib/axios';
import { redirect } from 'react-router';

export async function todoListLoader() {
  if (!authService.isAuthenticated) {
    return redirect('/');
  }

  const response = await apiClient.get('/todos');

  return response.data.data;
}
