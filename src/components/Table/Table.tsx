import React from 'react';
import { TableProps } from './Table.types';

export const Table: React.FC<TableProps> = ({ headers, data, className = '' }) => {
  return (
    <div className={`table-container ${className}`} style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', margin: '10px 0' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2', borderBottom: '2px solid #ddd' }}>
            {headers.map((header, index) => (
              <th key={index} style={{ padding: '10px', textAlign: 'left', border: '1px solid #ddd' }}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} style={{ borderBottom: '1px solid #ddd' }}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} style={{ padding: '10px', border: '1px solid #ddd' }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
