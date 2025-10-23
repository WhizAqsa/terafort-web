"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import clsx from "clsx";

/**
 * ParallaxCards Component
 * @param {Array} cards - [{ content, lightBg, darkBg }]
 */
export default function ParallaxCards({ cards }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });
    const moveY = useTransform(
        scrollYProgress,
        [0, 1],
        [`${index * 50}px`, `${-index * 120}px`]
    );
    const scale = useTransform(
        scrollYProgress,
        [0, 0.2, 1],
        [1 - index * 0.05, 1 - index * 0.2, 1 - index * 0.25]
    );
    const opacity = useTransform(
        scrollYProgress,
        [0, 0.1 * (index + 1), 0.1 * (index + 2), 1],
        [1, 1, 0.4, 0.2]
    );

    return (
        <div
            ref={containerRef}
            className="relative h-[300vh] flex flex-col items-center justify-center"
        >
            {/* Sticky Section */}
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-visible">
                {cards.map((card, index) => {

                    return (
                        <motion.div
                            key={index}
                            style={{
                                y: moveY,
                                scale,
                                opacity,
                                zIndex: cards.length - index,
                            }}
                            className={clsx(
                                "absolute w-[90%] md:w-[70%] lg:w-[60%] h-[420px] rounded-3xl shadow-2xl border transition-all duration-500 flex flex-col items-center justify-center text-center",
                                card.lightBg,
                                card.darkBg
                            )}
                        >
                            {card.content}
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
