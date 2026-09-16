import React from 'react';
import { SafetyDisclaimer } from './SafetyDisclaimer';

interface QualityScoreCardProps {
  score: number;
  classification: string;
  reasons: string[];
  isEligible: boolean;
}

export const QualityScoreCard: React.FC<QualityScoreCardProps> = ({ score, classification, reasons, isEligible }) => {
  const getColor = () => {
    if (score >= 85) return '#059669';
    if (score >= 65) return '#d97706';
    return '#dc2626';
  };

  return (
    <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>Food Quality & Freshness Assessment</h4>
        <span style={{
          padding: '4px 8px',
          borderRadius: '12px',
          fontSize: '0.75rem',
          fontWeight: 600,
          background: isEligible ? '#ecfdf5' : '#fee2e2',
          color: isEligible ? '#059669' : '#dc2626'
        }}>
          {isEligible ? "Safe for Redistribution" : "Action Required"}
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          border: `4px solid ${getColor()}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.25rem',
          fontWeight: 'bold',
          color: getColor()
        }}>
          {score}
        </div>
        <div>
          <div style={{ fontSize: '1.1rem', fontWeight: 600, color: getColor() }}>{classification}</div>
          <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Index Score out of 100 points</div>
        </div>
      </div>

      <ul style={{ fontSize: '0.8rem', color: '#475569', paddingLeft: '18px', marginBottom: '12px' }}>
        {reasons.map((r, i) => (
          <li key={i} style={{ marginBottom: '4px' }}>{r}</li>
        ))}
      </ul>

      <SafetyDisclaimer />
    </div>
  );
};
