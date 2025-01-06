import { authProvider } from '@/auth';
import { Button } from '@/shared/components/ui/button';
import { useNavigate } from 'react-router';

export default function Signout() {
  const navigate = useNavigate();

  const handleSignout = () => {
    authProvider.signout(); // 토큰 삭제 및 인증 상태 초기화
    navigate('/'); // 로그인 페이지로 리다이렉트
  };

  return (
    <Button onClick={handleSignout} className="bg-blue-500 hover:bg-blue-700">
      Sign out
    </Button>
  );
}
