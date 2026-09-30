"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { useIsClient } from "@/lib/useIsClient";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export function StaggerReveal({ children, className }: { children: ReactNode; className?: string }) {
  const isClient = useIsClient();
  const prefersReducedMotion = useReducedMotion();
  const reduce = isClient && !!prefersReducedMotion;

  return (
    <motion.div
      className={className}
      variants={reduce ? undefined : container}
      initial={reduce ? false : "hidden"}
      animate={reduce ? "show" : undefined}
      whileInView={reduce ? undefined : "show"}
      viewport={{ once: true, amount: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
