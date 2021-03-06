function getScrollRemainder(scrollContainer) {
  const scrollHeight = scrollContainer.scrollHeight;
  const height = scrollContainer.clientHeight;
  return scrollHeight - height;
}

export function getScrollDistance(scrollContainer) {
  return Math.abs(
    scrollContainer.scrollTop - getScrollRemainder(scrollContainer)
  );
}

export function scrollToBottom(scrollContainer) {
  scrollContainer.scrollTop = getScrollRemainder(scrollContainer);
}

export const clearUrlQueries = () => {
  if (isServer) return;
  window.history.replaceState(
    {},
    window.document.title,
    `${window.location.protocol}//${window.location.host}${window.location.pathname}`
  );
};

export const isClient = typeof window !== "undefined";
export const isServer = !isClient;

export function ifClient(func) {
  if (isClient) func();
}

export function ifServer(func) {
  if (isServer) func();
}
