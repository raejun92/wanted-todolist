import { authService } from '@/entities/auth/model';
import { redirect } from 'react-router';

export default function signinLoader() {
  if (authService.isAuthenticated) {
    return redirect('/todo');
  }

  return null;
}
