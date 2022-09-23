export function IsKeyInObjectNotNull(data: any, key: string) {
  if (key in data) {
    const value = data[key];
    return value !== undefined && value !== null;
  }
  return false;
}
