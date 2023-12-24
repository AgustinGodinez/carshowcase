"use client";
import Image from "next/image";
import { CustomButton } from ".";

export default function Hero() {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className=" flex-1 pt-36 padding-x">
        <h1 className="hero__title">find a car --quickly</h1>
        <p className="hero__subtitle">
          StreamLine your car rental experience with our effortless booking
          process
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyes="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className=" object-contain" />
        </div>
          <div className="hero__image-overlay"/>
      </div>
    </div>
  );
}
