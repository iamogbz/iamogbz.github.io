/**
 * @param {{ handler?: (oldValue: URL, newValue: URL) => unknown, timeoutMs?: number }} param0
 */
export function onLocationChange({ handler, timeoutMs = 300 } = {}) {
  const ref = { url: new URL(window.location.href) };
  const intervalId = setInterval(() => {
    if (ref.url.href === window.location.href) return;
    const oldUrl = ref.url;
    ref.url = new URL(window.location.href);
    handler?.(oldUrl, ref.url);
  }, timeoutMs);

  const teardown = () => {
    clearInterval(intervalId);
  };

  return { teardown };
}
