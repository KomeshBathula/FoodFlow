import React from 'react';

interface NgoMatchCardProps {
  name: string;
  distanceKm: number;
  score: number;
  beneficiaries: number;
  onClaim?: () => void;
  claimed?: boolean;
}

export const NgoMatchCard: React.FC<NgoMatchCardProps> = ({ name, distanceKm, score, beneficiaries, onClaim, claimed }) => {
  return (
    <div style={{
      background: '#fff',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div>
        <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#0f172a', marginBottom: '4px' }}>{name}</h4>
        <div style={{ display: 'flex', gap: '12px', fontSize: '0.8rem', color: '#64748b' }}>
          <span>📍 {distanceKm} km away</span>
          <span>👥 Capacity: {beneficiaries} beneficiaries</span>
          <span style={{ color: '#059669', fontWeight: 600 }}>Match Score: {score}/100</span>
        </div>
      </div>

      {onClaim && (
        <button
          onClick={onClaim}
          disabled={claimed}
          style={{
            background: claimed ? '#94a3b8' : '#059669',
            color: '#fff',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '6px',
            fontWeight: 600,
            cursor: claimed ? 'default' : 'pointer',
            fontSize: '0.85rem'
          }}
        >
          {claimed ? "Matched ✓" : "Accept Offer"}
        </button>
      )}
    </div>
  );
};
