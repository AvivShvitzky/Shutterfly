import "./Gallery.css";

export default function Gallery({ dogs, onImageClick }) {
  return (
    <div className="gallery">
      {Object.keys(dogs).map((breed) => {
        return (
          <div onClick={() => onImageClick(breed)} key={breed}>
            {breed}
            <img src={dogs[breed].image} alt="dog" />
          </div>
        );
      })}
    </div>
  );
}
