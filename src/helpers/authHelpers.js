export function useIsAuthenticated() {
  const token = localStorage.getItem('token');
  return !!token;  // returns true if token exists, otherwise false
}
