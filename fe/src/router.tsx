import { createBrowserRouter, redirect } from "react-router";
import Signin from "./pages/Signin";
import Signup from './pages/Signup';
import { authProvider } from './auth';
import Todo from './pages/Todo';
import apiClient from './shared/lib/axios';

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    children: [
      {
        index: true,
        loader: authLoader,
        action: signinAction,
        Component: Signin
      },
      {
        path: 'signup',
        loader: authLoader,
        action: signupAction,
        Component: Signup
      },
      {
        path: 'todo',
        loader: protectedLoader,
        Component: Todo
      }
    ]
  },
]);

export default router;

function authLoader() {
  if (authProvider.isAuthenticated) {
    return redirect('/todo')
  }

  return null;
}

function protectedLoader() {
  if (!authProvider.isAuthenticated) {
    return redirect('/');
  }

  return null;
}

export async function signinAction({ request }: { request: Request }) {
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

export async function signupAction({request}: {request: Request}) {
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