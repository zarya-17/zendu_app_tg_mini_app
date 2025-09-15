interface WebApp {
  initDataUnsafe: string;
  initData: string;
  ready(): void;
}

interface Telegram {
  WebApp: WebApp;
}

declare global {
  interface Window {
    Telegram: Telegram;
  }
}

export {};
