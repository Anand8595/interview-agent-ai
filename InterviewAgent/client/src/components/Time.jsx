import React from "react";
import { Flat } from "@alptugidin/react-circular-progress-bar";

function Timer({ timeLeft, totalTime }) {
  const percentage = (timeLeft / totalTime) * 100;

  return (
    <div className="w-20 h-20">
      <Flat
        progress={percentage}
        text={`${timeLeft}s`}
        showValue={false}
        sx={{
          barWidth: 8,
          strokeColor: "#10b981",
          bgStrokeColor: "#e5e7eb",
          shape: "full",
          strokeLinecap: "round",
          textSize: 13,
          textColor: "#ef4444",
          valueAnimation: true,
        }}
      />
    </div>
  );
}

export default Timer;