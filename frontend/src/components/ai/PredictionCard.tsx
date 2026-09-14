import React from 'react';

interface PredictionCardProps {
  predictedSurplusKg: number;
  confidence: number;
  recommendedAction: string;
  explanation: string;
  onPublishSurplus?: () => void;
}

export const PredictionCard: React.FC<PredictionCardProps> = ({
  predictedSurplusKg,
  confidence,
  recommendedAction,
  explanation,
  onPublishSurplus
}) => {
  return (
    <div style={{
      background: '#fff',
      borderRadius: '8px',
      border: '1px solid #e2e8f0',
      padding: '20px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#0f172a' }}>AI Surplus Prediction</h4>
        <span style={{
          fontSize: '0.75rem',
          padding: '3px 8px',
          borderRadius: '12px',
          background: '#ecfdf5',
          color: '#059669',
          fontWeight: 600
        }}>
          Confidence: {Math.round(confidence * 100)}%
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '8px' }}>
        <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#059669' }}>{predictedSurplusKg}</span>
        <span style={{ color: '#64748b', fontSize: '0.9rem' }}>kg estimated surplus</span>
      </div>

      <div style={{ background: '#f8fafc', padding: '10px', borderRadius: '6px', fontSize: '0.85rem', color: '#475569', marginBottom: '16px' }}>
        <strong>Recommendation: </strong>
        <span style={{ color: recommendedAction === 'REDISTRIBUTE' ? '#059669' : '#d97706', fontWeight: 600 }}>
          {recommendedAction}
        </span>
        <p style={{ marginTop: '4px', fontSize: '0.8rem', color: '#64748b' }}>{explanation}</p>
      </div>

      {onPublishSurplus && (
        <button
          onClick={onPublishSurplus}
          style={{
            width: '100%',
            padding: '10px',
            background: '#059669',
            color: '#fff',
            fontWeight: 600,
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Publish Surplus Batch for NGO Matching
        </button>
      )}
    </div>
  );
};
