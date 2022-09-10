import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar/NavBar.js";
import { useState} from "react";
import HomePage from "./pages/HomePage";
import useFetch from "./Hooks/useFetch";
import CoursePage from "./pages/CoursePage";
import {Courses} from "./db.js";
import { useRoutes } from "react-router-dom";
import Footer from "./components/Footer";
import { createContext } from "react";
const CourseData = "http://localhost:3005/courses";
export const DataContext = createContext();
function App() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const { data, isLoading, hasError } = useFetch(CourseData);

  // const data=Courses;
  // const isLoading =false
  // const hasError =false;

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchValue !== "") {
      const filteredData = data.filter((item) => {
        return Object.values(item.title)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data);
    }
  };

  let element = useRoutes([
    {
      path: "/udemy-clone-react/",
      element: (
        <>
          <DataContext.Provider value={data}>
            <NavBar searchFunction={searchItems} />
            <HomePage
              isLoading={isLoading}
              hasError={hasError}
              data={searchInput.length !== 0 ? filteredResults : data}
            />
            <Footer />
          </DataContext.Provider>
        </>
      ),
    },
    {
      path: `/udemy-clone-react/course/:id`,
      element: (
        <>
          <DataContext.Provider value={data}>
            <NavBar searchFunction={searchItems} />

            <CoursePage data={data} />
            <Footer />
          </DataContext.Provider>
        </>
      ),
    },
    { path: "*", element: <div>lol</div> },
  ]);
  return element;
}

export default App;
