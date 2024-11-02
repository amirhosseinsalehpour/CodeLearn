"use client";
import React, { useState } from "react";
import { AccordionProps } from "./accordion.types";
import { IconChevronDown, IconChevronUp } from "../icons/icons";

export const Accordion: React.FC<AccordionProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <div key={`accordion-${item.id}`}>
          <h2 className="accordion-title">
            <button
              onClick={() => toggleAccordion(index)}
              type="button"
              className={`flex justify-between items-center w-full p-4 transition-colors duration-300 ${
                index === activeIndex
                  ? "text-white bg-primary"
                  : "text-base-content bg-base-200"
              }`}
            >
              <span>{item.title}</span>
              {activeIndex === index ? (
                <IconChevronUp width={18} />
              ) : (
                <IconChevronDown width={18} />
              )}
            </button>
          </h2>
          <div
            className={`overflow-hidden transition-all duration-300 transform ${
              activeIndex === index
                ? "max-h-screen scale-y-100 opacity-100"
                : "max-h-0 scale-y-0 opacity-0"
            }`}
            style={{ transformOrigin: "top" }}
          >
            <div className="accordion-content p-4">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
