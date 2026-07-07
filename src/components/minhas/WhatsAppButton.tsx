'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [show, setShow] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Auto-show tooltip after a delay, then hide
  useEffect(() => {
    if (!show) return;
    const showTimer = setTimeout(() => setTooltipOpen(true), 1500);
    const hideTimer = setTimeout(() => setTooltipOpen(false), 6000);
    return () => { clearTimeout(showTimer); clearTimeout(hideTimer); };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-5 right-5 z-[55] flex items-center gap-2"
        >
          {/* Tooltip / Chat bubble */}
          <AnimatePresence>
            {tooltipOpen && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative hidden sm:block"
              >
                <button
                  onClick={() => setTooltipOpen(false)}
                  aria-label="Close tooltip"
                  className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white border border-[#E2E8F0] inline-flex items-center justify-center text-[#64748B] hover:text-[#0F172A] shadow-soft z-10"
                >
                  <X className="w-3 h-3" />
                </button>
                <div className="px-4 py-3 rounded-2xl bg-white border border-[#E2E8F0] shadow-premium-lg max-w-[220px]">
                  <p className="text-xs font-semibold text-[#0F172A] mb-0.5">💬 Chat with us!</p>
                  <p className="text-[11px] text-[#64748B] leading-relaxed">Have a question? Send us a WhatsApp message — we reply fast.</p>
                  {/* Arrow */}
                  <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rotate-45 bg-white border-r border-t border-[#E2E8F0]" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp button */}
          <motion.a
            href="https://wa.me/9242111222333?text=Hello%20Minhas%20Enterprises,%20I'd%20like%20to%20know%20more%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            {/* Pulse rings */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" style={{ animationDuration: '2s' }} />
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />

            {/* Main button */}
            <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] shadow-[0_8px_24px_rgba(37,211,102,0.4)] inline-flex items-center justify-center group-hover:shadow-[0_12px_32px_rgba(37,211,102,0.5)] transition-shadow">
              {/* Shine */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div
                  className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-30 group-hover:opacity-50 transition-opacity"
                  style={{ background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%)' }}
                />
              </div>
              {/* WhatsApp icon (SVG) */}
              <svg viewBox="0 0 24 24" className="relative w-7 h-7 text-white fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
