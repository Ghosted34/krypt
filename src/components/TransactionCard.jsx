import React from "react";
import { shortenAddress } from "../utils/shortenAddress";
import useFetch from "../hooks/useFetch";

const TransactionCard = ({
  url,
  message,
  timestamp,
  addressFrom,
  amount,
  addressTo,
  keyword,
}) => {
  const gifUrl = useFetch({ keyword });
  return (
    <div className="bg-[#181918] m-4 flex flex-1 2xl:min-w-[450px] 2xl:max-w-[500px] sm:min-w-[270px] sm:min-w-[300px] flex-col p-3 rounded-md hover:shadow-2xl">
      <div className="flex flex-col items-center w-full mt-3">
        <div className=" w-full mb-6 p-2">
          <a
            href={`https://goerli.etherscan.io/address/${addressFrom}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-white text-base">
              From: {shortenAddress(addressFrom)}
            </p>
          </a>

          <a
            href={`https://goerli.etherscan.io/address/${addressTo}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-white text-base">
              To: {shortenAddress(addressTo)}
            </p>
          </a>

          <p className="text-white text-base">Amount: {amount} ETH</p>

          {message && (
            <>
              <br />

              <p className="text-white text-base">Message: {message} </p>
            </>
          )}
        </div>
        <img
          src={gifUrl || url}
          alt="GIF"
          className="w-full h-64 2x:h-96 rounded-md shadow-lg object-cover"
        />

        <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow 2xl">
          <p className="font-bold text-[#37c7da]"> {timestamp}</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
