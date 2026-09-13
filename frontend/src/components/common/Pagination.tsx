import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '8px', marginTop: '16px' }}>
      <button
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
        style={{ padding: '6px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', cursor: currentPage <= 1 ? 'not-allowed' : 'pointer' }}
      >
        Prev
      </button>
      <span style={{ fontSize: '0.85rem', color: '#64748b' }}>
        Page {currentPage} of {totalPages}
      </span>
      <button
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        style={{ padding: '6px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', cursor: currentPage >= totalPages ? 'not-allowed' : 'pointer' }}
      >
        Next
      </button>
    </div>
  );
};
