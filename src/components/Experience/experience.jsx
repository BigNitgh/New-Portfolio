import React from "react";
import ExperienceItem from "./experienceItem.jsx";

const Experience = () => {
  const EXPERIENCE = [
    {
      id: 1,
      date: "February 2022",
      title: "Application UI code in Tailwind CSS",
      description:
        "Get access to over 20+ pages including a dashboard layout, charts,kanban board, calendar, and pre-order E-commerce & Marketing pages.",
    },
    {
      id: 2,
      date: "February 2022",
      title: "Application UI code in Tailwind CSS",
      description:
        "Get access to over 20+ pages including a dashboard layout, charts,kanban board, calendar, and pre-order E-commerce & Marketing pages.",
    },
    {
      id: 3,
      date: "February 2022",
      title: "Application UI code in Tailwind CSS",
      description:
        "Get access to over 20+ pages including a dashboard layout, charts,kanban board, calendar, and pre-order E-commerce & Marketing pages.",
    },
  ];

  return (
    <div id="trayectoria" className="dark:bg-slate-900	">
      <div className="w-full mx-auto lg:w-[740px] md:w-[670px] py-44 	">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {EXPERIENCE.map((experiencie) => (
            <li key={experiencie.id} className="mb-10 ms-4">
              <ExperienceItem {...experiencie} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Experience;
