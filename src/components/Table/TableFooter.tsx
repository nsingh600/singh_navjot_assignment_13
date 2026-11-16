import React from 'react';
export const TableFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <tfoot style={{ backgroundColor: '#fafafa', fontWeight: 'bold', borderTop: '2px solid #ddd' }}>{children}</tfoot>
);
