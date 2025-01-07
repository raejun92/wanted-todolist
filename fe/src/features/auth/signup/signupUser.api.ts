import apiClient from '@/shared/lib/axios';

export default async function signupUserApi(email: string, password: string) {
  const response = await apiClient.post('/users/create', {
    email,
    password,
  });

  return response.data.token;
}
