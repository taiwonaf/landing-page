import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const frequentlyAsked = [
  {
    question: "Can I work on a project I started before the hackathon?",
    answer:
      "lorem ipsum dolor sit amet lore mauris at libero vel aug commodo et",
  },
  {
    question: "What happens if I need help during the hackathon?",
    answer:
      "lorem ipsum dolor sit amet lore mauris at libero vel aug commodo et",
  },
  {
    question: "What happens if I don't have an idea for a project?",
    answer:
      "lorem ipsum dolor sit amet lore mauris at libero vel aug commodo et",
  },
  {
    question: "Can I join a team or do I have to come with one?",
    answer:
      "lorem ipsum dolor sit amet lore mauris at libero vel aug commodo et",
  },
  {
    question: "What happens after the hackathon ends?",
    answer:
      "lorem ipsum dolor sit amet lore mauris at libero vel aug commodo et",
  },
  {
    question: "Can I work on a project I started before the hackathon?",
    answer:
      "lorem ipsum dolor sit amet lore mauris at libero vel aug commodo et",
  },
];

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

const Faq = () => {
  return (
    <div className="flex flex-col gap-[25px]">
      {frequentlyAsked.map((item) => (
        <Disclosure as="div" key={item.question}>
          {({ open }) => (
            <div className="border-b-[1px] border-tertiary">
              <h3>
                <Disclosure.Button className="group relative flex w-full items-center justify-between pb-[13px] text-left">
                  <span
                    className={classNames(
                      open ? "text-tertiary" : "text-white",
                      "text-[14px] font-monteserat leading-[27.5px]"
                    )}
                  >
                    {item.question}
                  </span>
                  <span className="ml-6 flex items-center">
                    {open ? (
                      <MinusIcon
                        className="block h-[18px] w-[18px] text-tertiary group-hover:text-tertiary/95"
                        aria-hidden="true"
                      />
                    ) : (
                      <PlusIcon
                        className="block  h-[18px] w-[18px] text-tertiary group-hover:text-text-tertiary/95"
                        aria-hidden="true"
                      />
                    )}
                  </span>
                </Disclosure.Button>
              </h3>
              <Disclosure.Panel
                as="div"
                className="text-[14px] text-white pb-[13px]"
              >
                <p>{item.answer}</p>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  );
};

export default Faq;
