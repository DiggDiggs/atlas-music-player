// Music Player Component
import CurrentlyPlaying from "./components/CurrentlyPlaying";
import Playlist from "./components/Playlist";

export default function MusicPlayer() {
  return (
    <div className="from-steel-blue-100 ml-auto mr-auto flex h-full w-full max-w-4xl flex-col justify-center overflow-hidden rounded-lg bg-gradient-to-b to-emerald-500 p-0 shadow-lg md:flex md:flex-row">
      <CurrentlyPlaying />
      <Playlist />
    </div>
  );
}
