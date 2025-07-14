import React, { useEffect, useRef } from "react";

export default function JogTracker({ isPaused }) {
  const canvasRef = useRef(null);
  const coordsRef = useRef([]);
  const watchIdRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Responsive canvas size
    const parentWidth = canvas.parentElement.offsetWidth;
    canvas.width = parentWidth;
    canvas.height = 400;

    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;

    if (!isPaused) {
      watchIdRef.current = navigator.geolocation.watchPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          coordsRef.current.push({ lat: latitude, lng: longitude });

          if (coordsRef.current.length > 1) {
            const prev = coordsRef.current[coordsRef.current.length - 2];
            const curr = coordsRef.current[coordsRef.current.length - 1];

            const scale = parentWidth / 360; // basic responsive scaling
            ctx.beginPath();
            ctx.moveTo((prev.lng + 180) * scale, (90 - prev.lat) * scale);
            ctx.lineTo((curr.lng + 180) * scale, (90 - curr.lat) * scale);
            ctx.stroke();
          }
        },
        (err) => console.error(err),
        { enableHighAccuracy: true }
      );
    }

    return () => {
      if (watchIdRef.current !== null) {
        navigator.geolocation.clearWatch(watchIdRef.current);
      }
    };
  }, [isPaused]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "auto",
        border: "1px solid black",
        maxWidth: "100%",
      }}
    />
  );
}
