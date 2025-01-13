import { useMutation } from '@tanstack/react-query';
import signinUserApi from './signinUser.api';
export const useSigninMutation = () => {
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      signinUserApi(email, password),
  });
};
