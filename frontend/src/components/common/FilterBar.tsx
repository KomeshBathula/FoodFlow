import React from 'react';

interface FilterOption {
  label: string;
  value: string;
}

interface FilterBarProps {
  selectedStatus: string;
  onStatusChange: (status: string) => void;
  options: FilterOption[];
}

export const FilterBar: React.FC<FilterBarProps> = ({ selectedStatus, onStatusChange, options }) => {
  return (
    <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
      {options.map((opt) => {
        const isSelected = selectedStatus === opt.value;
        return (
          <button
            key={opt.value}
            onClick={() => onStatusChange(opt.value)}
            style={{
              padding: '6px 12px',
              borderRadius: '16px',
              border: isSelected ? '1px solid #059669' : '1px solid #e2e8f0',
              background: isSelected ? '#ecfdf5' : '#ffffff',
              color: isSelected ? '#047857' : '#64748b',
              fontWeight: isSelected ? 600 : 500,
              fontSize: '0.8rem',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
};
