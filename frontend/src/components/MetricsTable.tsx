import React from 'react';

interface Props {
  pollCount: number;
  sseCount: number;
}

export const MetricsTable: React.FC<Props> = ({ pollCount, sseCount }) => {
  return (
    <div style={{ marginTop: '30px', overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', border: '1px solid #ddd' }}>
        <thead>
          <tr style={{ backgroundColor: '#f4f4f4' }}>
            <th style={tableStyle}>Métrica</th>
            <th style={tableStyle}>Polling (Curto)</th>
            <th style={tableStyle}>SSE (Push)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tableStyle}>Requisições/Conexões</td>
            <td style={tableStyle}>{pollCount} requisições HTTP</td>
            <td style={tableStyle}>1 conexão persistente</td>
          </tr>
          <tr>
            <td style={tableStyle}>Dados Trafegados (Status)</td>
            <td style={tableStyle}>{pollCount} respostas enviadas</td>
            <td style={tableStyle}>{sseCount} eventos enviados</td>
          </tr>
          <tr>
            <td style={tableStyle}>Eficiência</td>
            <td style={tableStyle}>{((sseCount / (pollCount || 1)) * 100).toFixed(2)}%</td>
            <td style={tableStyle}>100% (Apenas o necessário)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const tableStyle: React.CSSProperties = {
  padding: '12px',
  border: '1px solid #ddd',
};
