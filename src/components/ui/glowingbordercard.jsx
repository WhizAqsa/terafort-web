"use client";

import React from "react";
import { cn } from "@/lib/utils";

const GlowingBorderCard = ({
    children,
    className,
    fromColor = "purple-600",
    toColor = "purple-600",
    ...props
}) => {
    return (
        <div
            className={cn(
                "relative group rounded-lg overflow-hidden bg-background",
                className
            )}
            {...props}
        >
            {/* Glowing border */}
            <div
                className={cn(
                    "absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    `bg-gradient-to-r from-${fromColor} to-${toColor}`,
                    "p-[2px]"
                )}
                style={{
                    background: `linear-gradient(45deg, var(--${fromColor}), var(--${toColor}))`,
                }}
            >
                <div className="w-full h-full bg-background rounded-lg" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full h-full p-6">
                {children}
            </div>

            {/* Static border */}
            <div className="absolute inset-0 rounded-lg border border-border" />
        </div>
    );
};

export default GlowingBorderCard;
