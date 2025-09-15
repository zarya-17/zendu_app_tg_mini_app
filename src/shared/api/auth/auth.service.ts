export class AuthService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static async signIn(_initData: string) {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const mockUser = {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      username: 'johndoe',
      photoUrl: 'https://via.placeholder.com/150',
    };

    return {
      data: {
        accessToken: 'fake-access-token',
        user: mockUser,
      },
    };
  }

  static async refreshToken() {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      data: {
        accessToken: 'fake-access-token-refreshed',
      },
    };
  }
}
