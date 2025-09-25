export function setupTelegramMock() {
  if (!window.Telegram?.WebApp?.initData) {
    window.Telegram = {
      WebApp: {
        initData:
          'query_id=abc123&user=%7B%22id%22%3A42%2C%22first_name%22%3A%22John%22%2C%22last_name%22%3A%22Doe%22%7D',
        ready() {},
      },
    };
  }
}
