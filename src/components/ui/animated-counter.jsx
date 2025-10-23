"use client";

import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

export const AnimatedCounter = ({
    end,
    suffix = "",
    prefix = "",
    duration = 2.5,
    className = "",
    separator = "",
    preserveValue = false
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setIsVisible(true);
                    setHasAnimated(true);
                }
            },
            {
                threshold: 0.3,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        const currentRef = counterRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [hasAnimated]);

    return (
        <span ref={counterRef} className={className}>
            {isVisible ? (
                <CountUp
                    start={0}
                    end={end}
                    duration={duration}
                    separator={separator}
                    prefix={prefix}
                    suffix={suffix}
                    preserveValue={preserveValue}
                />
            ) : (
                `${prefix}0${suffix}`
            )}
        </span>
    );
};
