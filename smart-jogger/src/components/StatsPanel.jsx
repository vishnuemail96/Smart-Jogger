import React, { useEffect, useRef } from "react";

export default function StatsPanel({ onPause, onResume }) {
  const panelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("📥 Stats panel in view - auto pause triggered");
          onPause();
        } else {
          console.log("📤 Stats panel out of view - auto resume triggered");
          onResume();
        }
      },
      { threshold: 0.5 }
    );

    if (panelRef.current) {
      observer.observe(panelRef.current);
    }

    return () => observer.disconnect();
  }, [onPause, onResume]);

  return (
    <div ref={panelRef} style={{ height: "200px", margin: "50px 0", background: "#eee" }}>
      <h2>📊 Stats Panel</h2>
      <p>When this is in view, tracking is auto-paused.</p>
    </div>
  );
}