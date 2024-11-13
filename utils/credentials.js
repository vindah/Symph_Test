export function getCredentials() {
    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;
  
    if (!username || !password) {
      throw new Error('Environment variables USERNAME or PASSWORD are not set');
    }
  
    return { username, password };
}