export function getTelegramInitData(): string {
  const tg = window.Telegram?.WebApp;

  if (!tg?.initData) {
    throw new Error('No init data from Telegram');
  }

  return tg.initData;
}
