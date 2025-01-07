import { authService } from '@/entities/auth/model';
import { redirect } from 'react-router';

export default function signupLoader() {
  if (authService.isAuthenticated) {
    return redirect('/todo');
  }

  return null;
}
