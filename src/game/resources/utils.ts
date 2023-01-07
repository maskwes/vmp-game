export function getFileUrl(path: string) {
  return new URL(path, import.meta.url).href;
}
