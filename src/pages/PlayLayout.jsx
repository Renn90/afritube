import React, {useState, useEffect} from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MdDesktopMac, MdFavorite } from "react-icons/md";
import { BiPlay } from 'react-icons/bi';
import End from '../components/UI/End';

const WatchLayout = () => {
 
  const location = useLocation();
  const [isWatchLayoutActive, setIsWatchLayoutActive] = useState(false);

  useEffect(() => {
    setIsWatchLayoutActive(location.pathname.includes("/favourite"));
  }, [location]);

  return (
    <div className='container mx-auto bg-white'>
             <div className="flex flex-col justify-left pl-[76px] lt:flex-row">
             <div className="flex flex-col align-center text-sm ">
            <NavLink to="/content/music" className={ !isWatchLayoutActive ? 'bg-secBlue rounded-t py-2 mx-1 px-4 flex flex-col' : 'py-2 mx-1 px-4 flex flex-col'}>
              <BiPlay className="self-center text-xl" />
              Play
            </NavLink>
          </div>

          <div className="flex flex-col align-center text-sm">
            <NavLink to="favourites" className={ isWatchLayoutActive ? 'bg-secBlue rounded-t py-2 mx-1 px-4 flex flex-col' : 'py-2 mx-1 px-4 flex flex-col'}>
              <MdFavorite className="text-red-500 text-xl self-center" />
              Favorites
            </NavLink>
          </div>
        </div>
        <Outlet />
    </div>
  )
}

export default WatchLayout
