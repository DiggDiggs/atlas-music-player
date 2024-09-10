import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControl from "./VolumeControl";

function CurrentlyPlaying() {
  return (
    <div className="currently-playing w-full justify-center p-4">
      <CoverArt />
      <SongTitle title="Painted in Blue" artist="Soul Canvas" />
      <PlayControls />
      <VolumeControl />
    </div>
  );
}

export default CurrentlyPlaying;
