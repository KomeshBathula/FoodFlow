import React, { useState } from 'react';
import { StatusBadge } from '../components/common/StatusBadge';
import { DataTable, Column } from '../components/common/DataTable';

interface DemoRequest {
  id: string;
  requestId: string;
  foodName: string;
  quantityKg: number;
  donorKitchen: string;
  recipientNgo: string;
  status: string;
  distanceKm: number;
}

export const Redistributions: React.FC = () => {
  const [requests, setRequests] = useState<DemoRequest[]>([
    {
      id: "1",
      requestId: "REQ-2026-0001",
      foodName: "Steamed Basmati Rice & Dal Makhani",
      quantityKg: 45,
      donorKitchen: "Annapurna Central Kitchen",
      recipientNgo: "FeedHope Distribution Hub",
      status: "PICKUP_IN_PROGRESS",
      distanceKm: 3.2
    },
    {
      id: "2",
      requestId: "REQ-2026-0002",
      foodName: "Bakery Loaves & Croissants",
      quantityKg: 20,
      donorKitchen: "Taj Hospitality Hub",
      recipientNgo: "Roti Bank City Center",
      status: "DELIVERED",
      distanceKm: 5.8
    }
  ]);

  const columns: Column<DemoRequest>[] = [
    { header: "Request ID", accessor: (r) => <strong>{r.requestId}</strong> },
    { header: "Food Item", accessor: (r) => r.foodName },
    { header: "Quantity", accessor: (r) => `${r.quantityKg} kg` },
    { header: "Donor Kitchen", accessor: (r) => r.donorKitchen },
    { header: "Partner NGO", accessor: (r) => r.recipientNgo },
    { header: "Route Distance", accessor: (r) => `${r.distanceKm} km` },
    { header: "Workflow Status", accessor: (r) => <StatusBadge status={r.status} /> }
  ];

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Food Surplus Redistribution Requests</h1>
        <p style={{ color: '#64748b' }}>Active matching and handoff pipeline between verified kitchens and food banks.</p>
      </div>

      <DataTable columns={columns} data={requests} />
    </div>
  );
};
