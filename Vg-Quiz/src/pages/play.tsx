import React from "react";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import gameImage from "../assets/tomcruise.jpg";

interface GamePageProps {
  onAnswerSelected?: (answer: string) => void;
}

const Play: React.FC<GamePageProps> = ({ onAnswerSelected = () => {} }) => {
  return (
    <div className="bg-image h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white ">VPLANET GUESS GAME</h1>

        <img
          src={gameImage}
          className="w-1/2 mx-auto border-4 border-gray-white rounded mt-10"
          alt="Game"
        />

        <div className="text-center ml-80"> {/* Center the radio buttons */}
          <RadioGroup row className="mt-4 text-white ml-40 ">
            <FormControlLabel
              value="a"
              control={<Radio />}
              label="Actor"
              onChange={() => onAnswerSelected("a")}
            />
            <FormControlLabel
              value="b"
              control={<Radio />}
              label="Footballer"
              onChange={() => onAnswerSelected("b")}
            />
            <FormControlLabel
              value="c"
              control={<Radio />}
              label="Politician"
              onChange={() => onAnswerSelected("c")}
            />
            <FormControlLabel
              value="d"
              control={<Radio />}
              label="Creator"
              onChange={() => onAnswerSelected("d")}
            />
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};

export default Play;
