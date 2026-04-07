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
        <text x="150" y="30" textAnchor="middle">Flaute</text>
        <text x="450" y="30" textAnchor="middle">Klarineti</text>

        <text x="300" y="100" textAnchor="middle">Saksofoni</text>
        <text x="300" y="160" textAnchor="middle">Trube</text>

        <text x="260" y="220" textAnchor="middle">Tromboni</text>
        <text x="100" y="220" textAnchor="middle">Tube</text>

        <text x="300" y="280" textAnchor="middle">Ritam sekcija</text>
    </svg>
  );
}