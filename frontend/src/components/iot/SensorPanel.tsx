import React from 'react';

export const SensorPanel: React.FC<{ currentTemp: number; isSimulated?: boolean; onTriggerSpike?: () => void }> = ({
  currentTemp,
  isSimulated = true,
  onTriggerSpike
}) => {
  const isSafe = currentTemp <= 5.0;

  return (
    <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>ESP32 Cold Chain Sensor</h4>
        <span style={{ fontSize: '0.75rem', background: '#f1f5f9', color: '#475569', padding: '2px 8px', borderRadius: '12px' }}>
          {isSimulated ? "Simulated IoT Feed" : "Hardware Active"}
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '16px' }}>
        <div>
          <div style={{ fontSize: '2.2rem', fontWeight: 'bold', color: isSafe ? '#059669' : '#dc2626' }}>
            {currentTemp.toFixed(1)}°C
          </div>
          <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Chiller Zone #1 (Target: 2-4°C)</div>
        </div>

        <div style={{
          padding: '8px 12px',
          borderRadius: '6px',
          background: isSafe ? '#ecfdf5' : '#fee2e2',
          color: isSafe ? '#047857' : '#b91c1c',
          fontSize: '0.85rem',
          fontWeight: 600
        }}>
          {isSafe ? "✓ Cold Chain Nominal" : "⚠️ Thermal Anomaly Detected"}
        </div>
      </div>

      {onTriggerSpike && (
        <button
          onClick={onTriggerSpike}
          style={{
            padding: '6px 12px',
            fontSize: '0.8rem',
            background: '#f8fafc',
            border: '1px solid #cbd5e1',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Simulate High-Temperature Fault (+11°C)
        </button>
      )}
    </div>
  );
};
