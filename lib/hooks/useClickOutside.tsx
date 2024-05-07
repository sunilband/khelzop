import { useEffect, RefObject } from "react";
import { useSidebar } from "@/context/sidebarOpenContext";

function useClickOutside(ref: RefObject<HTMLElement>, callback: () => void) {
  const { sidebarOpen, toggleSidebar } = useSidebar();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
        if (sidebarOpen) {
          toggleSidebar();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback, sidebarOpen, toggleSidebar]);
}

export default useClickOutside;
