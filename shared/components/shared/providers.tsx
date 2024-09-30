'use client';
import { cn } from '@/shared/lib/utils';
import { useVisionModeStore } from '@/shared/store';
import NextTopLoader from 'nextjs-toploader';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const Providers: React.FC<Props> = ({ children }) => {
  const { isVisionMode } = useVisionModeStore();
  return (
    <div className={cn(isVisionMode && 'visionMode')}>
      <NextTopLoader />
      {children}
    </div>
  );
};
