import { Link } from 'react-router';

export function TodoCreateLink() {
  return (
    <div className="flex justify-end mb-4">
      <Link
        to="/todo/create"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        + Create New Todo
      </Link>
    </div>
  );
}
