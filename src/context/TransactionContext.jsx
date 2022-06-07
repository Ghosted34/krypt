import React, { useState, useEffect, createContext } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = createContext();

const { Provider } = TransactionContext;

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
  return transactionContract;
};

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [transactions, setTrasnsactions] = useState([]);
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem("transactionCount")
  );
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });

  const handleChange = (event, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: event.target.value }));
  };

  const getAllTransaction = async () => {
    try {
      if (!ethereum) alert("Please install MetaMask");

      const transactionContract = getEthereumContract();
      const availableTransactions =
        await transactionContract.getAllTransactions();

      const structuredTransactions = availableTransactions.map(
        (transaction) => ({
          addressTo: transaction.receiver,
          addressFrom: transaction.sender,
          keyword: transaction.keyword,
          timestamp: new Date(
            transaction.timestamp.toNumber() * 1000
          ).toLocaleDateString(),
          message: transaction.message,
          amount: parseInt(transaction.amount._hex) / 10 ** 18,
        })
      );
      setTrasnsactions(structuredTransactions);
      console.log(structuredTransactions);
    } catch (error) {
      throw new Error("No ethereum object");
    }
  };

  const checkWalletConnected = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");

      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        getAllTransaction();
      }
    } catch (error) {
      console.error(error);
      throw new Error("No ethereum object");
    }
  };

  const checkIfTransactionExists = async () => {
    try {
      const transactionContract = getEthereumContract();
      const transactionCount = await transactionContract.getTransactionCount();

      window.localStorage.setItem("transactionCount", transactionCount);
    } catch (error) {
      throw new Error("No ethereum object");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.error(error);
      throw new Error("No ethereum object");
    }
  };

  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");

      const { addressTo, amount, keyword, message } = formData;
      const transactionContract = getEthereumContract();
      const parsedAmount = ethers.utils.parseEther(amount);

      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: addressTo,
            gas: "0x5208",
            value: parsedAmount._hex,
          },
        ],
      });

      const transactionHash = await transactionContract.addToBlockchain(
        addressTo,
        parsedAmount,
        message,
        keyword
      );

      setIsLoading(true);
      console.log(`Loading - ${transactionHash}`);
      await transactionHash.wait();

      setIsLoading(false);
      console.log(`Success - ${transactionHash}`);

      const transactionCount = await transactionContract.getTransactionCount();
      setTransactionCount(transactionCount.toNumber());
      window.reload();
    } catch (error) {
      throw new Error("No ethereum object");
    }
  };

  useEffect(() => {
    checkWalletConnected();
    checkIfTransactionExists();
  }, []);

  return (
    <Provider
      value={{
        connectWallet,
        currentAccount,
        formData,
        isLoading,
        handleChange,
        sendTransaction,
        transactions,
      }}
    >
      {children}
    </Provider>
  );
};
