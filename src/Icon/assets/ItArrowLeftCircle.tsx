import * as React from 'react';
export const component = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M7.7 11.5H17v1H7.8l3 3.1-.7.7L5.8 12l4.3-4.3.7.7-3.1 3.1zM22 12c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2s10 4.5 10 10zm-1 0c0-5-4-9-9-9s-9 4-9 9 4 9 9 9 9-4 9-9z' />
    </svg>
  );
};
