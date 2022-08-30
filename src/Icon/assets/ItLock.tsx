import * as React from 'react';
export const component = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M18.5 8.5H17V8c0-2.8-2.2-5-5-5S7 5.2 7 8v.5H5.5C4.7 8.5 4 9.2 4 10v8.5c0 .8.7 1.5 1.5 1.5h13c.8 0 1.5-.7 1.5-1.5V10c0-.8-.7-1.5-1.5-1.5zM8 8c0-2.2 1.8-4 4-4s4 1.8 4 4v.5H8V8zm11 10.5c0 .3-.2.5-.5.5h-13c-.3 0-.5-.2-.5-.5V10c0-.3.2-.5.5-.5h13c.3 0 .5.2.5.5v8.5z' />
      <path d='M12 13.3c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1m0-1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' />
    </svg>
  );
};
