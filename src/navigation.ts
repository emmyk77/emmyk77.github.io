/** File previews can show the full portfolio even on browsers that restrict file URL history. */
export function updateAddress(url: URL, push = false) {
  try {
    if (push) window.history.pushState({}, "", url);
    else window.history.replaceState({}, "", url);
  } catch (error) {
    if (location.protocol !== "file:") throw error;
  }
}
