import React, { useState } from 'react';
import { StatusBadge } from '../components/common/StatusBadge';
import { DataTable, Column } from '../components/common/DataTable';
import { FoodBatchForm } from '../components/food/FoodBatchForm';

interface DemoBatch {
  id: string;
  batchId: string;
  foodName: string;
  category: string;
  quantityKg: number;
  storageTemperature: number;
  expiryTime: string;
  status: string;
  qualityScore: number;
}

export const FoodBatches: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [batches, setBatches] = useState<DemoBatch[]>([
    {
      id: "1",
      batchId: "BATCH-2026-0001",
      foodName: "Steamed Basmati Rice & Dal Makhani",
      category: "COOKED_MEALS",
      quantityKg: 45,
      storageTemperature: 4,
      expiryTime: new Date(Date.now() + 4 * 3600000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: "SURPLUS_DETECTED",
      qualityScore: 92
    },
    {
      id: "2",
      batchId: "BATCH-2026-0002",
      foodName: "Whole Wheat Bread Loaves",
      category: "BAKERY",
      quantityKg: 20,
      storageTemperature: 22,
      expiryTime: new Date(Date.now() + 18 * 3600000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: "AVAILABLE",
      qualityScore: 96
    },
    {
      id: "3",
      batchId: "BATCH-2026-0003",
      foodName: "Paneer Butter Masala (Catering Batch)",
      category: "COOKED_MEALS",
      quantityKg: 30,
      storageTemperature: 3,
      expiryTime: new Date(Date.now() + 6 * 3600000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: "MATCHED",
      qualityScore: 89
    }
  ]);

  const handleCreate = (data: any) => {
    const newBatch: DemoBatch = {
      id: String(batches.length + 1),
      batchId: `BATCH-2026-000${batches.length + 1}`,
      foodName: data.foodName,
      category: data.category,
      quantityKg: data.quantityKg,
      storageTemperature: data.storageTemperature,
      expiryTime: new Date(data.expiryTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: "CREATED",
      qualityScore: 95
    };
    setBatches([newBatch, ...batches]);
    setShowForm(false);
  };

  const columns: Column<DemoBatch>[] = [
    { header: "Batch ID", accessor: (b) => <strong style={{ color: '#0f172a' }}>{b.batchId}</strong> },
    { header: "Food Name", accessor: (b) => b.foodName },
    { header: "Category", accessor: (b) => b.category.replace('_', ' ') },
    { header: "Quantity", accessor: (b) => `${b.quantityKg} kg` },
    { header: "Storage Temp", accessor: (b) => `${b.storageTemperature}°C` },
    { header: "Expiry Window", accessor: (b) => b.expiryTime },
    { header: "Quality Score", accessor: (b) => `${b.qualityScore}/100` },
    { header: "Status", accessor: (b) => <StatusBadge status={b.status} /> }
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Food Batches & Surplus Inventory</h1>
          <p style={{ color: '#64748b' }}>Track registered food items, shelf life, and surplus status.</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          style={{
            background: '#059669',
            color: '#fff',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '6px',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          {showForm ? "Close Form" : "+ Create Food Batch"}
        </button>
      </div>

      {showForm && <FoodBatchForm onSubmit={handleCreate} onCancel={() => setShowForm(false)} />}

      <DataTable columns={columns} data={batches} />
    </div>
  );
};
