"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { useIsClient } from "@/lib/useIsClient";

export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const isClient = useIsClient();
  const prefersReducedMotion = useReducedMotion();
  const reduce = isClient && !!prefersReducedMotion;

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
