import Signout from '@/features/auth/signout';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="max-w-3xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Todo App</h1>
        <Signout />
      </div>
    </header>
  );
}