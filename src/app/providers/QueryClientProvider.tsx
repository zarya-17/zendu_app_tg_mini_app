import { QueryClientProvider as TanstackQueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '@shared/lib/react-query';

type QueryClientProviderProps = {
  children: React.ReactNode;
};

export function QueryClientProvider({ children }: QueryClientProviderProps) {
  return (
    <TanstackQueryClientProvider client={queryClient}>
      {children}
    </TanstackQueryClientProvider>
  );
}
