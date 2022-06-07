import React, { useState, useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/logo.png";

const NavbarItem = ({ title, classProps, url }) => (
  <li className={`mx-4 cursor-pointer ${classProps}`}>
    <a
      className="text-white text-base text-center mx-2"
      href={url}
      rel="noopener noreferrer"
      target="_blank"
    >
      {title}
    </a>
  </li>
);

// const list = ["Market", "Exchange", "Tutorials", "Wallets"];

const Navbar = () => {
  const { currentAccount } = useContext(TransactionContext);
  const [toggleMenu, setToggleMenu] = useState(false);

  const list = [
    { title: "Market", url: "https://coinmarketcap.com/" },
    { title: "Exchange", url: "https://www.coinbase.com/" },
    {
      title: "Tutorials",
      url: "https://www.youtube.com/results?search_query=crypto%20tutorials",
    },
    {
      title: "Wallet",
      url: `https://goerli.etherscan.io/address/${currentAccount}`,
    },
  ];
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="KYRPT" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {list.map((item, index) => (
          <NavbarItem key={item + index} title={item.title} url={item.url} />
        ))}
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul className="z-10 fixed top-0 -right-2 p-4 w-[70vw] h-screen shadow-2xl  list-none flex flex-col justify-start items-end rounded-sm blue-glassmorphism text-white animate-slide-in">
            <li className="text-xl w-full my-2 ">
              <AiOutlineClose
                onClick={() => setToggleMenu(false)}
                className="cursor-pointer"
              />
            </li>
            {list.map((item, index) => (
              <NavbarItem
                key={item + index}
                title={item.title}
                url={item.url}
                classProps="my-2 text-lg"
              />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
