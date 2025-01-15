import { useMutation } from '@tanstack/react-query';
import updateTodoByIdApi from './updateTodoById.api';

export const useUpdateTodoMutation = () => {
  return useMutation({
    mutationFn: ({
      id,
      title,
      content,
      createdAt,
    }: {
      id: string;
      title: string;
      content: string;
      createdAt: string;
    }) =>
      updateTodoByIdApi(
        id,
        title,
        content,
        createdAt,
        new Date().toISOString()
      ),
  });
};
