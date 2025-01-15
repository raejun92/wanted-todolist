import { useMutation } from '@tanstack/react-query';
import deleteTodoApi from './deleteTodo.api';

export const useDeleteTodoMutation = () => {
  return useMutation({
    mutationFn: (id: string) => deleteTodoApi(id),
  });
};
