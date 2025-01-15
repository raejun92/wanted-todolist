import { useMutation } from '@tanstack/react-query';
import createTodoApi from './createTodo.api';

export const useCreateTodoMutation = () => {
  return useMutation({
    mutationFn: ({ title, content }: { title: string; content: string }) =>
      createTodoApi(title, content),
  });
};
