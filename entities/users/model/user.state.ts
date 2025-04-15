import { atom } from 'jotai';
import axios, { AxiosError } from 'axios';
import { API } from '../api/api';
import { IUser } from './user.model';

//описываем начальное состояние
export const userAtom = atom<UserState>({
  users: [],
  isLoading: false,
  error: null,
});

export const loadUserAtom = atom(
  async (get) => {
    return get(userAtom);
  },
  async (get, set) => {
    try {
      set(userAtom, {
        isLoading: true,
        users: [],
        error: null,
      });

      const { data } = await axios.get<IUser[]>(API.users);
      set(userAtom, {
        isLoading: false,
        users: data,
        error: null,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        set(userAtom, {
          isLoading: false,
          users: [],
          error: error.message,
        });
      }
    }
  }
);

export interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string | null;
}
