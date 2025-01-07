interface AuthSchema {
  isAuthenticated: boolean;
  signin(token: string): void;
  signout(): void;
}

export const authService: AuthSchema = {
  get isAuthenticated() {
    return !!localStorage.getItem('authToken');
  },
  async signin(token: string) {
    localStorage.setItem('authToken', token);
  },
  async signout() {
    localStorage.removeItem('authToken');
  },
};
