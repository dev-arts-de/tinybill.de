"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type FadeInProps = {
    children: ReactNode;
    delay?: number;
};

export function FadeIn({ children, delay = 0 }: FadeInProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true, amount: 0.2 }}
        >
            {children}
        </motion.div>
    );
}