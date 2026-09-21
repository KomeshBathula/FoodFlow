import React, { useState, useEffect } from 'react';

export const LiveTracker: React.FC = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const waypoints = [
    { title: "Annapurna Kitchen (Pickup)", time: "12:15 PM", done: true },
    { title: "Transit: MG Road Corridor", time: "12:28 PM", done: step >= 2 },
    { title: "Transit: Koramangala Ring Rd", time: "12:40 PM", done: step >= 3 },
    { title: "FeedHope Foundation (Dropoff)", time: "12:50 PM", done: step >= 4 }
  ];

  return (
    <div style={{ background: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>Active Delivery Progress (#TASK-2026-0001)</h4>
        <button
          onClick={() => setStep((s) => Math.min(totalSteps, s + 1))}
          disabled={step >= totalSteps}
          style={{
            padding: '6px 12px',
            fontSize: '0.75rem',
            background: step >= totalSteps ? '#94a3b8' : '#059669',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: step >= totalSteps ? 'default' : 'pointer'
          }}
        >
          {step >= totalSteps ? "Destination Reached" : "Simulate Next GPS Ping"}
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {waypoints.map((wp, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.75rem',
              fontWeight: 'bold',
              background: wp.done ? '#ecfdf5' : '#f1f5f9',
              color: wp.done ? '#059669' : '#94a3b8',
              border: wp.done ? '2px solid #059669' : '2px solid #cbd5e1'
            }}>
              {wp.done ? "✓" : idx + 1}
            </span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: wp.done ? '#0f172a' : '#94a3b8' }}>{wp.title}</div>
            </div>
            <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{wp.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
