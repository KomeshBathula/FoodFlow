import React from 'react';

export const ImpactBreakdown: React.FC = () => {
  return (
    <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
      <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '16px' }}>Impact Lifecycle Methodology (Predict → Measure)</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem' }}>
        <div>
          <strong>1. Beneficiary Feeding Formula:</strong>
          <p style={{ color: '#64748b' }}>Beneficiaries = Total Redistributed (kg) × 2.5 servings/kg</p>
        </div>
        <div>
          <strong>2. Carbon Offset Assumption:</strong>
          <p style={{ color: '#64748b' }}>Avoided CO2e = Total Redistributed (kg) × 2.5 kg CO2e / kg</p>
        </div>
        <div>
          <strong>3. Economic Recovery:</strong>
          <p style={{ color: '#64748b' }}>Cost Saved = Total Redistributed (kg) × ₹150 / kg</p>
        </div>
      </div>
    </div>
  );
};
