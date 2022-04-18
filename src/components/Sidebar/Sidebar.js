import "./Sidebar.css";

export default function Sidebar({ dogs }) {
  return (
    <div className="sidebar">
      {Object.keys(dogs).map((breed) => {
        return (
          <div className="sidebar__item" key={breed}>
            {breed}
            <div>Likes: {dogs[breed].likes}</div>
          </div>
        );
      })}
    </div>
  );
}
