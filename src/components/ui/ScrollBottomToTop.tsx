'use client'
import { useEffect, useRef, useState } from 'react';
import Card from './Card';

const AutoScrollCardList2 = ({ reviews }: { reviews: { title: string, icon: string }[] }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const scrollStep = () => {
            if (scrollRef.current && !isPaused) {
           
                scrollRef.current.scrollTop -= 1;

                if (scrollRef.current.scrollTop <= 0) {
                    scrollRef.current.scrollTop = scrollRef.current.scrollHeight / 2;
                }
            }
        };

        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight / 2;
        }

        const intervalId = setInterval(scrollStep, 10); // Adjust the speed here
        return () => clearInterval(intervalId);
    }, [isPaused]);

    // Handle mouse events
    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    return (
        <div
            className="scroll-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={scrollRef}
        >
            <div className="scroll-content">
                {reviews.map((review, index) => (
                    <Card key={index} icon={review.icon} title={review.title} />
                ))}
               
                {reviews.map((review, index) => (
                    <Card key={`${index}-duplicate`} icon={review.icon} title={review.title} />
                ))}
            </div>
        </div>
    );
};

export default AutoScrollCardList2;