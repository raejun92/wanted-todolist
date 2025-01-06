import { authProvider } from '@/auth';
import apiClient from '@/shared/lib/axios';
import { redirect } from 'react-router';

export async function todoListLoader() {
  if (!authProvider.isAuthenticated) {
    return redirect('/');
  }

  const response = await apiClient.get('/todos');

  return response.data.data;
}
