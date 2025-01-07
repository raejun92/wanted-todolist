import { authService } from '@/entities/auth/model';
import { Button } from '@/shared/components/ui/button';
import { useNavigate } from 'react-router';

export default function Signout() {
  const navigate = useNavigate();

  const handleSignout = () => {
    authService.signout();
    navigate('/');
  };

  return (
    <Button onClick={handleSignout} className="bg-blue-500 hover:bg-blue-700">
      Sign out
    </Button>
  );
}
