import { createBrowserRouter } from 'react-router';
import signinAction from './features/auth/signin/action';
import signinLoader from './features/auth/signin/loader';
import signupAction from './features/auth/signup/action';
import signupLoader from './features/auth/signup/loader';
import TodoCreate from './features/todo/create';
import todoCreateAction from './features/todo/create/TodoCreate.action';
import TodoDeleteAction from './features/todo/delete/TodoDelete.action';
import TodoDetail from './features/todo/detail';
import todoDetailLoader from './features/todo/detail/TodoDetail.loader';
import { todoListLoader } from './features/todo/list/TodoList.loader';
import TodoUpdate from './features/todo/update';
import TodoUpdateAction from './features/todo/update/TodoUpdate.action';
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
            action: TodoDeleteAction,
          },
        ],
      },
      {
        path: 'update/:id',
        loader: todoDetailLoader,
        Component: TodoUpdate,
        action: TodoUpdateAction,
      },
    ],
  },
]);

export default router;
