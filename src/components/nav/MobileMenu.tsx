import React from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import LinkButton from "../button/LinkButton";

interface MenuProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu: React.FC<MenuProps> = ({ open, setOpen }) => {
  const navItems = [
    {
      name: "Timeline",
      path: "#timeline",
    },
    {
      name: "Overview",
      path: "#overview",
    },
    {
      name: "FAQs",
      path: "#faqs",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden max-w-[348px] w-full">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex w-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className=" w-full bg-secondary  px-[20px] pb-[140px] pt-[40xp]">
                  <div className="px-[47px] pt-[40px]">
                    <div className="flex justify-end">
                      <div
                        className="flex justify-end items-center mb-[57px] rounded-full border-[1px] "
                        onClick={() => setOpen(!open)}
                      >
                        <XMarkIcon
                          className="h-[11px] w-[11px] text-white font-[700]"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                    <div>
                      <ul className="flex flex-col gap-[10px] font-[700] leading-[40px] text-[18px] text-white capitalize mb-[30px]">
                        {navItems.map((item, index) => {
                          return (
                            <li key={index}>
                              <Link to={item.path}>{item.name}</Link>
                            </li>
                          );
                        })}
                      </ul>
                      <LinkButton text="Register" path="/register" />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileMenu;
