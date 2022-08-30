import * as React from 'react';
export const component = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M16.5 12H16V6c0-2.2-1.8-4-4-4S8 3.8 8 6v3h1V6c0-1.7 1.3-3 3-3s3 1.3 3 3v6H7.5c-.6 0-1.1.5-1.1 1.1v6.8c0 .6.5 1.1 1.1 1.1h9c.6 0 1.1-.5 1.1-1.1v-6.8c0-.6-.5-1.1-1.1-1.1zm.1 7.9c0 .1 0 .1-.1.1h-9c-.1 0-.1 0-.1-.1v-6.8h9.2v6.8zM13 15.5c0 .3-.2.7-.5.8v1.5h-1v-1.5c-.3-.1-.5-.5-.5-.8 0-.6.4-1 1-1s1 .4 1 1z' />
    </svg>
  );
};
