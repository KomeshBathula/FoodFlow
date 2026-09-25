import React from 'react';
import { AuditTable } from '../components/admin/AuditTable';

export const Audit: React.FC = () => {
  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Immutable Operational Audit Trail</h1>
        <p style={{ color: '#64748b' }}>Complete lifecycle traceability from food batch registration to final delivery.</p>
      </div>

      <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
        <AuditTable />
      </div>
    </div>
  );
};
