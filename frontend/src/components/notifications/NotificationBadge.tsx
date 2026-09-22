import React from 'react';

export const NotificationBadge: React.FC<{ count: number; onClick: () => void }> = ({ count, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        position: 'relative',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1.1rem'
      }}
      title="Notifications"
    >
      🔔
      {count > 0 && (
        <span style={{
          position: 'absolute',
          top: '-4px',
          right: '-4px',
          background: '#dc2626',
          color: '#fff',
          borderRadius: '50%',
          width: '16px',
          height: '16px',
          fontSize: '0.65rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold'
        }}>
          {count}
        </span>
      )}
    </button>
  );
};
