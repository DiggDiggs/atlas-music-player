import TitleImage from "../assets/placeholder.svg";

function CoverArt() {
  return (
    <div className="cover-art mb-6">
      <img
        src={TitleImage}
        alt="Placeholder Cover Art Image"
        className="rounded-md h-96"
      />
    </div>
  );
}

export default CoverArt;