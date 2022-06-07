import React, { useContext } from "react";
import { TransactionCard } from "./";
import { TransactionContext } from "../context/TransactionContext";
import dummyData from "../utils/dummyData";

const Transactions = () => {
  const { currentAccount, transactions } = useContext(TransactionContext);
  return (
    <section
      className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions"
      title="Transactions"
    >
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className="text-white text-3xl text-center my-2">
            Latest Transactions
          </h3>
        ) : (
          <h3 className="text-white text-3xl text-center my-2">
            Connect your Account
          </h3>
        )}
        <div className="flex flex-wrap justify-center items-center mt-10">
          {transactions.reverse().map((transaction, index) => (
            <TransactionCard key={index} {...transaction} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transactions;
