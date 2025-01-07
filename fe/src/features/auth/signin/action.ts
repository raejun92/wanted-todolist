import { authService } from '@/entities/auth/auth.model';
import { redirect } from 'react-router';
import signupUserApi from './signinUser.api';

export default async function signinAction({ request }: { request: Request }) {
  const formData = await request.formData();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    const token = await signupUserApi(email, password);

    authService.signin(token);

    return redirect('/todo');
  } catch {
    return { error: 'signin failed' };
  }
}
