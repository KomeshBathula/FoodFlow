import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: string;
  color?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, subtitle, icon, color = '#059669' }) => {
  return (
    <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 500 }}>{title}</span>
        {icon && <span style={{ fontSize: '1.25rem' }}>{icon}</span>}
      </div>
      <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color }}>{value}</div>
      {subtitle && <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '4px' }}>{subtitle}</div>}
    </div>
  );
};
