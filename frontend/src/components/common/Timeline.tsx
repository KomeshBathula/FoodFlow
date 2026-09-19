import React from 'react';

export interface TimelineEvent {
  title: string;
  timestamp: string;
  actor: string;
  description: string;
  status?: string;
}

export const Timeline: React.FC<{ events: TimelineEvent[] }> = ({ events }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative', paddingLeft: '20px' }}>
      <div style={{ position: 'absolute', left: '7px', top: '8px', bottom: '8px', width: '2px', background: '#e2e8f0' }} />
      {events.map((ev, idx) => (
        <div key={idx} style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute',
            left: '-18px',
            top: '4px',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: '#059669',
            border: '2px solid #fff',
            boxShadow: '0 0 0 2px #059669'
          }} />
          <div style={{ background: '#fff', padding: '12px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2px' }}>
              <strong style={{ fontSize: '0.875rem', color: '#0f172a' }}>{ev.title}</strong>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{ev.timestamp}</span>
            </div>
            <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '4px' }}>Actor: {ev.actor}</div>
            <p style={{ fontSize: '0.8rem', color: '#475569' }}>{ev.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
