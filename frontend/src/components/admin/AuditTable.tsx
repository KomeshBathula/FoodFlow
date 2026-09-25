import React from 'react';
import { DataTable, Column } from '../common/DataTable';

interface AuditRow {
  id: string;
  timestamp: string;
  actor: string;
  action: string;
  entity: string;
  details: string;
}

export const AuditTable: React.FC = () => {
  const logs: AuditRow[] = [
    { id: "1", timestamp: "Today 12:45", actor: "kitchen@foodflow.org", action: "BATCH_CREATED", entity: "BATCH-2026-0001", details: "45kg Basmati Rice" },
    { id: "2", timestamp: "Today 12:47", actor: "ai-service", action: "SURPLUS_PREDICTED", entity: "BATCH-2026-0001", details: "Confidence 91%" },
    { id: "3", timestamp: "Today 12:50", actor: "ngo@foodflow.org", action: "OFFER_ACCEPTED", entity: "REQ-2026-0001", details: "FeedHope Foundation" },
    { id: "4", timestamp: "Today 13:02", actor: "driver@foodflow.org", action: "PICKUP_STARTED", entity: "TASK-2026-0001", details: "GPS Lat: 12.9716, Lng: 77.5946" }
  ];

  const columns: Column<AuditRow>[] = [
    { header: "Timestamp", accessor: (l) => l.timestamp },
    { header: "Actor", accessor: (l) => l.actor },
    { header: "Action", accessor: (l) => <strong style={{ color: '#059669' }}>{l.action}</strong> },
    { header: "Target Entity", accessor: (l) => l.entity },
    { header: "Metadata Summary", accessor: (l) => l.details }
  ];

  return <DataTable columns={columns} data={logs} />;
};
