import { useQuery, useQueryClient } from '@tanstack/react-query';

import { AuthService } from '@shared/api/auth';
import { useSessionStore } from '@shared/lib/session';
import { getTelegramInitData } from '@shared/lib/telegram';

export function useAuth() {
  const queryClient = useQueryClient();
  const session = useSessionStore.use.session();
  const setSession = useSessionStore.use.setSession();
  const resetSession = useSessionStore.use.resetSession();

  const sessionQuery = useQuery({
    queryKey: ['auth'],
    queryFn: async () => {
      const initData = getTelegramInitData();
      const { data } = await AuthService.signIn(initData);

      setSession(data);

      return data;
    },
    staleTime: 1000 * 60 * 5, // кэш 5 минут
    enabled: !session, // Выполняем запрос только если сессии нет
  });

  return {
    session: session,
    isAuthenticated: !!session,
    isLoading: sessionQuery.isLoading,
    isError: sessionQuery.isError,
    error: sessionQuery.error,
    refetchSession: sessionQuery.refetch,
    signOut: () => {
      resetSession();
      queryClient.removeQueries({ queryKey: ['auth'] });
    },
  };
}
