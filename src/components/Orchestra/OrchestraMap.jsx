import "./orchestra.css";
import { useState } from "react";

export default function OrchestraMap({ seats, onSeatClick }) {
    const [hoveredSeat, setHoveredSeat] = useState(null);
    
  return (
    <svg viewBox="0 0 600 350" className="orchestra">
      {seats.map(seat => (
        <circle
          key={seat.id}
          cx={seat.x}
          cy={seat.y}
          r={hoveredSeat === seat.id ? 16 : 12}
          fill={seat.musician ? "#4CAF50" : "#ccc"}
          onClick={() => onSeatClick(seat)}
          className="seat"
          onMouseEnter={() => setHoveredSeat(seat.id)}
          onMouseLeave={() => setHoveredSeat(null)}
        />
      ))}
    </svg>
  );
}