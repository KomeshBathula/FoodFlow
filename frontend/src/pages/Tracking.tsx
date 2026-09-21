import React from 'react';
import { MapPanel } from '../components/maps/MapPanel';
import { LiveTracker } from '../components/tracking/LiveTracker';

export const Tracking: React.FC = () => {
  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Live Food Transport & Logistics Tracking</h1>
        <p style={{ color: '#64748b' }}>Real-time GPS coordinates, route polyline interpolation, and cold-chain status.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '20px' }}>
        <MapPanel />
        <LiveTracker />
      </div>
    </div>
  );
};
