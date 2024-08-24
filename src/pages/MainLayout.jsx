import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Kdashboard from "../components/Kdashboard";
import ParentSecModal from "../components/ParentSecModal";
import Favouritecontext from "../store/reducer";
import Countdown from "../components/Countdown";

const MainLayout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const ctx = useContext(Favouritecontext);
  const parentsec = ctx.state.parentSecModal;
  const premiumModal = ctx.state.premiumModal;
  return (
    <div className="bg-white h-[100%]">
      <Header />
      <Kdashboard />
      {premiumModal && <Countdown />}
      {parentsec && <ParentSecModal />}
      <Outlet />
    </div>
  );
};

export default MainLayout;
