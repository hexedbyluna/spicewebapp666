import { useState, useEffect } from "react";
import AgeGate from "@/components/AgeGate";
import Home from "@/pages/Home";

const Index = () => {
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("spice_age_verified");
    if (stored === "true") setVerified(true);
  }, []);

  const handleVerified = () => {
    sessionStorage.setItem("spice_age_verified", "true");
    setVerified(true);
  };

  if (!verified) {
    return <AgeGate onVerified={handleVerified} />;
  }

  return <Home />;
};

export default Index;
