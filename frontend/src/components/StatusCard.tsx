import React from 'react';

interface Props {
  title: string;
  status: string;
  count: number;
  color: string;
}

export const StatusCard: React.FC<Props> = ({ title, status, count, color }) => (
  <div
    style={{
      border: `2px solid ${color}`,
      padding: '20px',
      borderRadius: '12px',
      flex: 1,
      backgroundColor: '#fff',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    }}
  >
    <h2 style={{ color: color, marginTop: 0 }}>{title}</h2>
    <p style={{ fontSize: '1.2rem' }}>
      Status Atual: <strong>{status}</strong>
    </p>
    <p style={{ color: '#666' }}>
      Interações de Rede: <strong>{count}</strong>
    </p>
  </div>
);
