import { useEffect, useRef } from 'react';

const useInterval = (cb, delay) => {
  const savedCb = useRef();

  useEffect(() => {
    savedCb.current = cb;
  }, [cb]);

  useEffect(() => {
    const tick = () => savedCb.current();

    let id = setInterval(tick, delay);

    return () => clearInterval(id);
  }, [delay]);
};

export default useInterval;
