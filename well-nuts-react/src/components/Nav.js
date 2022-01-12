import React from "react";
import { Popover, Transition } from "@headlessui/react";
import logo from "../ressources/logo.png";

const Nav = () => {
  return (
    <div className="w-full h-14 fixed bg-green-400 rounded-b-xl border-black border-1 md:flex justify-around items-center h-20 ">
      <ul className="hidden sm:flex md:w-full flex justify-evenly items-center">
        <li className="m-2 md:m-8">
          <Popover className="relative ">
            <Popover.Button className=" flex hover:text-white">
              Products{" "}
            </Popover.Button>
            <Transition
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute ">
                <div className="grid bg-gray-300 text-left pr-20 pl-10 rounded-xl	pt-2 pb-4">
                  <a className="hover:text-white py-1" href="/product1">
                    Product1
                  </a>
                  <a className="hover:text-white py-1" href="/product2">
                    Product2
                  </a>
                  <a className="hover:text-white py-1" href="/product3">
                    Product3
                  </a>
                  <a className="hover:text-white py-1" href="/product4">
                    Product4
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </li>
        <li className="w-40 h-40  hover:text-white ">
          <a href="/home">
            <img src={logo} alt="logo" />
          </a>
        </li>
        <li className="m-2 md:m-8  hover:text-white">
          <a href="/about">About us</a>
        </li>
      </ul>
    </div>
  );
};
export default Nav;
