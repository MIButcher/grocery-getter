import { useAtomValue } from 'jotai';
import { userAtom } from '@utilities/atoms';
import { Navigate } from 'react-router-dom';

interface AdminRouteProps {
  children: JSX.Element;
}

export const AdminRoute = ({ children }: AdminRouteProps) => {
    const user = useAtomValue(userAtom);
    
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (!user.isAdmin) {
        return <Navigate to="/unauthorized" replace />;
    }

    return children;
};