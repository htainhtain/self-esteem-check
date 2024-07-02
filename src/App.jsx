import Home from "./Page/Home/Home"
import DepressionTest from './Page/Depression/DepressionTest.jsx';
import AnxietyTest from "./Page/Anxiety/AnxietyTest.jsx";
import RelationshipTest from "./Page/Relationship/RelationshipTest.jsx";
import NavContextProvider from './store/NavContext.jsx';
import Nav from "./Components/Nav/Nav.jsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DepressionContextProvider from "./store/DepressionContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/depression-test",
    element: 
    <DepressionContextProvider>
      <DepressionTest />
    </DepressionContextProvider>
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

  return (
    <NavContextProvider>
      <Nav />
      <RouterProvider router={router}/>
    </NavContextProvider>
  )
}

export default App
