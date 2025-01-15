import { useMutation } from '@tanstack/react-query';
import signupUserApi from './signupUser.api';

export const useSignupMutation = () => {
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      signupUserApi(email, password),
  });
};
