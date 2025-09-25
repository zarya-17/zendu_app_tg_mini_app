import { useAuth } from '@shared/hooks/useAuth';
import { GlobalLoader } from '@shared/ui/loaders';

type AppInitProps = {
  children: React.ReactNode;
};

export function AppInit({ children }: AppInitProps) {
  const { isLoading, isError, error } = useAuth();

  if (isLoading) {
    return <GlobalLoader />;
  }

  if (isError) {
    return <div>Ошибка инициализации: {error?.message}</div>;
  }

  return <>{children}</>;
}
