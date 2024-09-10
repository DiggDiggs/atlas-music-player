// the items in playlist

function PlayListItem({ title, artist, length }) {
  return (
    <div className="mb-2 flex w-full justify-between pr-3 font-medium">
      <div className="wrapper text-left text-sm">
        <div className="text-base">{title}</div>
        <div className="text-emerald:-800">{artist}</div>
      </div>
      <div className="length flex items-center">
        <div className="text-emerald:-800 text-sm">{length}</div>
      </div>
    </div>
  );
}
export default PlayListItem;
