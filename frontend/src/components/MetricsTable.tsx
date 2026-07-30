import React from 'react';

interface Props {
  pollCount: number;
  sseCount: number;
}

export const MetricsTable: React.FC<Props> = ({ pollCount, sseCount }) => {
  const efficiency = ((sseCount / (pollCount || 1)) * 100).toFixed(1);

  return (
    <div
      style={{
        backgroundColor: '#1e293b',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.2)',
      }}
    >
      <table style={{ width: '100%', borderCollapse: 'collapse', color: '#e2e8f0' }}>
        <thead>
          <tr style={{ backgroundColor: '#334155' }}>
            <th style={thStyle}>Métrica Comparativa</th>
            <th style={thStyle}>Short Polling</th>
            <th style={thStyle}>Server-Sent Events</th>
          </tr>
        </thead>
        <tbody>
          <tr style={rowStyle}>
            <td style={tdStyle}>Conexões Estabelecidas</td>
            <td style={tdStyle}>{pollCount} requests</td>
            <td style={tdStyle}>1 persistente</td>
          </tr>
          <tr style={rowStyle}>
            <td style={tdStyle}>Transferência de Status</td>
            <td style={tdStyle}>Sempre (mesmo sem mudança)</td>
            <td style={tdStyle}>Apenas na mudança (Push)</td>
          </tr>
          <tr style={{ ...rowStyle, borderBottom: 'none' }}>
            <td style={tdStyle}>Eficiência de Rede</td>
            <td style={{ ...tdStyle, color: '#f87171' }}>{efficiency}%</td>
            <td style={{ ...tdStyle, color: '#4ad66d' }}>100% (Otimizado)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const thStyle: React.CSSProperties = {
  padding: '16px',
  textAlign: 'left',
  fontSize: '0.85rem',
  fontWeight: 600,
  color: '#cbd5e1',
};

const tdStyle: React.CSSProperties = {
  padding: '16px',
  borderBottom: '1px solid #334155',
  fontSize: '0.95rem',
};

const rowStyle: React.CSSProperties = {
  borderBottom: '1px solid #334155',
};
