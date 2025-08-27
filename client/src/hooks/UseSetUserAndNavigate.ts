import { useAtomCallback } from 'jotai/utils';
import { userAtom } from '@utilities/atoms';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { User } from '@models/User';

export const useSetUserAndNavigate = () => {
  const navigate = useNavigate();

  const callback = useAtomCallback((get, set) => {
    return (user: User) => {
      set(userAtom, user);
      navigate('/user');
    };
  });

  return useCallback(
    async (user: User) => {
      await callback()(user);
    },
    [callback]
  );
};