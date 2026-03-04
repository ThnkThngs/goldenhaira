import { useState, useEffect } from 'react';

interface Spark {
  id: number;
  x: number;
  y: number;
}

const ClickSpark = () => {
  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newSpark: Spark = { id: Date.now(), x: e.clientX, y: e.clientY };
      setSparks((prev) => [...prev, newSpark]);
      setTimeout(() => {
        setSparks((prev) => prev.filter((spark) => spark.id !== newSpark.id));
      }, 800);
    };
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {sparks.map((spark) => (
        <div key={spark.id} className="absolute" style={{ left: spark.x, top: spark.y }}>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary"
              style={{
                animation: `spark-fly-${i} 0.6s ease-out forwards`,
              }}
            />
          ))}
        </div>
      ))}
      <style>{`
        ${[0, 1, 2, 3, 4, 5].map(i => {
          const angle = (i * 60) * (Math.PI / 180);
          const x = Math.cos(angle) * 30;
          const y = Math.sin(angle) * 30;
          return `@keyframes spark-fly-${i} {
            0% { transform: translate(0, 0); opacity: 1; }
            100% { transform: translate(${x}px, ${y}px); opacity: 0; }
          }`;
        }).join('\n')}
      `}</style>
    </div>
  );
};

export default ClickSpark;
