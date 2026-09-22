import React from 'react';

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  type: string;
  read: boolean;
}

export const NotificationPanel: React.FC<{ notifications: NotificationItem[]; onClose: () => void }> = ({ notifications, onClose }) => {
  return (
    <div style={{
      position: 'absolute',
      right: '24px',
      top: '60px',
      width: '320px',
      background: '#fff',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      border: '1px solid #e2e8f0',
      zIndex: 100,
      padding: '16px'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <h4 style={{ fontSize: '0.95rem', fontWeight: 600 }}>Notifications</h4>
        <button onClick={onClose} style={{ border: 'none', background: 'transparent', cursor: 'pointer', fontSize: '1rem' }}>✕</button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '300px', overflowY: 'auto' }}>
        {notifications.map((n) => (
          <div key={n.id} style={{ padding: '8px', borderRadius: '4px', background: n.read ? '#fff' : '#ecfdf5', border: '1px solid #f1f5f9' }}>
            <strong style={{ display: 'block', fontSize: '0.8rem', color: '#0f172a' }}>{n.title}</strong>
            <p style={{ fontSize: '0.75rem', color: '#475569', marginTop: '2px' }}>{n.message}</p>
            <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{n.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
