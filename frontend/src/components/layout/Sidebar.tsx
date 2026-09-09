import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  label: string;
  path: string;
  roles?: string[];
}

const navItems: NavItem[] = [
  { label: 'Overview', path: '/dashboard' },
  { label: 'Admin Portal', path: '/admin', roles: ['ADMIN'] },
  { label: 'Kitchen Operations', path: '/kitchen', roles: ['ADMIN', 'KITCHEN'] },
  { label: 'NGO Redistribution', path: '/ngo', roles: ['ADMIN', 'NGO'] },
  { label: 'Driver Logistics', path: '/driver', roles: ['ADMIN', 'DRIVER'] },
  { label: 'Inventory & Batches', path: '/food-batches' },
  { label: 'Live Tracking', path: '/tracking' },
  { label: 'Analytics & ESG', path: '/analytics' },
  { label: 'Sensor Alerts', path: '/alerts' },
  { label: 'Audit Trail', path: '/audit', roles: ['ADMIN'] },
];

export const Sidebar: React.FC<{ role?: string }> = ({ role = 'USER' }) => {
  const location = useLocation();

  const filteredNav = navItems.filter(item => !item.roles || item.roles.includes(role));

  return (
    <aside style={{
      width: '240px',
      background: '#ffffff',
      borderRight: '1px solid #e2e8f0',
      minHeight: 'calc(100vh - 57px)',
      padding: '16px 8px'
    }}>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {filteredNav.map(item => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              style={{
                display: 'block',
                padding: '8px 12px',
                borderRadius: '6px',
                textDecoration: 'none',
                color: isActive ? '#059669' : '#334155',
                background: isActive ? '#ecfdf5' : 'transparent',
                fontWeight: isActive ? 600 : 500,
                fontSize: '0.9rem'
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
