import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdWifiCalling3 } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import Banner from "../Banner/page";
const Contact = () => {
  return (
    <>
      <Banner content={'CONTACT'}/>
      <div className="bg-black w-screen py-20 ">
        <div className="bg-black max-w-6xl w-full mx-auto flex flex-col lg:flex-row  items-center lg:items-stretch  justify-between gap-y-12 lg:gap-y-0 px-8  ">
          <div className=" w-full lg:w-6/10">
            <h3 className="text-white text-3xl font-extrabold">GET IN TOUCH</h3>
            <h5 className="text-gray-400 text-xl mt-1">
              your email will be published . Required fields are marked
            </h5>
            <form className="flex flex-col gap-4 items-start mt-10">
              <input
                className="text-gray-100 py-3 px-5 w-full bg-purple-950"
                type="text"
                placeholder="Name*"
              ></input>
              <input
                className="text-gray-100 py-3 px-5 w-full bg-purple-950"
                type="email"
                placeholder="Email*"
              ></input>
              <input
                className="text-gray-100 py-3 px-5 w-full bg-purple-950"
                type="number"
                placeholder="Phone"
              ></input>
              <textarea
                className="text-gray-100 py-3 px-5 w-full min-h-[25vh] bg-purple-950"
                type="text"
                placeholder="Your Message"
              ></textarea>
              <button className="text-white py-3 px-5 bg-purple-500  -skew-x-25">
                SEND MESSAGE
              </button>
            </form>
          </div>

          <div className=" w-full lg:w-3/10  border-2 border-gray-500 flex flex-col gap-8 items-center justify-center px-8 py-5 lg:py-0">


            <div className="flex ">
              <div>
                <span className="text-3xl text-purple-500">
                  <FaLocationDot />
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl text-white font-extrabold">Our Address</h3>
                <p className="text-xm text-gray-600">2750 Quadra Street Victoria Road, New York, USA</p>
              </div>
            </div>

               <div className="flex">
              <div>
                <span className="text-3xl text-purple-500">
                 <MdWifiCalling3 />
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl text-white font-extrabold">Contact</h3>
                <p className="text-xm text-gray-600">Mobile: (+44) - 45789 - 5789
                  Mail: hello@tinja.com
              </p>
              </div>
            </div>

            <div className="flex"  >
              <div>
                <span className="text-3xl text-purple-500">
                 <FaTelegramPlane />
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl text-white font-extrabold">Social Media</h3>
                <p className="text-xm text-gray-600" >2750 Quadra Street Victoria Road, New York, USA</p>
              </div>
            </div>

          </div>

          </div>
          
      </div>
    </>
  );
};

export default Contact;
