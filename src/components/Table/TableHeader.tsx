import React from 'react';
export const TableHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <thead style={{ backgroundColor: '#f2f2f2', borderBottom: '2px solid #ddd' }}>{children}</thead>
);
