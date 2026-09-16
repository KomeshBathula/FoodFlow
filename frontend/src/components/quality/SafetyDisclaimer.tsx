import React from 'react';

export const SafetyDisclaimer: React.FC = () => {
  return (
    <div style={{
      background: '#fffbeb',
      border: '1px solid #fef3c7',
      borderRadius: '6px',
      padding: '10px 14px',
      fontSize: '0.75rem',
      color: '#92400e',
      marginTop: '12px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
      <span>⚠️</span>
      <span>
        <strong>Prototype Safety Disclaimer:</strong> AI Quality Scoring & Computer Vision provide operational decision support only. Trained kitchen staff must conduct standard sensory/FSSAI safety checks before dispatch.
      </span>
    </div>
  );
};
