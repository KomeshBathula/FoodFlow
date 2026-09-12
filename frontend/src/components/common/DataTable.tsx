import React from 'react';

export interface Column<T> {
  header: string;
  accessor: (item: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  emptyMessage?: string;
}

export function DataTable<T>({ columns, data, emptyMessage = "No records found" }: DataTableProps<T>) {
  if (data.length === 0) {
    return (
      <div style={{ padding: '32px', textAlign: 'center', color: '#64748b', background: '#fff', borderRadius: '8px' }}>
        {emptyMessage}
      </div>
    );
  }

  return (
    <div style={{ overflowX: 'auto', background: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
        <thead style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
          <tr>
            {columns.map((col, idx) => (
              <th key={idx} style={{ padding: '12px 16px', fontWeight: 600, color: '#475569' }}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIdx) => (
            <tr key={rowIdx} style={{ borderBottom: '1px solid #f1f5f9' }}>
              {columns.map((col, colIdx) => (
                <td key={colIdx} style={{ padding: '12px 16px' }}>
                  {col.accessor(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
