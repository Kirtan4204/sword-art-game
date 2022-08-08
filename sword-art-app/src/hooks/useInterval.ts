import { useRef, useEffect } from "react";

export const useInterval = (
    callback: () => void,
    timeInterval: number | null
) => {
    const savedCallback = useRef(callback);
    useEffect(() => {
      if (!timeInterval || timeInterval === 0){
        return;
      }

      const id = setInterval(() => savedCallback.current(), timeInterval);
    
      return () => clearInterval(id);
      }, [timeInterval]);
    }
    
