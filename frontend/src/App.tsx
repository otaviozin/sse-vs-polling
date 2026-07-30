import React from 'react';
import { usePolling } from './hooks/usePolling';
import { useSSE } from './hooks/useSSE';
import { StatusCard } from './components/StatusCard'; // Com chaves
import { MetricsTable } from './components/MetricsTable'; // Com chaves

const App: React.FC = () => {
  const poll = usePolling('http://localhost:8080/polling', 2000);
  const sse = useSSE('http://localhost:8080/sse');

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px', fontFamily: 'system-ui' }}>
      <header>
        <h1>Polling vs Server-Sent Events</h1>
        <p>Simulação de Sistema de Pedidos em Tempo Real</p>
      </header>

      <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
        <StatusCard title='Polling (2s)' status={poll.status} count={poll.requests} color='#3498db' />
        <StatusCard title='SSE (Real-time)' status={sse.status} count={sse.events} color='#2ecc71' />
      </div>

      <MetricsTable pollCount={poll.requests} sseCount={sse.events} />

      <footer style={{ marginTop: '40px', fontSize: '0.9rem', color: '#666' }}>
        <p>
          <strong>Dica:</strong> Observe como o contador de Polling sobe sem parar, enquanto o do SSE só aumenta quando
          o status do pedido muda no Backend (Go).
        </p>
      </footer>
    </div>
  );
};

export default App;
