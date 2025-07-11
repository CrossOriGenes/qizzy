import { useRef } from "react";
import gsap from "gsap";

const MagneticHover = ({ className, children }) => {
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const children = container.querySelectorAll(".magnetic");

    children.forEach((el) => {
      const box = el.getBoundingClientRect();
      const elX = box.left + box.width / 2 - rect.left;
      const elY = box.top + box.height / 2 - rect.top;

      const dx = mouseX - elX;
      const dy = mouseY - elY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 100;

      if (dist < maxDist) {
        const angle = Math.atan2(dy, dx);
        const force = (maxDist - dist) / 6;

        gsap.to(el, {
          x: -Math.cos(angle) * force,
          y: -Math.sin(angle) * force,
          duration: 0.2,
          ease: "power3.out",
        });
      } else {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: "power3.out",
        });
      }
    });
  };

  const resetAll = () => {
    const children = containerRef.current.querySelectorAll(".magnetic");
    children.forEach((el) => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: "power3.out",
      });
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetAll}
      className={className}
    >
      {children}
    </div>
  );
};

export default MagneticHover;
