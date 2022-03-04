import { useEffect, RefObject } from "react";

export default function useOnClickOutside(
  ref: RefObject<HTMLElement>,
  handler: (e: MouseEvent) => void
) {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && ref.current.contains(e.target as HTMLElement)) {
      return;
    }
    handler(e);
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
}
