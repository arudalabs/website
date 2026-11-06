"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";

const faqs = [
  {
    question: "WHEN CAN I BUY AN ARUDA RACK?",
    answer:
      "THE AR-12 BETA BUILD IS TARGETED FOR Q3 2026 WITH A LIMITED RUN OF 50 UNITS. GENERAL AVAILABILITY FOLLOWS IN Q4. JOIN THE BETA LIST THROUGH THE CONTACT FORM TO GET FIRST ACCESS.",
  },
  {
    question: "WILL ARUDA PARTS FIT MY EXISTING RACK?",
    answer:
      "MOST ACCESSORIES USE STANDARD EIA-310 HOLE SPACING AND M6 CAGE NUTS, SO SHELVES, PANELS, AND SLEDS MOUNT IN ANY STANDARD 19\" OR 10\" RACK.",
  },
  {
    question: "ARE THE DESIGNS REALLY OPEN?",
    answer:
      "YES. WE PUBLISH STEP AND STL FILES FOR FRAMES AND ACCESSORIES UNDER CERN-OHL-P ONCE A REVISION IS STABLE. YOU CAN PRINT, MODIFY, AND SHARE THEM.",
  },
  {
    question: "DO YOU SHIP INTERNATIONALLY?",
    answer:
      "BETA UNITS SHIP TO NORTH AMERICA AND THE EU. WE ARE WORKING ON BROADER FULFILLMENT FOR GENERAL AVAILABILITY.",
  },
  {
    question: "CAN YOU BUILD A CUSTOM RACK FOR MY SPACE?",
    answer:
      "FOR SMALL BUSINESSES AND LABS WE TAKE A LIMITED NUMBER OF CUSTOM BUILDS EACH QUARTER. SELECT \"ENGINEERING COLLAB\" IN THE CONTACT FORM WITH YOUR DIMENSIONS.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="flex flex-col w-full bg-[#0A0A0A] py-16 px-6 md:py-[100px] md:px-[120px] scroll-mt-[60px]">
      <div className="w-full max-w-[480px]">
        <SectionHeader
          label="[06] // FAQ"
          title={"GOT\nQUESTIONS?"}
          subtitle="THE THINGS PEOPLE ASK US MOST AT MEETUPS AND IN OUR INBOX."
          titleWidth="w-full"
          subtitleWidth="w-full"
        />
      </div>

      <div className="h-10 md:h-[64px]" />

      <div className="flex flex-col w-full">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          const panelId = `faq-panel-${i}`;
          return (
            <div key={faq.question} className="flex flex-col w-full border-t border-t-[#1D1D1D]">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex items-center justify-between w-full py-5 md:h-[72px] text-left gap-4"
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
              >
                <span className="font-grotesk text-[14px] md:text-[16px] font-bold text-[#F5F5F0] tracking-[1px]">
                  {faq.question}
                </span>
                <span
                  aria-hidden="true"
                  className="flex items-center justify-center w-[32px] h-[32px] shrink-0 font-ibm-mono text-[14px] font-bold"
                  style={{
                    backgroundColor: isOpen ? "#FFD600" : "#1A1A1A",
                    border: isOpen ? "none" : "1px solid #3D3D3D",
                    color: isOpen ? "#0A0A0A" : "#888888",
                  }}
                >
                  {isOpen ? "—" : "+"}
                </span>
              </button>
              {isOpen && (
                <div id={panelId} className="pb-8">
                  <p className="font-ibm-mono text-[12px] md:text-[13px] text-[#888888] tracking-[1px] leading-[1.6] max-w-[900px]">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
        <div className="border-t border-t-[#1D1D1D]" />
      </div>
    </section>
  );
}
