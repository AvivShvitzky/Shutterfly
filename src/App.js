// Libraries and Style
import "./App.css";
import { useEffect } from "react";

// Components
import Gallery from "./components/gallery/Gallery";
import Sidebar from "./components/Sidebar/Sidebar";

// Store
import { useSelector, useDispatch } from "react-redux";
import {
  getDogs,
  getDogsImages,
  selectDogs,
  increaseDogLike,
} from "./store/dogs/dogsSlice";

export default function App() {
  const dispatch = useDispatch();
  const dogs = useSelector(selectDogs);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const dogs = await dispatch(getDogs()).unwrap();
        dispatch(getDogsImages(dogs));
      } catch (err) {
        // handle error
      }
    };
    fetchDogs();
  }, [dispatch]);

  return (
    <div className="App">
      <Sidebar dogs={dogs} />
      <Gallery
        dogs={dogs}
        onImageClick={(breed) => dispatch(increaseDogLike(breed))}
      />
    </div>
  );
}
