import Link from "next/link";
import React from "react";
import { TbGridDots } from "react-icons/tb";
import { LiaIndustrySolid } from "react-icons/lia";
import { FaLocationDot } from "react-icons/fa6";

const searches = [
  "Designer",
  "Web",
  "IOS",
  "Developer",
  "PHP",
  "Senior",
  "Engineer",
];

const Searching = () => {
  return (
    <section>
      <div className="text-center mt-4 lg:mt-12">
        <h1 className="text-4xl lg:text-6xl font-bold line-clamp-2 mb-1 lg:mb-4 pb-2">
          There Are <strong className="extra-color">32,432</strong> Postings
          Here For you!
        </h1>
        <h6 className="text-md lg:text-xl font-medium">
          Find Jobs, Employment & Career Opportunities
        </h6>
      </div>

      <form className="flex flex-wrap m-auto items-center gap-5 lg:gap-2 border border-sky-500 p-4 rounded-xl mt-20 w-full lg:w-10/12">
        <div className="flex items-center grow">
          <TbGridDots />
          <input
            className="search-input ml-2 w-full"
            placeholder="Your keywords..."
          />
        </div>
        <div className="flex items-center w-full grow lg:grow-0 lg:w-auto">
          <FaLocationDot />
          <select className="">
            <option value="">Location</option>
            <option value="Kyiv">Location</option>
            <option value="Lviv">Lviv</option>
          </select>
        </div>
        <div className="flex items-center w-full grow lg:grow-0 lg:w-auto">
          <LiaIndustrySolid />
          <select className="">
            <option value="">Industry</option>
            <option value="Kyiv">Front-end</option>
            <option value="Lviv">Back-end</option>
          </select>
        </div>
        <button className="primary-btn grow lg:grow-0 hover:primary-hover-effect">
          Search
        </button>
      </form>

      <div className="flex flex-wrap justify-center items-center secondary-color mt-3">
        <strong className="">Popular Searches:</strong>
        <div className="flex items-center">
          {searches.map((searche) => (
            <Link href="#" key={searche}>
              <button className="secondary-btn p-1">{searche}</button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Searching;
