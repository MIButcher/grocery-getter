import { atom } from 'jotai';
import { User } from '../generated/models/User';

export const userAtom = atom<User | null>(null);
export const editModeAtom = atom<boolean>(false);
export const sharerIdAtom = atom<number | null>(null);
export const displayModeAtom = atom<number>(0); // 0 = default, 1 = large font, 2 = compact