import React, { useState } from 'react';
import { MapPanel } from '../components/maps/MapPanel';
import { StatusBadge } from '../components/common/StatusBadge';
import { LiveTracker } from '../components/tracking/LiveTracker';

export const DriverDashboard: React.FC = () => {
  const [taskStatus, setTaskStatus] = useState<"ASSIGNED" | "EN_ROUTE_TO_PICKUP" | "PICKED_UP" | "DELIVERED">("EN_ROUTE_TO_PICKUP");

  const handleStep = () => {
    if (taskStatus === "ASSIGNED") setTaskStatus("EN_ROUTE_TO_PICKUP");
    else if (taskStatus === "EN_ROUTE_TO_PICKUP") setTaskStatus("PICKED_UP");
    else if (taskStatus === "PICKED_UP") setTaskStatus("DELIVERED");
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Driver FastFleet Mobile Console</h1>
        <p style={{ color: '#64748b' }}>Assigned food surplus pickups, active route navigation, and delivery proof.</p>
      </div>

      <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div>
            <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Active Task: #TASK-2026-0001</span>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>45 kg Cooked Meals (Rice & Dal)</h3>
          </div>
          <StatusBadge status={taskStatus} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '16px', fontSize: '0.875rem' }}>
          <div style={{ background: '#f8fafc', padding: '10px', borderRadius: '6px' }}>
            <strong>Pickup Kitchen:</strong>
            <p style={{ color: '#475569' }}>Annapurna Central Kitchen, MG Road</p>
          </div>
          <div style={{ background: '#f8fafc', padding: '10px', borderRadius: '6px' }}>
            <strong>Dropoff Food Bank:</strong>
            <p style={{ color: '#475569' }}>FeedHope Distribution Hub, Koramangala</p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <button
            onClick={handleStep}
            disabled={taskStatus === "DELIVERED"}
            style={{
              flex: 1,
              padding: '12px',
              borderRadius: '6px',
              border: 'none',
              background: taskStatus === "DELIVERED" ? '#94a3b8' : '#059669',
              color: '#fff',
              fontWeight: 600,
              cursor: taskStatus === "DELIVERED" ? 'default' : 'pointer'
            }}
          >
            {taskStatus === "ASSIGNED" && "Start Route to Kitchen"}
            {taskStatus === "EN_ROUTE_TO_PICKUP" && "Confirm Food Loaded (Mark Picked Up)"}
            {taskStatus === "PICKED_UP" && "Complete Delivery to NGO"}
            {taskStatus === "DELIVERED" && "Delivery Completed ✓"}
          </button>
        </div>

        <LiveTracker />
      </div>

      <MapPanel />
    </div>
  );
};
