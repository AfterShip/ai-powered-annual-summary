import React, { useEffect, useRef } from 'react';

export default function MatrixRain() {
  const canvasRef = React.useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Character set for matrix rain
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZaftershiplogisticstrackingdata'.split('');
    const drops = Array(Math.ceil(window.innerWidth / 20)).fill(0);

    // Draw matrix rain
    function draw() {
      // Use brand orange color with low opacity for fade effect
      ctx.fillStyle = 'rgba(255, 107, 43, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // White characters
      ctx.fillStyle = '#fff';
      ctx.font = '20px monospace';

      drops.forEach((y, i) => {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * 20;
        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 20;
      });
    }

    // Animation loop
    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
} 