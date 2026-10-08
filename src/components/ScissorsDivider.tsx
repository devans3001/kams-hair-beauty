"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** SVG animation: scissors draw themselves as you scroll, then snip. */
export default function ScissorsDivider() {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const paths = gsap.utils.toArray<SVGPathElement>(".snip-path");
      paths.forEach((p) => {
        const len = p.getTotalLength();
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
      });
      gsap.to(paths, {
        strokeDashoffset: 0,
        ease: "none",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 88%",
          end: "top 55%",
          scrub: 1,
        },
      });
      // the snip: blades rotate shut at the end of the draw
      gsap.to(".blade-top", {
        rotate: 14,
        transformOrigin: "70px 62px",
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 60%",
          end: "top 40%",
          scrub: 1,
        },
      });
      gsap.to(".blade-bottom", {
        rotate: -14,
        transformOrigin: "70px 62px",
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 60%",
          end: "top 40%",
          scrub: 1,
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="mx-auto my-4 max-w-3xl px-6" aria-hidden="true">
      <svg viewBox="0 0 400 100" className="w-full" fill="none">
        <path
          className="snip-path"
          d="M10 50 H 250"
          stroke="#c9a227"
          strokeWidth="2"
          strokeDasharray="6 6"
          opacity="0.7"
        />
        <g className="blade-top">
          <path
            className="snip-path"
            d="M250 50 L330 18"
            stroke="#171310"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </g>
        <g className="blade-bottom">
          <path
            className="snip-path"
            d="M250 50 L330 82"
            stroke="#171310"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </g>
        <circle className="snip-path" cx="342" cy="14" r="9" stroke="#c9a227" strokeWidth="4" />
        <circle className="snip-path" cx="342" cy="86" r="9" stroke="#c9a227" strokeWidth="4" />
        <path
          className="snip-path"
          d="M368 50 h22"
          stroke="#c9a227"
          strokeWidth="2"
          opacity="0.7"
        />
      </svg>
    </div>
  );
}
