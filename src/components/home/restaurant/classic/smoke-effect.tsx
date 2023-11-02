"use client";
import { FC, useEffect, useRef } from "react";
import { CSSProperties } from "react"; // Import CSSProperties type

const SmokeEffect: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<{ x: number; y: number; size: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let i = 0; i < 100; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: canvas.height,
        size: Math.random() * 5 + 1,
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        particle.y -= 1;

        if (particle.y < 0) {
          particle.y = canvas.height;
          particle.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="vapour">
      <span style={{ "--i" : 1 } as CSSProperties}></span>
      <span style={{ "--i" : 3 } as CSSProperties}></span>
      <span style={{ "--i" : 16 } as CSSProperties}></span>
      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
};

export default SmokeEffect;
