import { create, StateCreator } from 'zustand';
import { devtools, subscribeWithSelector } from 'zustand/middleware';

import { createSelectors } from '@shared/lib/zustand';

import { Session } from './session.types';

type State = {
  session: Session | null;
};

type Actions = {
  setSession: (session: Session) => void;
  refreshSessionToken: (accessToken: string) => void;
  resetSession: () => void;
};

const sessionSlice: StateCreator<
  State & Actions,
  [['zustand/subscribeWithSelector', never], ['zustand/devtools', never]],
  [],
  State & Actions
> = (set) => ({
  session: null,
  setSession: (session: Session) =>
    set({ session }, false, 'session/setSession'),
  refreshSessionToken: (accessToken: string) =>
    set(
      (state) => ({
        session: state.session ? { ...state.session, accessToken } : null,
      }),
      false,
      'session/refreshSessionToken'
    ),
  resetSession: () => set({ session: null }, false, 'session/resetSession'),
});

const withDevtools = devtools(sessionSlice, { name: 'Session Service' });
const withSubscribe = subscribeWithSelector(withDevtools);
const store = create(withSubscribe);
export const useSessionStore = createSelectors(store);
