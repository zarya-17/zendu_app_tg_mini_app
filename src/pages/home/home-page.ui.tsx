import { useAuth } from '@shared/hooks/useAuth';
import { PageLayout } from '@shared/ui/layouts';

import './home-page.styles.scss';

export default function HomePage() {
  const { session } = useAuth();
  const initDataUnsafe = window.Telegram?.WebApp?.initDataUnsafe;
  return (
    <PageLayout>
      <h1>Home Page</h1>
      <div className="textObject">Session: {JSON.stringify(session)}</div>
      <div className="textObject">
        Telegram WebApp initData: {JSON.stringify(initDataUnsafe)}
      </div>
    </PageLayout>
  );
}
