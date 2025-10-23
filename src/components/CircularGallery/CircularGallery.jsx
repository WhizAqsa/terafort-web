import React, { useEffect, useRef } from "react";
import styles from "./CircularGallery.module.scss";




export default function CircularGallery({
    items,
    bend = 3,
    scrollSpeed = 2,
    scrollEase = 0.05
}) {
    const containerRef = useRef(null);
    const angleStep = (2 * Math.PI) / items.length;

    useEffect(() => {
        const container = containerRef.current;
        const cards = container.querySelectorAll(`.${styles.circularCard}`);
        let scroll = 0;
        let target = 0;
        let last = 0;

        const lerp = (a, b, t) => a + (b - a) * t;

        function update() {
            scroll = lerp(scroll, target, scrollEase);
            const angleOffset = scroll * 0.002 * bend;

            // Use a smaller fixed radius for better viewport fit
            const radius = 450;

            cards.forEach((card, i) => {
                const angle = i * angleStep + angleOffset;
                const x = Math.sin(angle) * radius;
                const z = Math.cos(angle) * radius;
                const scale = 0.7; // Scale down cards to fit better

                // Only show front 3 cards (hide back cards)
                const normalizedAngle = ((angle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
                const isVisible = normalizedAngle < Math.PI * 0.6 || normalizedAngle > Math.PI * 1.4;
                card.style.opacity = isVisible ? 1 : 0;

                card.style.transform = `
          translate3d(${x}px, 0, ${z}px)
          scale(${scale})
          rotateY(${angle * 57.3}deg)
        `;
                card.style.visibility = isVisible ? 'visible' : 'hidden';
            });

            last = scroll;
            requestAnimationFrame(update);
        }

        function onWheel(e) {
            target += (e.deltaY > 0 ? 1 : -1) * 60 * scrollSpeed;
        }

        container.addEventListener("wheel", onWheel);
        update();

        return () => {
            container.removeEventListener("wheel", onWheel);
        };
    }, [items, bend, scrollEase, scrollSpeed, angleStep]);

    return (
        <div className={styles.circularGalleryWrapper}>
            <div className={styles.circularGallery} ref={containerRef}>
                {items.map((item, i) => (
                    <div className={styles.circularCard} key={i}>
                        <div className={styles.icon}>
                            <i className={item.icon}></i>
                        </div>
                        <div className={styles.category}>{item.category}</div>
                        <h4 className={styles.title}>{item.title}</h4>
                        <p className={styles.desc}>{item.description}</p>
                        <div className={styles.link}>
                            Learn More <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
