import { EnumSession } from './model/EnumSession';

class SessionManager {
  set(key: EnumSession, value: any): void {
    localStorage.setItem(key, value);
  }

  get(key: string): string | null {
    return localStorage.getItem(key);
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
  
export default new SessionManager();