import React from 'react';
import { StatCard } from '../components/common/StatCard';
import { AnomalyList } from '../components/iot/AnomalyList';

export const AdminDashboard: React.FC = () => {
  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Central Administration & Governance</h1>
        <p style={{ color: '#64748b' }}>Platform KPIs, cross-role oversight, audit controls, and real-time alerts.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        <StatCard title="Active Kitchens" value="4" subtitle="Verified commercial donors" icon="👨‍🍳" />
        <StatCard title="Partner NGOs" value="6" subtitle="Food banks & shelters" icon="🏢" color="#2563eb" />
        <StatCard title="Fleet Drivers" value="5" subtitle="Active on route" icon="🚚" color="#d97706" />
        <StatCard title="Redistribution Rate" value="85.8%" subtitle="Zero-waste target" icon="📈" color="#059669" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '20px' }}>
        <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '12px' }}>Operational Health</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px', background: '#f8fafc', borderRadius: '4px' }}>
              <span>Database (MongoDB Cluster)</span>
              <strong style={{ color: '#059669' }}>Connected</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px', background: '#f8fafc', borderRadius: '4px' }}>
              <span>Cache (Redis Engine)</span>
              <strong style={{ color: '#059669' }}>Active (Hit Rate: 94%)</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px', background: '#f8fafc', borderRadius: '4px' }}>
              <span>AI Service (FastAPI / Fallback)</span>
              <strong style={{ color: '#059669' }}>Deterministic Ready</strong>
            </div>
          </div>
        </div>

        <AnomalyList />
      </div>
    </div>
  );
};
