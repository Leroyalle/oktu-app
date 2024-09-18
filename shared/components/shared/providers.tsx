import NextTopLoader from 'nextjs-toploader';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const Providers: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NextTopLoader />
      {children}
    </>
  );
};
