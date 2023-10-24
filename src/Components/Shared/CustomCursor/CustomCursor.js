import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div className="custom-cursor z-50" style={{ left: position.x, top: position.y }}>
      {/* Customize the cursor appearance using Tailwind CSS classes */}
      <div className=" rounded-full"></div>
    </div>
  );
};

export default CustomCursor;
