import React, { useState } from 'react';
import { NgoMatchCard } from '../components/ngo/NgoMatchCard';
import { MapPanel } from '../components/maps/MapPanel';

export const NgoDashboard: React.FC = () => {
  const [claimedBatch, setClaimedBatch] = useState(false);

  const availableSurplus = [
    {
      id: "BATCH-2026-0001",
      foodName: "Steamed Basmati Rice & Dal Makhani",
      quantityKg: 45,
      kitchenName: "Annapurna Central Kitchen",
      distanceKm: 3.2,
      expiryHours: 3.5,
      qualityScore: 92,
      beneficiaries: 110
    },
    {
      id: "BATCH-2026-0002",
      foodName: "Fresh Bakery Breads & Buns",
      quantityKg: 20,
      kitchenName: "Taj Hospitality Hub",
      distanceKm: 5.8,
      expiryHours: 14.0,
      qualityScore: 96,
      beneficiaries: 50
    }
  ];

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>NGO Food Bank & Redistribution Portal</h1>
        <p style={{ color: '#64748b' }}>View compatible surplus batches, claim edible donations, and coordinate volunteer distribution.</p>
      </div>

      {claimedBatch && (
        <div style={{ background: '#ecfdf5', color: '#047857', padding: '12px', borderRadius: '6px', marginBottom: '20px', border: '1px solid #6ee7b7' }}>
          ✓ Redistribution request accepted! Driver assigned for pickup from Annapurna Central Kitchen.
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '20px', marginBottom: '24px' }}>
        <div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px' }}>Available Compatible Surplus Batches</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {availableSurplus.map((item) => (
              <div key={item.id} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{item.foodName}</h4>
                    <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Donor: {item.kitchenName} • {item.distanceKm} km away</div>
                  </div>
                  <span style={{ background: '#ecfdf5', color: '#059669', padding: '4px 8px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 600 }}>
                    {item.quantityKg} kg (~{item.beneficiaries} meals)
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '20px', fontSize: '0.85rem', color: '#475569', marginBottom: '16px' }}>
                  <div>⏳ Urgent Expiry: <strong>{item.expiryHours} hours</strong></div>
                  <div>⭐ Quality Score: <strong>{item.qualityScore}/100</strong></div>
                </div>

                <NgoMatchCard
                  name="FeedHope Distribution Hub"
                  distanceKm={item.distanceKm}
                  score={94}
                  beneficiaries={item.beneficiaries}
                  claimed={claimedBatch}
                  onClaim={() => setClaimedBatch(true)}
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px' }}>Surplus Dispatch Map</h3>
          <MapPanel />
        </div>
      </div>
    </div>
  );
};
