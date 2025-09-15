import { useAuth } from '@shared/hooks/useAuth';
import { PageLayout } from '@shared/ui/layouts';

import './home-page.styles.scss';

export default function HomePage() {
  const { session } = useAuth();
  const initData = window.Telegram?.WebApp.initDataUnsafe;
  return (
    <PageLayout>
      <h1>Home Page</h1>
      <div className="text-object">Session: {JSON.stringify(session)}</div>
      <div className="text-object">Telegram WebApp initData: {initData}</div>
    </PageLayout>
  );
}
