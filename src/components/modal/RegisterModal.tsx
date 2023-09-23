import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import SuccessCheckImg from "../register/desktop/SuccessCheckImg";
import SuccessManImg from "../register/desktop/SuccessManImg";

interface IModal {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}

const RegisterModal: React.FC<IModal> = ({ open, setOpen }) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[100000000000000000000000]"
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-secondary/[93%] transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-[5px] bg-white/[0.01] p-[25px] text-center  transition-all border-primary border-[1px] max-w-[320px] md:max-w-[700px] w-full">
                <div className="flex justify-center items-center mb-[25px] md:mb-0">
                  <div className="h-[185px] flex justify-end relative max-w-[260px] md:max-w-[430px] md:h-[320px] w-full">
                    <SuccessCheckImg />
                    <SuccessManImg />
                  </div>
                </div>
                <h4 className="text-white font-[600] font-monteserat text-[16px] max-w-[180px] md:max-w-[555px] md:text-[32px] w-full mx-auto mb-[30px]">
                  Congratulations you have successfully Registered!
                </h4>
                <p className="text-white font-monteserat text-[12px] md:text-[14px] font-[500] max-w-[220px] md:max-w-[240px] md:mb-[40px] w-ful mx-auto mb-[25px]">
                  Yes, it was easy and you did it! check your mail box for next
                  step
                </p>
                <button
                  type="submit"
                  onClick={() => setOpen(!open)}
                  className="w-full rounded-[4px] text-white py-[16px] hover:py-[14px] overflow-hidden flex justify-center items-center btnGradient text-[16px] hover:rounded-[4px] font-[600] border-none"
                >
                  Back
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default RegisterModal;
