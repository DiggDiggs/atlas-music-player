import PlayListItem from "./PlayListItem";

function PlayList() {
    const playListNames = [
        { title: 'painting in Ble', artist: "soul Canvads", length: "5:55" },
        { title: 'painting in Ble', artist: "soul Canvads", length: "5:55" },
        { title: 'painting in Ble', artist: "soul Canvads", length: "5:55" },
        { title: 'painting in Ble', artist: "soul Canvads", length: "5:55" },
        { title: 'painting in Ble', artist: "soul Canvads", length: "5:55" },
        { title: 'painting in Ble', artist: "soul Canvads", length: "5:55" },
        { title: 'painting in Ble', artist: "soul Canvads", length: "5:55" },
        { title: 'painting in Ble', artist: "soul Canvads", length: "5:55" },
        {
            title: 'painting in Ble', 
            artist: "soul Canvads", 
            length: "5:55"
        },
    ];

    return (
        <div className="p-8 w-full border-t md:border-l md:border-t-0">
            <h2 className="mb-4 text-lg font-semibold">Playlist</h2>
            {playListNames.map((item) => (
                <PlayListItem
                    key={item.title}
                    title={item.title}
                    artist={item.artist}
                    length={item.length}
                />
            ))}
        </div>
    );
}

export default PlayList;