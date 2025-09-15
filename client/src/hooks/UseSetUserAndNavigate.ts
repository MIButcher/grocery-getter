import { useAtomCallback } from 'jotai/utils';
import { globalLoadingAtom, userAtom } from '@utilities/atoms';
import { useCallback } from 'react';
import { User } from '@models/User';
import { useNavigateWithLoading } from '@hooks/HandleNavigateWithLoading';

export const useSetUserAndNavigate = () => {
	const navigateWithLoading = useNavigateWithLoading();

  const callback = useAtomCallback((get, set) => {
    return (user: User) => {
      set(userAtom, user);
      navigateWithLoading('/user');
      set(globalLoadingAtom, false);
    };
  });

  return useCallback(
    async (user: User) => {
      await callback()(user);
    },
    [callback]
  );
};