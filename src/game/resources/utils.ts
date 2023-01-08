export function getFileUrl(path: string) {
  return new URL(path, import.meta.url).href;
}

export function debounce<Params extends any[]>(
  callback: (...args: Params) => any,
  timeout: number
): (...args: Params) => void {
  let timer: NodeJS.Timeout;
  return (...args: Params) => {
    clearTimeout(timer);
    console.log(timeout);
    timer = setTimeout(() => {
      callback(...args);
    }, timeout);
  };
}
