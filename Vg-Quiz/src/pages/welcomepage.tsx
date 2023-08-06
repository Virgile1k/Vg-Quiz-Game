import { Link } from "react-router-dom";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function GamePage() {
  return (
    <div className="bg-image h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white mt-10">
        VPLANET GUESS GAME
      </h1>

      <Link to="/play">
        <button
          className="bg-slate-50 shadow-lg border-1 border-white p-8 rounded-full border-2 shadow-lg flex items-center mt-60 w-64 backdrop-opacity-10 backdrop-invert bg-white/30" // Adjust the width class to your desired value
        >
          <PlayArrowIcon sx={{ color: "white", fontSize: 40, mr: 2 }} />
          <span className="text-xl font-bold text-white">Click to Play</span>
        </button>
      </Link>
    </div>
  );
}
