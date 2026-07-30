import React from 'react';
import { usePolling } from './hooks/usePolling';
import { useSSE } from './hooks/useSSE';
import { StatusCard } from './components/StatusCard';
import { MetricsTable } from './components/MetricsTable';

const App: React.FC = () => {
  const poll = usePolling('http://localhost:8080/polling', 2000);
  const sse = useSSE('http://localhost:8080/sse');

  return (
    <main style={appContainerStyle}>
      <div style={contentWrapperStyle}>
        <header style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, margin: 0 }}>
            Real-time <span style={{ color: '#00d8ff' }}>Orders</span>
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.2rem', marginTop: '10px' }}>
            Polling vs Server-Sent Events (SSE) Benchmark
          </p>
        </header>

        <section style={gridStyle}>
          <StatusCard
            title='Short Polling'
            status={poll.status}
            count={poll.requests}
            color='#3b82f6'
            description='Requisições HTTP a cada 2 segundos'
          />
          <StatusCard
            title='Server-Sent Events'
            status={sse.status}
            count={sse.events}
            color='#10b981'
            description='Conexão persistente (Push do Servidor)'
          />
        </section>

        <section style={{ marginTop: '40px' }}>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '20px', color: '#cbd5e1' }}>Métricas em Tempo Real</h2>
          <MetricsTable pollCount={poll.requests} sseCount={sse.events} />
        </section>

        <footer style={footerStyle}>
          <p>
            Implementado com <strong>Go</strong> e <strong>React + TS</strong>
          </p>
          <div style={badgeStyle}>
            <span style={{ color: '#10b981', marginRight: '8px' }}>●</span>
            Backend Online
          </div>
        </footer>
      </div>
    </main>
  );
};

const appContainerStyle: React.CSSProperties = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  padding: '40px 20px',
};

const contentWrapperStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: '1000px',
};

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '24px',
};

const footerStyle: React.CSSProperties = {
  marginTop: '60px',
  textAlign: 'center',
  color: '#475569',
  borderTop: '1px solid #1e293b',
  paddingTop: '30px',
};

const badgeStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  padding: '6px 16px',
  borderRadius: '20px',
  backgroundColor: '#1e293b',
  fontSize: '0.8rem',
  color: '#cbd5e1',
  marginTop: '10px',
};

export default App;
