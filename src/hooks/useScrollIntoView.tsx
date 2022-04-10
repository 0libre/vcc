import { useCallback } from "react";

const useScrollIntoView = () => {
  const scrollTo = useCallback((element: string) => {
    const el = document.querySelector(element);
    if (el !== null) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return { scrollTo };
};

export default useScrollIntoView;
