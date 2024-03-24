import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="lg:flex lg:flex-row lg:px-[50px] gap-[10rem] ">
        <div className="space-y-9">
          <h1 className="lg:text-6xl lg:leading-[4.5rem] text-3xl lg:font-bold">
            GROWTH GREAR INNOVATIONS <br /> IT TECHNOLOGY
          </h1>
          <p className="text-xl leading-[1.78rem]">
            We are a team of talented developers making the best websites and
            apps for you
          </p>
          <div className=" space-x-3">
            <button className="bg-blue-700 lg:p-4 rounded p-3 ">
              <Link href="/about">About Us</Link>
            </button>
            <button className="bg-white lg:p-4 p-3 rounded text-black ">
              <Link href="/contact">Contact Us</Link>
            </button>
          </div>
          <div>
            <Image src="/brands.png" alt="about" width={800} height={800} />
          </div>
        </div>
        <div className="">
          <Image src="/hero.gif" alt="about" width={800} height={800} />
        </div>
      </div>
    </>
  );
};

export default Home;
