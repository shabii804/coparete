'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  blur?: boolean;
  className?: string;
  once?: boolean;
}

export function Reveal({
  children,
  delay = 0,
  y = 24,
  blur = false,
  className,
  once = true,
}: RevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, filter: blur ? 'blur(10px)' : 'blur(0px)' }}
      animate={inView ? {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
      } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
