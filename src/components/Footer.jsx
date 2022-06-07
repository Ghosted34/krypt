import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import logo from "../../assets/logo.png";

const Footer = () => {
  const { currentAccount } = useContext(TransactionContext);
  return (
    <footer className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
          <img src={logo} alt="Krypt" className="w-32" />
        </div>
        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
          <a
            className="text-white text-base text-center mx-2"
            href="https://coinmarketcap.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Market
          </a>
          <a
            className="text-white text-base text-center mx-2"
            href="https://www.coinbase.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Exchange
          </a>
          <a
            className="text-white text-base text-center mx-2"
            href="https://www.youtube.com/results?search_query=crypto%20tutorials"
            rel="noopener noreferrer"
            target="_blank"
          >
            Tutorials
          </a>
          <a
            className="text-white text-base text-center mx-2"
            href={`https://goerli.etherscan.io/address/${currentAccount}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Wallet
          </a>
        </div>
      </div>

      <div className="flex justify-center items center flex-col mt-5">
        <p className="text-white text-sm text-center">Reach us</p>
        <a
          className="text-white text-sm text-center"
          href="mailto:victorjerome34@gmail.com"
          rel="noopener noreferrer"
        >
          victorjerome34@gmail.com
        </a>
      </div>

      <div className="sm:w-[90%] w-full h-[0.25px] bg-white-400 mt-5" />

      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
        <a
          href="https://adolejerome.netlify.app"
          rel="noopener noreferrer"
          target="_blank"
          className="text-white text-sm text-center"
        >
          @Ghosted34
        </a>
        <p className="text-white text-sm text-center">All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
