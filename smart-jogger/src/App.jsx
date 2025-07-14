import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JogTracker from "./components/JogTracker";
import StatsPanel from "./components/StatsPanel";
import NetworkStatus from "./components/NetworkStatus";

function App() {
  const [isPaused, setIsPaused] = useState(false);

  const handlePause = () => {
    console.log("⏸️ Auto-paused (simulated)");
    setIsPaused(true);
  };

  const handleResume = () => {
    console.log("▶️ Auto-resumed (simulated)");
    setIsPaused(false);
  };

  return (
    <div>
      <Header />
      <NetworkStatus />
      <JogTracker isPaused={isPaused} />
      <StatsPanel onPause={handlePause} onResume={handleResume} />
      <button onClick={() => setIsPaused((prev) => !prev)}>
        {isPaused ? "Resume" : "Pause"}
      </button>
      <Footer />
    </div>
  );
}

export default App;