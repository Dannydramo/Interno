import React, { Fragment } from "react";
import Accordion from "./Accordion";
import FirstQuestionImage from "../../assets/FaqFirstImage.svg";
import SecondQuestionImage from "../../assets/FaqSecondImage.svg";

interface questObject {
  id: number;
  question: string;
  answer: string;
}

const FaQuestion = () => {
  const firstQuestion: questObject[] = [
    {
      id: 1,
      question: "What is the Hipcouch Interior Design Service?",
      answer:
        "Lorem ipsum dolor sit amet, adipiscing Aliquam eu se vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.",
    },
    {
      id: 2,
      question: "So, how exactly does this work?",
      answer:
        "Lorem ipsum dolor sit amet, adipiscing Aliquam eu se vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.",
    },
    {
      id: 3,
      question: "What cities do you currently operate in?",
      answer:
        "Lorem ipsum dolor sit amet, adipiscing Aliquam eu se vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.",
    },
    {
      id: 4,
      question: "Hipcouch Interior Design Service?",
      answer:
        "Lorem ipsum dolor sit amet, adipiscing Aliquam eu se vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.",
    },
    {
      id: 5,
      question: "What kind of interior designers do you have?",
      answer:
        "Lorem ipsum dolor sit amet, adipiscing Aliquam eu se vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.",
    },
  ];

  const secondQuestion: questObject[] = [
    {
      id: 1,
      question: "How long does it take?",
      answer:
        "Lorem ipsum dolor sit amet, adipiscing Aliquam eu se vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.",
    },
    {
      id: 2,
      question: "Can I use my existing furnishings?",
      answer:
        "Lorem ipsum dolor sit amet, adipiscing Aliquam eu se vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.",
    },
    {
      id: 3,
      question: "I put into redesigning my interior?",
      answer:
        "Lorem ipsum dolor sit amet, adipiscing Aliquam eu se vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.",
    },
    {
      id: 4,
      question: "What do your services cost?",
      answer:
        "Lorem ipsum dolor sit amet, adipiscing Aliquam eu se vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.",
    },
    {
      id: 5,
      question: "Do you offer free consultations?",
      answer:
        "Lorem ipsum dolor sit amet, adipiscing Aliquam eu se vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.",
    },
  ];

  return (
    <Fragment>
      <section>
        <div className="p-4 bg-[url(./assets/FaqBg.svg)] flex justify-center items-end bg-no-repeat relative bg-cover bg-center min-h-[60vh]">
          <p className="rounded-t-2xl mb-[-1rem] bg-white px-8 flex justify-center flex-col text-center w-[290px] py-6 font-bold text-2xl">
            Frequently Asked Questions
          </p>
        </div>

        <div className="mb-8 mt-12 w-[95%] lg:w-[85%] mx-auto">
          <h1 className="font-bold text-2xl text-center mb-8">
            Every Question Answered
          </h1>
          <div className="flex flex-col md:flex-row justify-between md:space-x-8 mt-8">
            <div className="md:w-[65%] xl:w-[55%] mt-4 md:mt-0">
              {firstQuestion.map(({ id, question, answer }) => (
                <Accordion
                  index={id}
                  title={question}
                  content={answer}
                  key={id}
                />
              ))}
            </div>
            <div className="h-[500px] w-full md:w-[45%] xl:w-[40%]">
              <div className="bg-[url(./assets/FaqFirstImage.svg)] bg-cover bg-center h-[500px] w-full rounded-3xl mt-4 md:mt-0"></div>
            </div>
          </div>
        </div>

        <div className="mb-8 mt-12 w-[95%] lg:w-[85%] mx-auto">
          <h1 className="font-bold text-2xl text-center mb-8">
            Project Related Question
          </h1>
          <div className="flex flex-col md:flex-row justify-between md:space-x-8 mt-8">
            <div className="h-[500px] w-full md:w-[45%] xl:w-[40%]">
              <div className="bg-[url(./assets/FaqSecondImage.svg)] bg-cover bg-center h-[500px] w-full rounded-3xl mt-4 md:mt-0"></div>
            </div>
            <div className="md:w-[65%] xl:w-[55%] mt-4 md:mt-0">
              {secondQuestion.map(({ id, question, answer }) => (
                <Accordion
                  index={id}
                  title={question}
                  content={answer}
                  key={id}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default FaQuestion;
