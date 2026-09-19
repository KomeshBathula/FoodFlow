import React, { useState } from 'react';

interface RedistributionDialogProps {
  foodName: string;
  quantityKg: number;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (ngoId: string) => void;
}

export const RedistributionDialog: React.FC<RedistributionDialogProps> = ({ foodName, quantityKg, isOpen, onClose, onConfirm }) => {
  const [selectedNgo, setSelectedNgo] = useState('665000000000000000000002');

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{ background: '#fff', borderRadius: '8px', padding: '24px', width: '420px', maxWidth: '90%' }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '8px' }}>Assign NGO Redistribution</h3>
        <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '16px' }}>
          Batch: <strong>{foodName}</strong> ({quantityKg} kg)
        </p>

        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
          Select Recommended Partner NGO
        </label>
        <select
          value={selectedNgo}
          onChange={(e) => setSelectedNgo(e.target.value)}
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1', marginBottom: '20px' }}
        >
          <option value="665000000000000000000002">FeedHope Distribution Hub (Score: 94 - 3.2 km)</option>
          <option value="665000000000000000000003">Roti Bank City Center (Score: 88 - 5.1 km)</option>
          <option value="665000000000000000000004">Annam Shelter Kitchen (Score: 82 - 6.8 km)</option>
        </select>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
          <button onClick={onClose} style={{ padding: '8px 16px', borderRadius: '4px', border: '1px solid #cbd5e1', background: '#fff', cursor: 'pointer' }}>Cancel</button>
          <button onClick={() => onConfirm(selectedNgo)} style={{ padding: '8px 16px', borderRadius: '4px', border: 'none', background: '#059669', color: '#fff', fontWeight: 600, cursor: 'pointer' }}>Confirm Dispatch</button>
        </div>
      </div>
    </div>
  );
};
