'use client';
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
}

export const AnimateBlock: React.FC<Props> = ({ duration = 1, delay = 0, children, className }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration,
        delay,
        ease: 'easeInOut',
      }}>
      {children}
    </motion.div>
  );
};
