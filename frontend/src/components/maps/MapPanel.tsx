import React from 'react';

interface Point {
  name: string;
  lat: number;
  lng: number;
  type: 'kitchen' | 'ngo' | 'driver';
}

interface MapPanelProps {
  origin?: Point;
  destination?: Point;
  currentDriverPos?: { lat: number; lng: number };
  distanceKm?: number;
  etaMinutes?: number;
}

export const MapPanel: React.FC<MapPanelProps> = ({
  origin = { name: "Annapurna Kitchen", lat: 12.9716, lng: 77.5946, type: 'kitchen' },
  destination = { name: "FeedHope Foundation", lat: 12.9352, lng: 77.6245, type: 'ngo' },
  currentDriverPos = { lat: 12.9534, lng: 77.6095 },
  distanceKm = 4.2,
  etaMinutes = 18
}) => {
  return (
    <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>Live Route & Logistics Map</h4>
        <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
          Distance: <strong>{distanceKm} km</strong> • ETA: <strong>{etaMinutes} mins</strong>
        </div>
      </div>

      {/* Interactive visual SVG mock map */}
      <div style={{
        height: '240px',
        background: '#f1f5f9',
        borderRadius: '6px',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid #cbd5e1'
      }}>
        {/* Mock road grid */}
        <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
          <line x1="10%" y1="20%" x2="90%" y2="80%" stroke="#059669" strokeWidth="4" strokeDasharray="6,6" />
          <circle cx="15%" cy="25%" r="10" fill="#2563eb" />
          <circle cx="85%" cy="75%" r="10" fill="#dc2626" />
          <circle cx="50%" cy="50%" r="8" fill="#10b981" />
        </svg>

        {/* Labels overlay */}
        <div style={{ position: 'absolute', top: '15%', left: '18%', fontSize: '0.75rem', background: '#fff', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>
          🏢 Pickup: {origin.name}
        </div>
        <div style={{ position: 'absolute', top: '44%', left: '54%', fontSize: '0.75rem', background: '#059669', color: '#fff', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>
          🚚 Driver In-Transit
        </div>
        <div style={{ position: 'absolute', top: '75%', left: '60%', fontSize: '0.75rem', background: '#fff', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>
          📍 Dropoff: {destination.name}
        </div>
      </div>

      <div style={{ marginTop: '12px', fontSize: '0.75rem', color: '#64748b', display: 'flex', justifyContent: 'space-between' }}>
        <span>Engine: Haversine Euclidean Router with Waypoint Interpolation</span>
        <span>Simulated GPS feed active</span>
      </div>
    </div>
  );
};
