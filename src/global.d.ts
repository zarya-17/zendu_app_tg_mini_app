interface WebApp {
  initDataUnsafe?: string;
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

declare module '*.svg' {
  import * as React from 'react';
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module '*.gif';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

export {};
