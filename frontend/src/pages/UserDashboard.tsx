import React from 'react';
import { StatCard } from '../components/common/StatCard';
import { EsgCard } from '../components/analytics/EsgCard';

export const UserDashboard: React.FC = () => {
  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Community Food Redistribution Transparency</h1>
        <p style={{ color: '#64748b' }}>Public portal showing city-wide food rescue impact and carbon offsets.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        <StatCard title="Meals Rescued Today" value="988" subtitle="Directly to shelter homes" icon="🍲" />
        <StatCard title="Carbon Avoided" value="987.5 kg" subtitle="Scope-3 emission prevention" icon="🌱" color="#059669" />
        <StatCard title="Active City Kitchens" value="4" subtitle="Participating catering hubs" icon="🏢" color="#2563eb" />
      </div>

      <EsgCard />
    </div>
  );
};
