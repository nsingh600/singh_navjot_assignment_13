import React from 'react';
export const TableRow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <tr style={{ borderBottom: '1px solid #ddd' }}>{children}</tr>
);
