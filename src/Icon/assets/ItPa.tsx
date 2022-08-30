import * as React from 'react';
export const component = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M3 21h18v1H3v-1zm0-1h18v-1H3v1zM22 9H2l10-7 10 7zM5.2 8h13.6L12 3.2 5.2 8zM6 18v-8H5v8h1zm4 0v-8H9v8h1zm5 0v-8h-1v8h1zm4 0v-8h-1v8h1z' />
    </svg>
  );
};
