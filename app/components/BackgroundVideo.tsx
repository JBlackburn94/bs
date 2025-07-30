"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BackgroundVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const video = videoRef.current;
    if (!video) return;

    const once = (
      el: EventTarget,
      event: string,
      fn: EventListenerOrEventListenerObject
    ) => {
      const onceFn = function (e: Event) {
        el.removeEventListener(event, onceFn);
        typeof fn === "function" && fn(e);
      };
      el.addEventListener(event, onceFn);
    };

    // iOS unlock trick to allow video control
    once(document.documentElement, "touchstart", () => {
      video
        .play()
        .then(() => video.pause())
        .catch(() => {});
    });

    const handleScrollScrub = () => {
      const duration = video.duration || 1;
      const scrubObject = { frame: 0 };

      gsap.to(scrubObject, {
        frame: duration,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          onUpdate: () => {
            if (video.readyState >= 2) {
              video.currentTime = scrubObject.frame;
            }
          },
        },
      });
    };

    video.addEventListener("loadedmetadata", handleScrollScrub);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      video.removeEventListener("loadedmetadata", handleScrollScrub);
    };
  }, [isClient]);

  if (!isClient) return null;

  return (
    <div ref={containerRef} className="fixed top-0 -z-10 h-screen w-full">
      <video
        muted
        preload="auto"
        ref={videoRef}
        playsInline
        className="h-full w-full object-cover object-center"
        onLoadedData={() => console.log("Video loaded")}
        onError={(e) => console.error("Video failed to load", e)}
      >
        <source src="/output.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
