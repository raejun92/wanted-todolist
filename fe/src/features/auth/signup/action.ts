import { redirect } from 'react-router';
import signupUserApi from './signupUser.api';

export default async function signupAction({ request }: { request: Request }) {
  const formData = await request.formData();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    const token = await signupUserApi(email, password);

    localStorage.setItem('authToken', token);

    return redirect('/todo');
  } catch {
    return { error: 'signup failed' };
  }
}
