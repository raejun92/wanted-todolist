import apiClient from '@/shared/lib/axios';

export default async function signinUserApi(email: string, password: string) {
  const response = await apiClient.post('/users/login', {
    email,
    password,
  });

  return response.data.token;
}
