import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Security from "./pages/Security";
import MainLayout from "./pages/MainLayout";
import Watch from "./components/Watch";
import Favourites from "./pages/Favourites";
import PlayLayout from './pages/PlayLayout'
import WatchLayout from "./pages/WatchLayout";
import { FavouritesReducer } from "./store/reducer";
import VideosPlayPage from "./pages/VideosPlayPage";
import { useEffect, useState } from "react";
import Loader from "./components/loader/Loader";
import GrandMaHut from "./pages/GrandMaHut";
import Pricing from "./pages/Pricing";

function App() {
  const [loading, setisloading] = useState(true)

  let african = 'african';
  const [activeTab, setActiveTab] = useState(african)

  const param = window.location.pathname
  
  useEffect(()=>{
    setTimeout(() => {
      setisloading(false)
    }, 1000);
  },[])

  const routes = createBrowserRouter([
    {
      path: "/",
      children: [
        { index: true, element: <HomePage /> },
        { path: "/security", element: <Security /> },
        { path: "/pricing", element: <Pricing /> },
        {
          path: "content",
          element: <MainLayout />,
          children: [
            {
              element: <WatchLayout />,
              children: [
                {
                  index: true,
                  element: <Watch active={activeTab} setActive={setActiveTab}/>,
                },
                {
                  path: "favourites",
                  element: <Favourites />,
                },
              ],
            },
            { path: "/content/:videoId", element: <VideosPlayPage active={activeTab} /> },
            { path: "music", element: <PlayLayout />,
              // children: [
              //   {path: 'favourites', element: <AudioFavourites />}
              // ]
          },
          { path: "grandma", element: <GrandMaHut />},
          ],
        },
      ],
    },
  ]);

  const loader = createBrowserRouter([
    {
      path: param,
      element: <Loader />
    }
  ])

  return (
    <FavouritesReducer>
      <RouterProvider router={loading ? loader : routes } />
    </FavouritesReducer>
  );
}

export default App;
