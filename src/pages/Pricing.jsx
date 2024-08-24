import React from "react";
import { BiCheckDouble } from "react-icons/bi";
import NavBar from "../components/NavBar";
import curl from "../assets/img/curl.png";
import { Link } from "react-router-dom";

const offers = [
  {
    name: "Starter",
    state: true,
    price: "free",
    note: "For everybody. To keep your children going",
    package: [
      "20 Videos",
      "20 Stories",
      "5 free grandmas Hut Access",
      "1 device access",
    ],
  },
  {
    name: "Silver",
    state: false,
    price: "N*****",
    note: "Give your child the silver spoon",
    package: [
      "50 Videos",
      "50 Stories",
      "20 free grandmas Hut Access",
      "2 device access",
      "Censoring",
      "Child Activity Control",
    ],
  },
  {
    name: "Gold",
    state: false,
    price: "N*****",
    note: "Show your child huge love",
    package: [
      "50 Videos",
      "50 Stories",
      "20 free grandmas Hut Access",
      "4+ device access",
      "Censoring",
      "Child Activity Control",
      "Locking Device",
      "20% Discout on Anual Purchase",
    ],
  },
];

const Pricing = () => {
  return (
    <>
      <span className="relative z-[99]">
        <NavBar text={'black'}/>
      </span>
      <section className="container mt-[100px] mx-0 py-4 relative z-[9] overflow-x-hidden md:mx-auto">
        <h2 className="text-2xl text-center pb-4">Pricing</h2>
        <div className="flex flex-col justify-between md:flex-row">
          {offers.map((offer) => (
            <div
              key={offer.name}
              className={`${
                offer.state
                  ? "bg-[#2E3192] text-white"
                  : "bg-[#F0F9FF] text-[#CDCDCD]"
              } p-4 text-white w-[94%] my-4 mx-auto flex flex-col relative md:w-1/3 md:my-0`}
            >
              <header className="text-center my-4">
                <h2 className={`font-bold ${!offer.state && "text-[#2E3192]"}`}>
                  {offer.name}
                </h2>
                <p>{offer.price}</p>
                <p className="text-sm font-thin text-[lightgrey]">
                  {offer.note}
                </p>
              </header>
              <span>
                {offer.package.map((pack) => (
                  <div className="flex items-center" key={pack}>
                    <BiCheckDouble
                      className={`mr-2 ${offer.state && "text-[#00FF47]"}`}
                    />
                    <p className="py-2">{pack}</p>
                  </div>
                ))}
              </span>
              <Link
                to={`${offer.state && "/content"}`}
                className="border-[1px] cursor-pointer p-2 rounded-full self-center mt-auto px-5"
                onClick={() => BiCommentX.dispatch({ type: "CLOSECOUNTDOWN" })}
              >
                {offer.state ? "Start for free" : "Add Plan"}
              </Link>
              {!offer.state && (
                <h1 className="text-3xl text-black absolute top-[40%] left-[20%] rotate-[-45deg]">
                  Coming Soon
                </h1>
              )}
            </div>
          ))}
        </div>
      </section>
      <img src={curl} alt="curl" className="absolute top-0 left-[0%] z-[7]" />
    </>
  );
};

export default Pricing;
