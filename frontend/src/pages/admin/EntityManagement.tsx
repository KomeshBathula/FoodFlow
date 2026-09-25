import React from 'react';

export const EntityManagement: React.FC = () => {
  return (
    <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0', marginTop: '20px' }}>
      <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px' }}>Verified Entities & Capacity Limits</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
        <div style={{ border: '1px solid #cbd5e1', padding: '16px', borderRadius: '6px' }}>
          <h4>Annapurna Central Kitchen</h4>
          <p style={{ fontSize: '0.85rem', color: '#64748b' }}>FSSAI Lic: #11223344556677</p>
          <div style={{ fontSize: '0.8rem', marginTop: '8px' }}>Capacity: 250 kg/day • Cold Storage: Chiller A (3.8°C)</div>
        </div>

        <div style={{ border: '1px solid #cbd5e1', padding: '16px', borderRadius: '6px' }}>
          <h4>FeedHope Food Bank Hub</h4>
          <p style={{ fontSize: '0.85rem', color: '#64748b' }}>NGO Reg: #KA-BLR-NGO-8821</p>
          <div style={{ fontSize: '0.8rem', marginTop: '8px' }}>Capacity: 500 meals/day • Transit Van available</div>
        </div>
      </div>
    </div>
  );
};
