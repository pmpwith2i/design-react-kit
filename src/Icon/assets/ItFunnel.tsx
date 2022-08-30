import * as React from 'react';
export const component = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M14 22h-1v-8.6L20 3H4l7 10.4V22h-1v-8.4L2 2h20l-8 11.6V22z' />
    </svg>
  );
};
