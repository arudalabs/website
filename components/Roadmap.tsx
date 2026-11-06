import SectionHeader from "./SectionHeader";

type Status = "SHIPPED" | "IN PROGRESS" | "PLANNED" | "EXPLORING";

const statusStyles: Record<Status, { color: string; fill: number }> = {
  SHIPPED: { color: "#4ADE80", fill: 1 },
  "IN PROGRESS": { color: "#FFD600", fill: 0.6 },
  PLANNED: { color: "#FF6B35", fill: 0.25 },
  EXPLORING: { color: "#60A5FA", fill: 0.08 },
};

const phases: { quarter: string; title: string; items: { name: string; status: Status }[] }[] = [
  {
    quarter: "Q2 2026",
    title: "FOUNDATION",
    items: [
      { name: "AR-12 REV.A OPEN CAD RELEASE", status: "SHIPPED" },
      { name: "AR-N8 THERMAL VALIDATION", status: "SHIPPED" },
      { name: "TOOL-LESS RAIL LATCH", status: "IN PROGRESS" },
    ],
  },
  {
    quarter: "Q3 2026",
    title: "FIRST UNITS",
    items: [
      { name: "AR-12 BETA BUILD — 50 UNITS", status: "IN PROGRESS" },
      { name: "AR-N8 DVT BUILDS", status: "PLANNED" },
      { name: "ACCESSORY STORE: SHELVES + PANELS", status: "PLANNED" },
    ],
  },
  {
    quarter: "Q4 2026",
    title: "SCALE",
    items: [
      { name: "AR-12 GENERAL AVAILABILITY", status: "PLANNED" },
      { name: "AR-M10 MINI LAB KIT PROTOTYPE", status: "PLANNED" },
      { name: "24U RISER + CASTER KIT", status: "PLANNED" },
    ],
  },
  {
    quarter: "2027",
    title: "ECOSYSTEM",
    items: [
      { name: "12-BAY NAS WITH SAS EXPANDER", status: "EXPLORING" },
      { name: "SMART PDU + TELEMETRY MODULE", status: "EXPLORING" },
      { name: "LIQUID-COOLED COMPUTE SLED", status: "EXPLORING" },
    ],
  },
];

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="flex flex-col w-full bg-[#060606] py-16 px-6 md:py-[100px] md:px-[120px] gap-12 md:gap-[64px] scroll-mt-[60px]"
    >
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <SectionHeader
          label="[05] // PRODUCT ROADMAP"
          title={"WHAT SHIPS\nNEXT."}
          subtitle="TARGETS, NOT PROMISES. HARDWARE TIMELINES MOVE — WE'LL TELL YOU WHEN THEY DO."
        />
        <ul className="flex flex-wrap gap-4 shrink-0" aria-label="Status legend">
          {(Object.keys(statusStyles) as Status[]).map((status) => (
            <li key={status} className="flex items-center gap-2 font-ibm-mono text-[10px] text-[#888888] tracking-[1.5px]">
              <span className="w-[8px] h-[8px]" style={{ backgroundColor: statusStyles[status].color }} aria-hidden="true" />
              {status}
            </li>
          ))}
        </ul>
      </div>

      <ol className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[2px] w-full">
        {phases.map((phase, i) => (
          <li key={phase.quarter} className="flex flex-col bg-[#111111] border border-[#2D2D2D]">
            <div className="flex items-center justify-between px-6 py-4 border-b border-b-[#2D2D2D] bg-[#161616]">
              <span className="font-ibm-mono text-[11px] font-bold text-[#FFD600] tracking-[2px]">{phase.quarter}</span>
              <span className="font-ibm-mono text-[10px] text-[#444444] tracking-[2px]">
                PHASE {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="flex flex-col gap-6 p-6">
              <h3 className="font-grotesk text-[22px] font-bold text-[#F5F5F0] tracking-[1px]">{phase.title}</h3>
              <ul className="flex flex-col gap-5">
                {phase.items.map((item) => {
                  const style = statusStyles[item.status];
                  return (
                    <li key={item.name} className="flex flex-col gap-2">
                      <div className="flex items-start justify-between gap-3">
                        <span className="font-ibm-mono text-[12px] text-[#CCCCCC] leading-[1.5]">{item.name}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-[4px] bg-[#1F1F1F]" aria-hidden="true">
                          <div className="h-full" style={{ width: `${style.fill * 100}%`, backgroundColor: style.color }} />
                        </div>
                        <span className="font-ibm-mono text-[9px] tracking-[1.5px] shrink-0" style={{ color: style.color }}>
                          {item.status}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
