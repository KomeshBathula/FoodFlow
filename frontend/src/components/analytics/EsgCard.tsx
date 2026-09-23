import React from 'react';

export const EsgCard: React.FC = () => {
  return (
    <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
      <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '16px' }}>Environmental & ESG Scope-3 Mitigation</h4>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
        <div style={{ background: '#ecfdf5', padding: '16px', borderRadius: '8px' }}>
          <div style={{ fontSize: '0.8rem', color: '#047857', fontWeight: 600 }}>CO2 Avoidance</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#059669', margin: '4px 0' }}>987.5 kg</div>
          <div style={{ fontSize: '0.75rem', color: '#065f46' }}>Equivalent to 4,200 km car driving avoided</div>
        </div>

        <div style={{ background: '#eff6ff', padding: '16px', borderRadius: '8px' }}>
          <div style={{ fontSize: '0.8rem', color: '#1d4ed8', fontWeight: 600 }}>Landfill Diversion</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2563eb', margin: '4px 0' }}>395.0 kg</div>
          <div style={{ fontSize: '0.75rem', color: '#1e40af' }}>Prevented methane generation in urban dumps</div>
        </div>

        <div style={{ background: '#fefce8', padding: '16px', borderRadius: '8px' }}>
          <div style={{ fontSize: '0.8rem', color: '#a16207', fontWeight: 600 }}>Water Footprint Conserved</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ca8a04', margin: '4px 0' }}>316,000 L</div>
          <div style={{ fontSize: '0.75rem', color: '#854d0e' }}>Agricultural embodied water saved</div>
        </div>
      </div>
    </div>
  );
};
