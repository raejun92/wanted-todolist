import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { useState } from 'react';
import { Form, useActionData, useNavigate } from 'react-router';

export default function Signin() {
  const navigate = useNavigate();
  const actionData = useActionData() as { error?: string };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  // Email validation
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email));
  };

  // Password validation
  const validatePassword = (password: string) => {
    setIsValidPassword(password.length >= 8);
  };

  const moveToSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <Form method="post" className="mt-6 space-y-4">
        <div>
          <Label htmlFor="email" className="block text-sm font-medium">
            Email:
          </Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
            required
            className={!isValidEmail && email ? 'border-red-500' : ''}
          />
          {!isValidEmail && email && (
            <p className="text-red-500 text-sm mt-1">
              Please enter a valid email.
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="password" className="block text-sm font-medium">
            Password:
          </Label>
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validatePassword(e.target.value);
            }}
            required
            className={!isValidPassword && password ? 'border-red-500' : ''}
          />
          {!isValidPassword && password && (
            <p className="text-red-500 text-sm mt-1">
              Password must be at least 8 characters.
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={!isValidEmail || !isValidPassword}
          className="w-full"
        >
          Login
        </Button>

        <Button className="w-full" onClick={moveToSignup}>
          Sign up
        </Button>
      </Form>

      {actionData?.error && (
        <p className="text-red-500 text-center mt-4">{actionData.error}</p>
      )}
    </div>
  );
}
