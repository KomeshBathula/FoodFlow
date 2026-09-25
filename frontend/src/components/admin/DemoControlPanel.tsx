import React, { useState } from 'react';

export const DemoControlPanel: React.FC = () => {
  const [msg, setMsg] = useState('');

  const triggerReset = () => {
    setMsg("✓ Demo data state reset to pristine SIH baseline scenario.");
    setTimeout(() => setMsg(''), 4000);
  };

  return (
    <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0', marginTop: '20px' }}>
      <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px' }}>SIH Jury Quick Controls</h3>
      <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '16px' }}>
        Use these controls during the demo presentation to reset scenario states or inject simulated sensor spikes.
      </p>

      {msg && (
        <div style={{ background: '#ecfdf5', color: '#047857', padding: '8px 12px', borderRadius: '4px', fontSize: '0.85rem', marginBottom: '12px' }}>
          {msg}
        </div>
      )}

      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          onClick={triggerReset}
          style={{ padding: '8px 16px', background: '#dc2626', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 600, cursor: 'pointer' }}
        >
          Reset Demo Data
        </button>
      </div>
    </div>
  );
};
