interface AuthProvider {
  isAuthenticated: boolean;
  signin(token: string): void;
  signout(): void;
}

export const authProvider: AuthProvider = {
  get isAuthenticated() {
    return !!localStorage.getItem("authToken");
  },
  async signin(token: string) {
    localStorage.setItem("authToken", token);
  },
  async signout() {
    localStorage.removeItem("authToken");
  },
};
