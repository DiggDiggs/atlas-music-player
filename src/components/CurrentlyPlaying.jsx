import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControl from "./VolumeControl";

function CurrentlyPlaying() {
    return (
        <div className="currently-playing">
            <CoverArt />
            <SongTitle />
            <PlayControls />
            <VolumeControl />
        </div>
    )
}

export default CurrentlyPlaying;