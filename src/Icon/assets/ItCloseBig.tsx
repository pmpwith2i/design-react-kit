import * as React from 'react';
export const component = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M12.7 12l6.7 6.6-.8.8-6.6-6.7-6.6 6.7-.8-.8 6.7-6.6-6.7-6.6.8-.8 6.6 6.7 6.6-6.7.8.8-6.7 6.6z' />
    </svg>
  );
};
