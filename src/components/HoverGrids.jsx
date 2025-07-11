import { useRef, useEffect } from "react";
import gsap from "gsap";

const HOVER_COLOR = "#FFD230"; // Tailwind amber-200
// className=""


const CubeGrids = ({ rows, cols, width, height, baseColor, startCorner }) => {
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const children = container.querySelectorAll(".dot");

    children.forEach((el) => {
      const box = el.getBoundingClientRect();
      const elX = box.left + box.width / 2 - rect.left;
      const elY = box.top + box.height / 2 - rect.top;

      const dx = mouseX - elX;
      const dy = mouseY - elY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 60;

      if (dist < maxDist) {
        const angle = Math.atan2(dy, dx);
        const force = (maxDist - dist) / 10;

        gsap.to(el, {
          x: -Math.cos(angle) * force,
          y: -Math.sin(angle) * force,
          scale: 1.07,
          backgroundColor: HOVER_COLOR,
          boxShadow: `0 0 4px ${HOVER_COLOR}aa`,
          duration: 0.2,
          ease: "power2.out",
        });
      } else {
        resetDot(el);
      }
    });
  };

  const resetDot = (el) => {
    gsap.to(el, {
      x: 0,
      y: 0,
      scale: 1,
      backgroundColor: baseColor,
      boxShadow: "0 0 0 transparent",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const resetAll = () => {
    const children = containerRef.current.querySelectorAll(".dot");
    children.forEach((el) => resetDot(el));
  };

  useEffect(() => {
    const container = containerRef.current;
    const children = container.querySelectorAll(".dot");

    children.forEach((el, i) => {
      const row = Math.floor(i / cols);
      const col = i % cols;
      const delay = (row + col) * 0.015;

      gsap.fromTo(
        el,
        {
          scale: 0.5,
          opacity: 0.3,
          x: 10,
          y: 10,
          backgroundColor: baseColor,
        },
        {
          scale: 1,
          opacity: 1,
          x: 0,
          y: 0,
          backgroundColor: baseColor,
          boxShadow: `0 0 4px ${HOVER_COLOR}22`,
          delay,
          duration: 0.4,
          ease: "power2.out",
        }
      );
    });
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetAll}
      className="relative grid"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gap: "1px",
      }}
    >
      {Array.from({ length: rows * cols }).map((_, i) => {
        const row = Math.floor(i / cols);
        const col = i % cols;
        let diag;
        switch (startCorner) {
          case "top-left":
            diag = row + col;
            break;
          case "top-right":
            diag = row + (cols - col - 1);
            break;
          case "bottom-left":
            diag = rows - row - 1 + col;
            break;
          case "bottom-right":
            diag = rows - row - 1 + (cols - col - 1);
            break;
          default:
            diag = row + col;
        }

        const sizeScale = 1 - diag * 0.01;
        const size = Math.max(2, 10 * sizeScale);

        return (
          <div
            key={i}
            className="dot rounded-sm"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: baseColor,
              transition: "all 0.2s ease-out",
            }}
          />
        );
      })}
    </div>
  );
};

export default CubeGrids;
