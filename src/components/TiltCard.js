import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

const TiltCard = ({
  children,
  maxTilt = 10,
  glare = true,
  className = "",
  style = {},
  ...rest
}) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(clamp(px, -0.5, 0.5));
    y.set(clamp(py, -0.5, 0.5));
  };

  const handleMouseLeave = () => {
    animate(x, 0, { type: "spring", stiffness: 200, damping: 20 });
    animate(y, 0, { type: "spring", stiffness: 200, damping: 20 });
  };

  return (
    <motion.div
      ref={ref}
      className={`tilt-card ${className}`}
      style={{ perspective: 1000, ...style }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}>
        {glare && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "inherit",
              background:
                "radial-gradient(600px 200px at 50% -20%, rgba(255,255,255,0.15), transparent 60%)",
              pointerEvents: "none",
            }}
          />
        )}
        <div style={{ transform: "translateZ(40px)" }}>{children}</div>
      </motion.div>
    </motion.div>
  );
};

export default TiltCard;
