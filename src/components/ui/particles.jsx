"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const Particles = ({
    className,
    color = "#ffffff",
    particleCount = 25000,
    particleSize = 5,
    animate = true,
}) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        let animationFrameId;
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth * window.devicePixelRatio;
            canvas.height = canvas.offsetHeight * window.devicePixelRatio;
            canvas.style.width = canvas.offsetWidth + 'px';
            canvas.style.height = canvas.offsetHeight + 'px';
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        };

        const createParticle = () => ({
            x: Math.random() * (canvas.offsetWidth || window.innerWidth),
            y: Math.random() * (canvas.offsetHeight || window.innerHeight),
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * particleSize + 1,
        });

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(createParticle());
            }
        };

        const updateParticles = () => {
            const canvasWidth = canvas.offsetWidth || window.innerWidth;
            const canvasHeight = canvas.offsetHeight || window.innerHeight;

            particles.forEach((particle) => {
                if (animate) {
                    particle.x += particle.vx;
                    particle.y += particle.vy;

                    // Wrap around edges
                    if (particle.x < 0) particle.x = canvasWidth;
                    if (particle.x > canvasWidth) particle.x = 0;
                    if (particle.y < 0) particle.y = canvasHeight;
                    if (particle.y > canvasHeight) particle.y = 0;
                }
            });
        };

        const drawParticles = () => {
            const canvasWidth = canvas.offsetWidth || window.innerWidth;
            const canvasHeight = canvas.offsetHeight || window.innerHeight;

            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.fillStyle = color;

            particles.forEach((particle) => {
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fill();
            });
        };

        const render = () => {
            updateParticles();
            drawParticles();
            animationFrameId = requestAnimationFrame(render);
        };

        resizeCanvas();
        initParticles();
        render();

        const handleResize = () => {
            resizeCanvas();
            initParticles();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [color, particleCount, particleSize, animate]);

    return (
        <canvas
            ref={canvasRef}
            className={cn("absolute inset-0 w-full h-full pointer-events-none", className)}
            style={{ width: '100%', height: '100%' }}
        />
    );
};
