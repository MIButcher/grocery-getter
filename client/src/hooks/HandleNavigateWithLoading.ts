import { useSetAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import { globalLoadingAtom } from '@utilities/atoms';

export const useNavigateWithLoading = () => {
  const setLoading = useSetAtom(globalLoadingAtom);
  const navigate = useNavigate();

  return async (path: string, state?: Record<string, any>) => {
    setLoading(true);
    navigate(path, state );
    // destination page should call setLoading(false)
  };
};