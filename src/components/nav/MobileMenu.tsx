import React from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import LinkButton from "../button/LinkButton";
import CloseIcon from "../../assets/icons/CloseIcon";

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
      <Dialog
        as="div"
        className="relative z-[100000000000000]"
        onClose={setOpen}
      >
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
        <div className="fixed inset-0 overflow-hidden z-[100000000]">
          <div className="absolute inset-0 overflow-hidden w-full right-0">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-y-[-526px]"
              enterTo="translate-y-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-y-0"
              leaveTo="translate-y-[-600px]"
            >
              <Dialog.Panel className=" w-full bg-secondary pb-[140px] pt-[40xp] rounded-b-[8px] z-[100000000]">
                <div className="px-[47px] pt-[40px]">
                  <div className="flex justify-end">
                    <div className="flex justify-end items-center w-full">
                      <div
                        className="flex justify-center items-center relative"
                        onClick={() => setOpen(!open)}
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.307505 10.6925C0.504459 10.8894 0.771552 11 1.05005 11C1.32854 11 1.59563 10.8894 1.79259 10.6925L5.50634 6.97874L9.2201 10.6925C9.41818 10.8838 9.68348 10.9897 9.95886 10.9873C10.2342 10.9849 10.4977 10.8744 10.6924 10.6797C10.8871 10.485 10.9976 10.2216 11 9.94617C11.0024 9.6708 10.8965 9.4055 10.7052 9.20741L6.99142 5.49366L10.7052 1.7799C10.8965 1.58182 11.0024 1.31652 11 1.04114C10.9976 0.765766 10.8871 0.502344 10.6924 0.307616C10.4977 0.112887 10.2342 0.00243265 9.95886 3.96967e-05C9.68348 -0.00235326 9.41818 0.103507 9.2201 0.294822L5.50634 4.00858L1.79259 0.294822C1.5945 0.103507 1.3292 -0.00235326 1.05383 3.96967e-05C0.778448 0.00243265 0.515027 0.112887 0.320299 0.307616C0.12557 0.502344 0.0151142 0.765766 0.0127213 1.04114C0.0103283 1.31652 0.11619 1.58182 0.307505 1.7799L4.02126 5.49366L0.307505 9.20741C0.110609 9.40437 0 9.67146 0 9.94995C0 10.2284 0.110609 10.4955 0.307505 10.6925Z"
                              fill="#F8F8F8"
                            />
                          </svg>
                        </div>
                        <CloseIcon />
                      </div>
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
      </Dialog>
    </Transition.Root>
  );
};

export default MobileMenu;
