import React from 'react';
export const TableCell: React.FC<{ children: React.ReactNode; isHeader?: boolean }> = ({ children, isHeader = false }) => {
  const Tag = isHeader ? 'th' : 'td';
  return <Tag style={{ padding: '10px', textAlign: 'left', border: '1px solid #ddd' }}>{children}</Tag>;
};
