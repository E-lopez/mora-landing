export const useScrollToTop = () => {

  if (globalThis.window && globalThis.window !== undefined) {
      window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

export default useScrollToTop;