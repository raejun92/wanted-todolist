import Signout from '@/features/auth/signout';
import { Link } from 'react-router';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="text-xl font-bold">Todo App</h1>
        </Link>
        <Signout />
      </div>
    </header>
  );
}
