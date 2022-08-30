import * as React from 'react';
export const component = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M4 12c.1.5-.3.9-.8 1H3c-.6 0-1-.4-1-1s.4-1 1-1c.5-.1.9.3 1 .8v.2zM3 4.5c-.5-.1-.9.3-1 .8v.2c-.1.5.3.9.8 1H3c.5.1.9-.3 1-.8v-.2c.1-.5-.3-.9-.8-1H3zm0 13c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zM6 5v1h16V5H6zm0 7.5h16v-1H6v1zM6 19h16v-1H6v1z' />
    </svg>
  );
};
