import React from "react";
import Navbar from "./Navbar";
import Companiescard from "./Companiescard";
import googleImg from "./../assets/google.png";
import amazonImg from "./../assets/amazon.png";
import infosysImg from "./../assets/infosys.png";
import wiproImg from "./../assets/wipro.png";
import { MapPin } from "lucide-react";
import saveImg from "./../assets/save.png";
import shareImg from "./../assets/share.png";

function MainPortal() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-row">
        <div>
          <button className=" w-70  bg-gray-200 border-2 border-white p-2 m-4 font-semibold">
            ⭐Available vacancy : 30256+
          </button>
          <div className=" ml-10  mb-8">
            <button className="border-2 border-gray-500 px-8 rounded-lg cursor-pointer hover:bg-purple-500 hover:text-white">
              All
            </button>
            <button className="border-2 border-gray-500 px-8 rounded-lg cursor-pointer hover:bg-purple-500 hover:text-white">
              Finance
            </button>
            <button className="border-2 border-gray-500 px-8 rounded-lg cursor-pointer hover:bg-purple-500 hover:text-white">
              Tech
            </button>
            <button className="border-2 border-gray-500 px-8 rounded-lg cursor-pointer hover:bg-purple-500 hover:text-white">
              Design
            </button>
            <button className="border-2 border-gray-500 px-8 rounded-lg cursor-pointer hover:bg-purple-500 hover:text-white">
              Sales
            </button>
          </div>
          <Companiescard
            name="Google"
            logo={googleImg}
            postname="Software Developer"
            salary="$20k-$60k"
            location="California"
          />
          <Companiescard
            name="Amazon"
            logo={amazonImg}
            postname="Python Developer"
            salary="$10k-$30k"
            location="Virginia"
          />
          <Companiescard
            name="Infosys"
            logo={infosysImg}
            postname="Data Analytics"
            salary="$5k-$15k"
            location="Mumbai"
          />
        </div>
        <div className="flex flex-col w-100 bg-amber-100 ml-14 relative">
          <button className="bg-pink-300 px-2 rounded-lg w-30 border-2 border-gray-600 absolute top-0 right-0">
            Suggested
          </button>
          <div className="bg-white w-80 ml-10 border-2 border-white mt-2">
            <img src={wiproImg} alt="wipro" className="w-30 ml-22" />
            <p className="font-semibold ml-18">Senior Product Manager</p>
            <p className="flex flex-row ml-26 p-2 ">
              <MapPin className="w-4" />
              <span>Vadodara</span>
            </p>
            <p className="text-center border-t-2 border-gray-400 p-2">
              salary:$5k-$15k/year
            </p>
          </div>
          <div className="mx-10 my-2">
            5+years experience in product manager company.Strong communication
            and leadership oriented.
          </div>
          <button className="mx-auto block bg-yellow-300 w-30 h-10 p-2 rounded-lg shadow-lg shadow-white-100 cursor-pointer my-4">
            Apply Now
          </button>
          <div className="flex flex-row justify-around mt-6">
            <button className="px-8 rounded-lg bg-amber-50 border-2 border-gray-300 flex flex-row cursor-pointer">
              <img src={saveImg} alt="saveicon" className="w-4 py-1" />
              <span className="ml-2">Save</span>
            </button>
            <button className="px-8 rounded-lg bg-amber-50 border-2 border-gray-300 flex flex-row cursor-pointer">
              <img src={shareImg} alt="shareicon" className="w-4 py-1" />
              <span className="ml-2">Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPortal;
