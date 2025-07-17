"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date(Date.UTC(2025, 6, 30, 9, 0, 0));

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) return null;

    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = calculateTimeLeft();
      setTimeLeft(updated);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return <div className="text-xl font-semibold">Time's up!</div>;

  return (
    <div className="flex justify-center items-center text-orange border-2 border-white/10 px-10 text-4xl font-semibold z-20 bg-white/10 backdrop-blur-md h-40 rounded-2xl shadow-orange shadow-lg/20">
      {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
    </div>
  );
}
