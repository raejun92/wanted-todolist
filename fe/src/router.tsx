import { createBrowserRouter } from 'react-router';
import signinAction from './features/auth/signin/action';
import signinLoader from './features/auth/signin/loader';
import signupAction from './features/auth/signup/action';
import signupLoader from './features/auth/signup/loader';
import TodoCreate from './features/todo/create';
import todoCreateAction from './features/todo/create/action';
import todoDeleteAction from './features/todo/delete/action';
import TodoDetail from './features/todo/detail';
import todoDetailLoader from './features/todo/detail/loader';
import { todoListLoader } from './features/todo/list/loader';
import TodoUpdate from './features/todo/update';
import todoUpdateAction from './features/todo/update/action';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Todo from './pages/Todo';

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    children: [
      {
        index: true,
        loader: signinLoader,
        Component: Signin,
        action: signinAction,
      },
      {
        path: 'signup',
        loader: signupLoader,
        Component: Signup,
        action: signupAction,
      },
    ],
  },
  {
    path: '/todo',
    loader: todoListLoader,
    Component: Todo,
    children: [
      {
        path: 'create',
        Component: TodoCreate,
        action: todoCreateAction,
      },
      {
        path: ':id',
        loader: todoDetailLoader,
        Component: TodoDetail,
        children: [
          {
            path: 'delete',
            action: todoDeleteAction,
          },
        ],
      },
      {
        path: 'update/:id',
        loader: todoDetailLoader,
        Component: TodoUpdate,
        action: todoUpdateAction,
      },
    ],
  },
]);

export default router;
