import { useAtomValue } from 'jotai';
import { userAtom } from '@utilities/atoms';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: JSX.Element;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const user = useAtomValue(userAtom);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};