import { useState, useEffect } from 'react';

export const useSSE = (url: string) => {
  const [status, setStatus] = useState<string>('Conectando...');
  const [events, setEvents] = useState(0);

  useEffect(() => {
    const eventSource = new EventSource(url);

    eventSource.onmessage = (event) => {
      setStatus(event.data);
      setEvents((prev) => prev + 1);
    };

    eventSource.onerror = () => {
      eventSource.close();
    };

    return () => eventSource.close();
  }, [url]);

  return { status, events };
};