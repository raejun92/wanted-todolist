import TodoList from '@/features/todo/list';
import Header from '@/widget/header';
import { Outlet } from 'react-router';

export default function TodoPage() {
  return (
    <>
      <Header />

      <div className="flex h-[calc(100vh-68px)]">
        <TodoList />

        <div className="w-2/3 p-4">
          <Outlet />
        </div>
      </div>
    </>
  );
}
