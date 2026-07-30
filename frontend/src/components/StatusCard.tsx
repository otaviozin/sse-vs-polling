import React from 'react';

interface Props {
  title: string;
  status: string;
  count: number;
  color: string;
  description: string;
}

export const StatusCard: React.FC<Props> = ({ title, status, count, color, description }) => (
  <div
    style={{
      backgroundColor: '#1e293b',
      borderTop: `4px solid ${color}`,
      padding: '24px',
      borderRadius: '12px',
      flex: 1,
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
      transition: 'transform 0.2s',
    }}
  >
    <h3 style={{ color: color, marginTop: 0, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
      {title}
    </h3>
    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '15px 0' }}>{status}</p>
    <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '15px' }}>{description}</div>
    <div
      style={{
        backgroundColor: 'rgba(255,255,255,0.05)',
        padding: '12px',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Network Hits:</span>
      <span style={{ fontWeight: 'mono', color: '#fff', fontSize: '1.1rem' }}>{count}</span>
    </div>
  </div>
);
