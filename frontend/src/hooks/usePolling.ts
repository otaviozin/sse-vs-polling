import { useState, useEffect } from 'react';

export const usePolling = (url: string, interval: number) => {
  const [status, setStatus] = useState<string>('Carregando...');
  const [requests, setRequests] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setStatus(data.status);
        setRequests((prev) => prev + 1);
      } catch (e) { console.error(e); }
    };

    const timer = setInterval(fetchData, interval);
    return () => clearInterval(timer);
  }, [url, interval]);

  return { status, requests };
};