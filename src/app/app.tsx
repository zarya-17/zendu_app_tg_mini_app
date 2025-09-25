import { withErrorBoundary } from 'react-error-boundary';

import { AppInit } from './init';
import { BrowserRouter, QueryClientProvider } from './providers';

const App = withErrorBoundary(
  () => (
    <QueryClientProvider>
      <AppInit>
        <BrowserRouter />
      </AppInit>
    </QueryClientProvider>
  ),
  {
    fallback: <div>Error</div>,
  }
);

export default App;
