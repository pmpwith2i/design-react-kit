import * as React from 'react';
export const component = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M12 18c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1c-.1-.5.3-.9.8-1h.2m0-1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1c-.1-.5.3-.9.8-1h.2m0-1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c.5-.1.9.3 1 .8V5c0 .6-.4 1-1 1s-1-.4-1-1c-.1-.5.3-.9.8-1h.2m0-1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' />
    </svg>
  );
};
