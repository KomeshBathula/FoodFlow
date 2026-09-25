import React from 'react';
import { DataTable, Column } from '../../components/common/DataTable';
import { StatusBadge } from '../../components/common/StatusBadge';

interface UserRecord {
  id: string;
  name: string;
  email: string;
  role: string;
  org: string;
  status: string;
}

export const UserManagement: React.FC = () => {
  const users: UserRecord[] = [
    { id: "1", name: "System Admin", email: "admin@foodflow.org", role: "ADMIN", org: "FoodFlow HQ", status: "ACTIVE" },
    { id: "2", name: "Annapurna Kitchens", email: "kitchen@foodflow.org", role: "KITCHEN", org: "Annapurna Ltd", status: "ACTIVE" },
    { id: "3", name: "FeedHope Foundation", email: "ngo@foodflow.org", role: "NGO", org: "FeedHope NGO", status: "ACTIVE" },
    { id: "4", name: "Ramesh Fleet", email: "driver@foodflow.org", role: "DRIVER", org: "GreenFleet", status: "ACTIVE" },
    { id: "5", name: "Civic Observer", email: "user@foodflow.org", role: "USER", org: "Public", status: "ACTIVE" }
  ];

  const columns: Column<UserRecord>[] = [
    { header: "Name", accessor: (u) => <strong>{u.name}</strong> },
    { header: "Email Address", accessor: (u) => u.email },
    { header: "Role", accessor: (u) => <span style={{ background: '#f1f5f9', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>{u.role}</span> },
    { header: "Organization", accessor: (u) => u.org },
    { header: "Account Status", accessor: (u) => <StatusBadge status={u.status} /> }
  ];

  return (
    <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0', marginTop: '20px' }}>
      <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '16px' }}>Registered Platform Users</h3>
      <DataTable columns={columns} data={users} />
    </div>
  );
};
