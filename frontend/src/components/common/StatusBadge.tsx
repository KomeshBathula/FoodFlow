import React from 'react';

const statusColors: Record<string, { bg: string; text: string }> = {
  CREATED: { bg: '#f1f5f9', text: '#475569' },
  ACTIVE: { bg: '#e0f2fe', text: '#0369a1' },
  SURPLUS_DETECTED: { bg: '#fef3c7', text: '#b45309' },
  AVAILABLE: { bg: '#ecfdf5', text: '#047857' },
  MATCHED: { bg: '#ede9fe', text: '#6d28d9' },
  PICKUP_ASSIGNED: { bg: '#fce7f3', text: '#be185d' },
  PICKED_UP: { bg: '#ffedd5', text: '#c2410c' },
  DELIVERED: { bg: '#dcfce7', text: '#15803d' },
  EXPIRED: { bg: '#fee2e2', text: '#b91c1c' },
  CANCELLED: { bg: '#f1f5f9', text: '#94a3b8' }
};

export const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const conf = statusColors[status] || { bg: '#f1f5f9', text: '#475569' };
  return (
    <span style={{
      display: 'inline-block',
      padding: '3px 8px',
      borderRadius: '12px',
      fontSize: '0.75rem',
      fontWeight: 600,
      background: conf.bg,
      color: conf.text
    }}>
      {status.replace(/_/g, ' ')}
    </span>
  );
};
