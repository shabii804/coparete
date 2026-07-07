'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LOADING_MESSAGES = [
  'Preparing Experience...',
  'Loading Content...',
  'Building Your Experience...',
  'Almost Ready...',
  'Welcome to Minhas Enterprises',
];

const COMPANY_NAME = 'MINHAS ENTERPRISES';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const stage1 = setTimeout(() => setStage(1), 100);
    const stage2 = setTimeout(() => setStage(2), 900);
    const stage3 = setTimeout(() => setStage(3), 2200);
    const stage4 = setTimeout(() => setStage(4), 2400);
    const stage5 = setTimeout(() => setStage(5), 5200);
    const finish = setTimeout(() => {
      setDone(true);
      onComplete();
    }, 6000);
    return () => {
      [stage1, stage2, stage3, stage4, stage5, finish].forEach(clearTimeout);
    };
  }, [onComplete]);

  useEffect(() => {
    if (stage < 3) return;
    const id = setInterval(() => {
      setMessageIndex((i) => (i + 1) % LOADING_MESSAGES.length);
    }, 850);
    return () => clearInterval(id);
  }, [stage]);

  useEffect(() => {
    if (stage < 4) return;
    const id = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(id); return 100; }
        return Math.min(100, p + Math.random() * 9 + 3);
      });
    }, 110);
    return () => clearInterval(id);
  }, [stage]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(8px)' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(120deg, #FFFFFF 0%, #F8FAFC 35%, #FFFFFF 65%, #EFF6FF 100%)',
              backgroundSize: '300% 300%',
              animation: 'gradient-shift 12s ease infinite',
            }}
          />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-[34rem] h-[34rem] rounded-full opacity-25 blur-3xl"
              style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.55) 0%, transparent 70%)' }} />
            <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] rounded-full opacity-20 blur-3xl"
              style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.55) 0%, transparent 70%)' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[22rem] h-[22rem] rounded-full opacity-10 blur-3xl"
              style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.5) 0%, transparent 70%)' }} />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.4 }}
              animate={stage >= 1 ? { opacity: 1, scale: 1, y: [0, -10, 0] } : {}}
              transition={{
                opacity: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
                scale: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
                y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
              }}
            >
              <div className="absolute inset-0 -m-6 rounded-full blur-2xl"
                style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.55), transparent 70%)' }} />
              <div className="relative w-28 h-28 rounded-[28px] overflow-hidden shadow-glow-blue">
                <img src="/minhas-logo.svg" alt="Minhas Enterprises" className="w-full h-full object-contain" />
              </div>
            </motion.div>

            <div className="mt-8 flex overflow-hidden">
              {COMPANY_NAME.split('').map((ch, i) => (
                <span
                  key={i}
                  className="inline-block text-2xl md:text-4xl font-bold tracking-[0.32em]"
                  style={{
                    color: '#0F172A',
                    fontFamily: 'var(--font-display), sans-serif',
                    opacity: 0,
                    animation: stage >= 2
                      ? `letter-reveal 0.55s cubic-bezier(0.16,1,0.3,1) ${0.04 * i}s forwards`
                      : 'none',
                  }}
                >
                  {ch === ' ' ? '\u00A0' : ch}
                </span>
              ))}
            </div>

            <motion.p
              className="mt-3 text-xs uppercase tracking-[0.45em] text-[#94A3B8] font-medium"
              initial={{ opacity: 0, y: 8 }}
              animate={stage >= 2 ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              Building Tomorrow, Today
            </motion.p>

            <div className="h-6 mt-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={messageIndex}
                  className="text-sm text-[#475569] font-medium"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  {LOADING_MESSAGES[messageIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#E2E8F0] overflow-hidden">
            <motion.div
              className="h-full"
              style={{
                background: 'linear-gradient(90deg, #2563EB 0%, #10B981 50%, #F59E0B 100%)',
                backgroundSize: '200% 100%',
              }}
              initial={{ width: '0%', backgroundPosition: '0% 50%' }}
              animate={stage >= 4
                ? { width: `${progress}%`, backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }
                : {}}
              transition={{
                width: { duration: 0.3, ease: 'easeOut' },
                backgroundPosition: { duration: 2, repeat: Infinity, ease: 'linear' },
              }}
            />
          </div>

          <div className="absolute bottom-6 right-8 text-xs tabular-nums text-[#94A3B8] font-medium">
            {stage >= 4 ? `${Math.round(progress)}%` : ''}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
