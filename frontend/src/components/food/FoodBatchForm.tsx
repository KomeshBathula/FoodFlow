import React, { useState } from 'react';

interface FoodBatchFormProps {
  onSubmit: (batch: any) => void;
  onCancel: () => void;
}

export const FoodBatchForm: React.FC<FoodBatchFormProps> = ({ onSubmit, onCancel }) => {
  const [foodName, setFoodName] = useState('');
  const [category, setCategory] = useState('COOKED_MEALS');
  const [quantityKg, setQuantityKg] = useState(25);
  const [storageTemp, setStorageTemp] = useState(4);
  const [hoursToExpiry, setHoursToExpiry] = useState(6);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const now = new Date();
    const expiry = new Date(now.getTime() + hoursToExpiry * 60 * 60 * 1000);
    onSubmit({
      foodName,
      category,
      quantityKg: Number(quantityKg),
      preparationTime: now.toISOString(),
      expiryTime: expiry.toISOString(),
      storageTemperature: Number(storageTemp),
      storageCondition: storageTemp <= 4 ? 'REFRIGERATED' : 'AMBIENT'
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '24px' }}>
      <h3 style={{ marginBottom: '16px', fontSize: '1.1rem', fontWeight: 600 }}>Create New Food Batch</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '4px' }}>Food Name</label>
          <input
            type="text"
            required
            placeholder="e.g. Mixed Vegetable Pulao"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
          />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '4px' }}>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
          >
            <option value="COOKED_MEALS">Cooked Meals</option>
            <option value="BAKERY">Bakery & Breads</option>
            <option value="DAIRY">Dairy</option>
            <option value="FRUITS_VEGETABLES">Fruits & Vegetables</option>
            <option value="PACKAGED_GOODS">Packaged Goods</option>
          </select>
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '4px' }}>Quantity (kg)</label>
          <input
            type="number"
            min="1"
            value={quantityKg}
            onChange={(e) => setQuantityKg(Number(e.target.value))}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
          />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '4px' }}>Storage Temp (°C)</label>
          <input
            type="number"
            value={storageTemp}
            onChange={(e) => setStorageTemp(Number(e.target.value))}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
          />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '4px' }}>Shelf Life (Hours)</label>
          <input
            type="number"
            min="1"
            value={hoursToExpiry}
            onChange={(e) => setHoursToExpiry(Number(e.target.value))}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
          />
        </div>
      </div>
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
        <button type="button" onClick={onCancel} style={{ padding: '8px 16px', borderRadius: '4px', border: '1px solid #cbd5e1', background: '#fff', cursor: 'pointer' }}>Cancel</button>
        <button type="submit" style={{ padding: '8px 16px', borderRadius: '4px', border: 'none', background: '#059669', color: '#fff', fontWeight: 600, cursor: 'pointer' }}>Save Batch</button>
      </div>
    </form>
  );
};
