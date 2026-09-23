import React from 'react';
import { StatCard } from '../components/common/StatCard';
import { EsgCard } from '../components/analytics/EsgCard';
import { ImpactBreakdown } from '../components/analytics/ImpactBreakdown';

export const Analytics: React.FC = () => {
  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Analytics & ESG Impact Intelligence</h1>
        <p style={{ color: '#64748b' }}>Measure prevented food waste, humanitarian meals served, and environmental carbon metrics.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        <StatCard title="Food Redistributed" value="395 kg" subtitle="85.8% of identified surplus" icon="🍲" />
        <StatCard title="Beneficiaries Served" value="988 meals" subtitle="Distributed via partner NGOs" icon="👥" color="#2563eb" />
        <StatCard title="CO2e Emissions Avoided" value="987.5 kg" subtitle="Scope 3 ESG equivalent" icon="🌱" color="#059669" />
        <StatCard title="Economic Value Saved" value="₹59,250" subtitle="Recovered food value" icon="₹" color="#d97706" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '20px' }}>
        <EsgCard />
        <ImpactBreakdown />
      </div>
    </div>
  );
};
