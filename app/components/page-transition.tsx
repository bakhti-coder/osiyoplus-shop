"use client";

import { motion } from "framer-motion";
import React from "react";

export function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          translateY: 20, // Yonida boshlanadi
        }}
        exit={{
          opacity: 0,
          translateY: -20, // Tepaga chiqib ketadi
        }}
        animate={{
          opacity: 1,
          translateY: 0, // O'rtasiga o'tadi
        }}
        transition={{
          duration: 0.5,
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
export default PageTransitionProvider;
