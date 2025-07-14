import React, { useEffect, useState } from "react";

export default function NetworkStatus() {
  const [networkType, setNetworkType] = useState("unknown");

  useEffect(() => {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (connection) {
      setNetworkType(connection.effectiveType);
    }
  }, []);

  return <p>📶 Network Type: {networkType}</p>;
}