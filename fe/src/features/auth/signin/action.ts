import { authService } from '@/entities/auth/model';
import { redirect } from 'react-router';
import signinUserApi from './signinUser.api';

export default async function signinAction({ request }: { request: Request }) {
  const formData = await request.formData();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    const token = await signinUserApi(email, password);

    authService.signin(token);

    return redirect('/todo');
  } catch {
    return { error: 'signin failed' };
  }
}
