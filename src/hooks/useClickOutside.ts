import { useEffect, useRef } from "react";

const useClickOutside = <T extends HTMLDivElement>(handler: () => void) => {
  const ref = useRef<T | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      handler();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handler]);

  return ref;
};

export default useClickOutside;
