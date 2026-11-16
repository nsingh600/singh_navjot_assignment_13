import React from 'react';

export interface TableProps {
  headers: string[];
  data: (string | number)[][];
  className?: string;
}
