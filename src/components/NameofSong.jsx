function NameofSong({ title, artist }) {
  return (
    <div>
      <h2 className="leading-8 text-2xl font-bold mb-2">{title}</h2>
      <p className="mb-4 text-slate-500">{artist}</p>
    </div>
  );
}

export default NameofSong;