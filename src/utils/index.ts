export function debounce<T extends (...args: never[]) => void>(
  fn: T,
  delay: number = 300
): (...args: Parameters<T>) => void {
  let _timeout: ReturnType<typeof setTimeout>;

  return function (this: unknown, ...args: Parameters<T>) {
    clearTimeout(_timeout);

    _timeout = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const colorMap = new Map<string, string>();

export function getColorForKey(key: string): string {
  if (colorMap.has(key)) {
    return colorMap.get(key)!;
  }

  const hash = [...key].reduce((acc, char) => acc + char.charCodeAt(0), 0);

  const r = (hash * 123) % 256;
  const g = (hash * 321) % 256;
  const b = (hash * 213) % 256;

  const hex = `#${[r, g, b]
    .map((c) => c.toString(16).padStart(2, '0'))
    .join('')}`;

  colorMap.set(key, hex);
  return hex;
}
