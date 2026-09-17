import React from 'react';

export const AnomalyList: React.FC = () => {
  const anomalies = [
    {
      id: "ANOM-01",
      title: "Chiller Temperature Surge",
      time: "10 mins ago",
      severity: "CRITICAL",
      reason: "Unit 3 climbed to 11.2°C exceeding perishable threshold (4°C)",
      action: "Recommended: Expedite NGO pickup for batch #BATCH-2026-0001"
    },
    {
      id: "ANOM-02",
      title: "Shelf-Life Warning",
      time: "45 mins ago",
      severity: "MEDIUM",
      reason: "Batch #BATCH-2026-0003 will reach expiry in 2.5 hours",
      action: "Recommended: Auto-assign nearby driver"
    }
  ];

  return (
    <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
      <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '16px' }}>Active IoT & System Anomalies</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {anomalies.map((a) => (
          <div key={a.id} style={{ borderLeft: a.severity === 'CRITICAL' ? '4px solid #dc2626' : '4px solid #f59e0b', padding: '10px 14px', background: '#f8fafc', borderRadius: '0 6px 6px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <strong style={{ fontSize: '0.875rem' }}>{a.title}</strong>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{a.time}</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#475569', marginBottom: '4px' }}>{a.reason}</p>
            <div style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 600 }}>{a.action}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
