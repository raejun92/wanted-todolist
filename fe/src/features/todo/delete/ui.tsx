import { Button } from '@/shared/components/ui/button';
import { useDeleteTodoMutation } from './query';
import { FormEvent } from 'react';
import { useNavigate } from 'react-router';
import { queryClient } from '@/shared/lib/query';

export function TodoDeleteButton({ id }: { id: string }) {
  const navigate = useNavigate();
  const deleteTodoMutation = useDeleteTodoMutation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    deleteTodoMutation.mutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['todos'],
        });
        navigate('/todo');
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Button
        type="submit"
        className="w-full bg-red-500 hover:bg-red-600 text-white"
      >
        delete
      </Button>
    </form>
  );
}
