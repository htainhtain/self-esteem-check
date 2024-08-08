import Home from "./Page/Home/Home"
import DepressionTest from './Page/Depression/DepressionTest.jsx';
import AnxietyTest from "./Page/Anxiety/AnxietyTest.jsx";
import RelationshipTest from "./Page/Relationship/RelationshipTest.jsx";
import Nav from "./Components/Nav/Nav.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getSelectedTheme } from "./store/themeSlice.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/depression-test",
    element: 
      <DepressionTest />
    ,
  },
  {
    path: "/anxiety-test",
    element: <AnxietyTest />,
  },
  {
    path: "/relationship-test",
    element: <RelationshipTest />,
  },
]);


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSelectedTheme())
  }, [])

  return (
    <>
      <Nav />
      <RouterProvider router={router}/>
    </>
  )
}

export default App
