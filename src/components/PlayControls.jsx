// PlayControls Component
import React, { useState } from "react";
import backwardSVG from "../assets/backward.svg";
import playSVG from "../assets/play.svg";
import forwardSVG from "../assets/forward.svg";
import repeatSVG from "../assets/repeat.svg";
import shuffleSVG from "../assets/shuffle.svg";
import repeatOneSVG from "../assets/repeat-one.svg";
import pauseSVG from "../assets/pause.svg";

function PlayControls({ playNext, playPrevious }) {
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [playbackMode, setPlaybackMode] = useState("repeat-all");
  const [playbackSVG, setPlaybackSVG] = useState(repeatSVG);
  const [playStatus, setPlayStatus] = useState(true);

  function handlePlaybackToggle() {
    console.log("Playback mode toggled");
    if (playbackMode === "repeat-all") {
      setPlaybackMode("repeat-one");
      setPlaybackSVG(repeatOneSVG);
    } else if (playbackMode === "repeat-one") {
      setPlaybackMode("shuffle");
      setPlaybackSVG(shuffleSVG);
    } else {
      setPlaybackMode("repeat-all");
      setPlaybackSVG(repeatSVG);
    }
  }

  function togglePlayStatus() {
    setPlayStatus((prevStatus) => !prevStatus);
  }

  function togglePlaybackSpeed() {
    setPlaybackSpeed((prevSpeed) => {
      if (prevSpeed < 2) {
        return parseFloat((prevSpeed + 0.25).toFixed(2));
      } else {
        return 0.5;
      }
    });
  }

  return (
    <div className="player-controls mb-4 flex items-center justify-between">
      <button className="btn-playcontrols" onClick={togglePlaybackSpeed}>
        <span className="text-vista-blue-800 text-lg font-medium">
          {playbackSpeed}x
        </span>
      </button>
      <button
        className="btn-playcontrols"
        onClick={playPrevious}
        disabled={!playStatus}
      >
        <img src={backwardSVG} alt="Previous Button" className="size-6" />
      </button>
      <button className="btn-playcontrols" onClick={togglePlayStatus}>
        <img
          src={playStatus ? pauseSVG : playSVG}
          alt="Play/Pause Button"
          className="size-6"
        />
      </button>
      <button
        className="btn-playcontrols"
        onClick={playNext}
        disabled={!playStatus}
      >
        <img src={forwardSVG} alt="Next Button" className="size-6" />
      </button>

      <button className="btn-playcontrols" onClick={handlePlaybackToggle}>
        <img src={playbackSVG} alt="Playback Mode Button" className="size-6" />
      </button>
    </div>
  );
}

export default PlayControls;
