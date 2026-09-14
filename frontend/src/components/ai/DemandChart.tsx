import React from 'react';

export const DemandChart: React.FC = () => {
  const days = [
    { day: "Mon", demand: 75, actual: 80 },
    { day: "Tue", demand: 82, actual: 85 },
    { day: "Wed", demand: 88, actual: 84 },
    { day: "Thu", demand: 90, actual: 92 },
    { day: "Fri", demand: 110, actual: 115 },
    { day: "Sat", demand: 130, actual: 125 },
    { day: "Sun", demand: 120, actual: 118 }
  ];

  const maxVal = 140;

  return (
    <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
      <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '16px' }}>Demand vs Consumption Trend (kg)</h4>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px', height: '140px', paddingTop: '20px' }}>
        {days.map((item, idx) => (
          <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '100%', width: '100%', justifyContent: 'center' }}>
              <div
                title={`Forecast: ${item.demand} kg`}
                style={{
                  width: '12px',
                  height: `${(item.demand / maxVal) * 100}%`,
                  background: '#94a3b8',
                  borderRadius: '2px'
                }}
              />
              <div
                title={`Actual: ${item.actual} kg`}
                style={{
                  width: '12px',
                  height: `${(item.actual / maxVal) * 100}%`,
                  background: '#10b981',
                  borderRadius: '2px'
                }}
              />
            </div>
            <span style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '6px' }}>{item.day}</span>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '12px', fontSize: '0.75rem', color: '#64748b' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ width: '8px', height: '8px', background: '#94a3b8', display: 'inline-block', borderRadius: '2px' }}></span>
          Predicted Demand
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ width: '8px', height: '8px', background: '#10b981', display: 'inline-block', borderRadius: '2px' }}></span>
          Actual Consumption
        </div>
      </div>
    </div>
  );
};
