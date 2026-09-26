import React, { useState } from 'react';
import { PredictionCard } from '../components/ai/PredictionCard';
import { DemandChart } from '../components/ai/DemandChart';
import { FoodBatches } from './FoodBatches';
import { SensorPanel } from '../components/iot/SensorPanel';

export const KitchenDashboard: React.FC = () => {
  const [published, setPublished] = useState(false);
  const [temp, setTemp] = useState(3.8);

  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Kitchen Operations & AI Demand Portal</h1>
        <p style={{ color: '#64748b' }}>Predict surplus early, monitor cold storage sensors, and publish excess food.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', marginBottom: '24px' }}>
        <PredictionCard
          predictedSurplusKg={34.5}
          confidence={0.91}
          recommendedAction={published ? "PUBLISHED TO NGOS" : "REDISTRIBUTE"}
          explanation="Catering production today exceeds lunch demand estimates by 34.5 kg. Quality score is 94/100 (Fresh)."
          onPublishSurplus={published ? undefined : () => setPublished(true)}
        />
        <SensorPanel currentTemp={temp} onTriggerSpike={() => setTemp(11.2)} />
      </div>

      <div style={{ marginBottom: '24px' }}>
        <DemandChart />
      </div>

      {published && (
        <div style={{ background: '#ecfdf5', color: '#065f46', padding: '12px 16px', borderRadius: '6px', marginBottom: '20px', border: '1px solid #a7f3d0' }}>
          ✓ Surplus batch of 34.5 kg Basmati Rice & Dal successfully published! Matching algorithms searching for nearest NGOs.
        </div>
      )}

      <FoodBatches />
    </div>
  );
};
