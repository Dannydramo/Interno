import React, { Fragment, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import CollapseQuesImg from "../../assets/CollapseQuesImg.svg";
import ExpandQuesImg from "../../assets/ExpandQuesImg.svg";
import { Collapse } from "react-collapse";
type faqParam = {
  index: number;
  title: string;
  content: string;
};
const Accordion: React.FC<faqParam> = ({ index, title, content }) => {
  const [isOpen, setIsOpen] = useState([0]);

  const openAccordion = (index: number) => {
    const isOpened = isOpen.includes(index);
    setIsOpen(
      isOpened ? isOpen.filter((i) => i !== index) : [...isOpen, index]
    );
  };
  return (
    <Fragment>
      <div className="pb-2 mt-5 border-b">
        <div
          onClick={() => openAccordion(index)}
          className="flex items-center justify-between cursor-pointer"
        >
          <h2
            className={`font-[900] ${
              isOpen.includes(index) ? "text-[#CDA274]" : "text-[#292F36]"
            } md:text-[1.7rem]`}
          >
            {title}
          </h2>

          {isOpen.includes(index) ? (
            <img src={ExpandQuesImg} alt="" />
          ) : (
            <img src={CollapseQuesImg} alt="" />
          )}
        </div>
        <Collapse isOpened={isOpen.includes(index)}>
          <p className="mt-3 font-medium text-base text-[#4D5053]">{content}</p>
        </Collapse>
      </div>
    </Fragment>
  );
};

export default Accordion;
