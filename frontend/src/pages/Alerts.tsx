import React, { useState } from 'react';
import { SensorPanel } from '../components/iot/SensorPanel';
import { AnomalyList } from '../components/iot/AnomalyList';

export const Alerts: React.FC = () => {
  const [temp, setTemp] = useState(3.8);

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>IoT Cold-Chain Telemetry & Alerts</h1>
        <p style={{ color: '#64748b' }}>Real-time simulated ESP32 environmental sensing and rule-based anomaly detection.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
        <SensorPanel
          currentTemp={temp}
          onTriggerSpike={() => setTemp(11.2)}
        />
        <AnomalyList />
      </div>
    </div>
  );
};
