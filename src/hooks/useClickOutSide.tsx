import { useEffect, useRef } from "react";

const useClickOutSide = (handler: any) => {
  const domNode = useRef<any>(null);

  useEffect(() => {
    let handlerClick = (e: MouseEvent) => {
      if (!domNode?.current?.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", handlerClick);
    return () => {
      document.removeEventListener("mousedown", handlerClick);
    };
  }, [handler]);
  return domNode;
};

export default useClickOutSide;
