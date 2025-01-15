import { Button } from '@/shared/components/ui/button';

export function TodoUpdateButton({ id }: { id: string }) {
  return (
    <form method="get" action={`/todo/update/${id}`}>
      <Button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white"
      >
        Edit
      </Button>
    </form>
  );
}

export function TodoUpdateCancelButton({ id }: { id: string }) {
  return (
    <form method="get" action={`/todo/${id}`}>
      <Button
        type="submit"
        className="w-full bg-zinc-500 hover:bg-zinc-600 text-white mt-6"
      >
        Cancel
      </Button>
    </form>
  );
}
