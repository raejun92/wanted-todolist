import { createBrowserRouter, redirect } from 'react-router';
import { authProvider } from './auth';
import todoCreateAction from './features/todo/create/TodoCreate.action';
import TodoCreate from './features/todo/create';
import todoDetailLoader from './features/todo/detail/TodoDetail.loader';
import TodoDetail from './features/todo/detail';
import { todoListLoader } from './features/todo/list/TodoList.loader';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Todo from './pages/Todo';
import apiClient from './shared/lib/axios';
import TodoDeleteAction from './features/todo/delete/TodoDelete.action';
import TodoUpdate from './features/todo/update';
import TodoUpdateAction from './features/todo/update/TodoUpdate.action';

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    children: [
      {
        index: true,
        loader: authLoader,
        Component: Signin,
        action: signinAction,
      },
      {
        path: 'signup',
        loader: authLoader,
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

function authLoader() {
  if (authProvider.isAuthenticated) {
    return redirect('/todo');
  }

  return null;
}

async function signinAction({ request }: { request: Request }) {
  const formData = await request.formData();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    // axios 인스턴스를 사용하여 API 호출
    const response = await apiClient.post('/users/login', {
      email,
      password,
    });

    const { token } = response.data;

    // 로그인 성공: 토큰 저장 및 리다이렉트
    authProvider.signin(token);

    return redirect('/todo');
  } catch {
    return { error: 'An unknown error occurred.' };
  }
}

async function signupAction({ request }: { request: Request }) {
  const formData = await request.formData();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    // axios 인스턴스를 사용하여 API 호출
    const response = await apiClient.post('/users/create', {
      email,
      password,
    });

    const { token } = response.data;

    // 로그인 성공: 토큰 저장 및 리다이렉트
    localStorage.setItem('authToken', token);
    return redirect('/todo');
  } catch {
    return { error: 'An unknown error occurred.' };
  }
}
