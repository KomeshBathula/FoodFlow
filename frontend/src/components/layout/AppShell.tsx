import React from 'react';
import { TopBar } from './TopBar';
import { Sidebar } from './Sidebar';

export const AppShell: React.FC<{ children: React.ReactNode; userRole?: string; userName?: string; onLogout?: () => void }> = ({
  children,
  userRole,
  userName,
  onLogout
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <TopBar userRole={userRole} userName={userName} onLogout={onLogout} />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar role={userRole} />
        <main style={{ flex: 1, padding: '24px', background: '#f8fafc', overflowY: 'auto' }}>
          {children}
        </main>
      </div>
    </div>
  );
};
