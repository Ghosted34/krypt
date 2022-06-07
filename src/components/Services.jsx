import React from "react";
import { ServiceCard } from "./";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const Services = () => {
  const servicesRendered = [
    {
      color: "bg-[#2952e3]",
      title: "Security Guaranteed",
      icon: <BsShieldFillCheck fontSize={21} className="text-white" />,
      subtitle:
        "Security is Guranteed. We always maintain privacy and maintain the quality of our products.",
      key: "secured",
    },
    {
      color: "bg-[#8945f8]",
      title: "Best Exchange Rates",
      icon: <BiSearchAlt fontSize={21} className="text-white" />,
      subtitle:
        "With up-to-date market notifications, you can expect juicy and desirable exchange rates to make transactions with",
      key: "fx-rates",
    },
    {
      color: "bg-[#f84550]",
      title: "Fastest Transactions",
      icon: <RiHeart2Fill fontSize={21} className="text-white" />,
      subtitle:
        "Get near-instant transactions with sending and receiving ethereum between wallets with guaranteed success",
      key: "xs-transact",
    },
  ];

  return (
    <section
      title="Services"
      className="flex w-full justify-center items-center gradient-bg-services mf:flex-row flex-col"
    >
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4 border-red">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">
            Services that we <br /> continue to improve
          </h1>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-start items-center">
        {servicesRendered.map((service) => (
          <ServiceCard
            color={service.color}
            title={service.title}
            icon={service.icon}
            subtitle={service.subtitle}
            key={service.key}
          />
        ))}
      </div>
    </section>
  );
};
export default Services;
