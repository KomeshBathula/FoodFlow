import React from 'react';

interface TopBarProps {
  userRole?: string;
  userName?: string;
  onLogout?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ userRole = 'GUEST', userName = 'Demo User', onLogout }) => {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 24px',
      background: '#ffffff',
      borderBottom: '1px solid #e2e8f0'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <h2 style={{ color: '#059669', fontSize: '1.25rem', fontWeight: 'bold' }}>FoodFlow</h2>
        <span style={{
          fontSize: '0.75rem',
          background: '#ecfdf5',
          color: '#047857',
          padding: '2px 8px',
          borderRadius: '12px',
          fontWeight: 600
        }}>SIH 2026 Prototype</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>{userName}</div>
          <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Role: {userRole}</div>
        </div>
        {onLogout && (
          <button 
            onClick={onLogout}
            style={{
              padding: '6px 12px',
              borderRadius: '6px',
              border: '1px solid #cbd5e1',
              background: '#f8fafc',
              cursor: 'pointer',
              fontSize: '0.85rem'
            }}
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
};
