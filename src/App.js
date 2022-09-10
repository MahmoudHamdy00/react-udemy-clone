import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar/NavBar.js";
import HomePage from "./pages/HomePage";
import useFetch from "./Hooks/useFetch";
import CoursePage from "./pages/CoursePage";
import { Courses } from "./db.js";
import { useNavigate, useRoutes, useSearchParams } from "react-router-dom";
import Footer from "./components/Footer";
import { createContext, useCallback, useEffect, useState } from "react";
const CourseData = "http://localhost:3005/courses";
export const DataContext = createContext();
function App() {
  const Data = useFetch(CourseData);
  // const data=Courses;
  // const isLoading =false
  // const hasError =false;

  let [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("query") ?? ""
  );
  const navigator = useNavigate();
  const searchItems = useCallback(
    (searchValue) => {
      if (searchValue !== "") {
        const filteredData = Data?.data?.filter((item) => {
          return Object.values(item.title)
            .join("")
            .toLowerCase()
            .includes(searchValue.toLowerCase());
        });
        Data.data = filteredData;
              //left commented to get review for this way
        // if (window.location.pathname !== "/react-udemy-clone/") {
        //   window.location.pathname = "/react-udemy-clone/";
        //   console.log("object :>> ");
        // }
        //  if()
        // navigator({
        //   pathname: "/react-udemy-clone/",
        //   search: `?query=${searchQuery}`,
        // });
      }
    },
    [searchQuery, Data]
  );
  // console.log("searchQuery :>> ", searchQuery);
  useEffect(() => searchItems(searchQuery), [searchQuery, searchItems]);
  let element = useRoutes([
    {
      path: "/react-udemy-clone/",
      element: (
        <>
          <DataContext.Provider value={Data}>
            <HomePage searchItems={setSearchQuery} />
          </DataContext.Provider>
        </>
      ),
    },
    {
      path: `/react-udemy-clone/course/:id`,
      element: (
        <>
          <DataContext.Provider value={Data}>
            <NavBar searchItems={setSearchQuery} />
            <CoursePage />
            <Footer />
          </DataContext.Provider>
        </>
      ),
    },
    { path: "*", element: <div>page not found</div> },
  ]);
  return element;
}

export default App;
