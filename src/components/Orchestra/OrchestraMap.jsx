import "./orchestra.css";
import { useState } from "react";

export default function OrchestraMap({ seats, onSeatClick }) {
    const [hoveredSeat, setHoveredSeat] = useState(null);
    
  return (
    <svg viewBox="0 0 600 500" className="orchestra">
      {(seats || []).map(seat => (
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
        <text x="300" y="30" textAnchor="middle">Dirigent</text>
        <text x="150" y="70" textAnchor="middle">Flaute</text>
        <text x="450" y="70" textAnchor="middle">Klarineti</text>

        <text x="150" y="120" textAnchor="middle">Eufoni</text>
        <text x="390" y="120" textAnchor="middle">Saksofoni</text>
        <text x="400" y="200" textAnchor="middle">Trube</text>

        <text x="120" y="200" textAnchor="middle">Tromboni</text>
        <text x="120" y="300" textAnchor="middle">Tube</text>

        <text x="120" y="400" textAnchor="middle">Bubnjevi</text>
        <text x="350" y="400" textAnchor="middle">Ritam sekcija</text>
    </svg>
  );
}