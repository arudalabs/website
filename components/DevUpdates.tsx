import SectionHeader from "./SectionHeader";

const updates = [
  {
    date: "2026-06-02",
    project: "AR-N8",
    type: "HARDWARE",
    color: "#FF6B35",
    title: "BACKPLANE REV.B PASSES THERMAL SOAK",
    body: "48-hour soak at full drive load held all eight bays under 41°C with fans at 40%. Moving the fan curve and firmware into DVT builds.",
  },
  {
    date: "2026-05-18",
    project: "AR-12",
    type: "MECHANICAL",
    color: "#FFD600",
    title: "TOOL-LESS RAIL LATCH, TAKE THREE",
    body: "Swapped the spring pin for a cam lever after the second revision loosened under vibration testing. New latch survives 500 insert cycles.",
  },
  {
    date: "2026-05-04",
    project: "AR-M10",
    type: "DESIGN",
    color: "#60A5FA",
    title: "MINI PC SLED DIMENSIONS LOCKED",
    body: "Measured fourteen popular 1L machines and settled on a universal sled with two adjustable stops. CAD files will publish with the concept review.",
  },
  {
    date: "2026-04-21",
    project: "PLATFORM",
    type: "OPEN SOURCE",
    color: "#4ADE80",
    title: "STEP FILES FOR AR-12 REV.A ARE PUBLIC",
    body: "Frame, rails, and corner brackets are now on our repository under CERN-OHL-P. Community printable accessories are welcome.",
  },
];

export default function DevUpdates() {
  return (
    <section
      id="updates"
      className="flex flex-col w-full bg-[#0A0A0A] py-16 px-6 md:py-[100px] md:px-[120px] gap-12 md:gap-[64px] scroll-mt-[60px]"
    >
      <SectionHeader
        label="[04] // DEVELOPMENT UPDATES"
        title={"FIELD NOTES\nFROM THE LAB."}
        subtitle="WHAT WE BUILT, WHAT BROKE, AND WHAT CHANGED. POSTED AS IT HAPPENS."
      />

      <ol className="flex flex-col w-full">
        {updates.map((update) => (
          <li
            key={update.title}
            className="flex flex-col md:flex-row gap-4 md:gap-12 py-8 border-t border-t-[#1D1D1D] last:border-b last:border-b-[#1D1D1D]"
          >
            <div className="flex md:flex-col gap-4 md:gap-2 md:w-[200px] md:shrink-0">
              <time dateTime={update.date} className="font-ibm-mono text-[12px] text-[#888888] tracking-[1px]">
                {update.date}
              </time>
              <span className="font-ibm-mono text-[11px] font-bold tracking-[2px]" style={{ color: update.color }}>
                {update.project}
              </span>
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <span
                className="font-ibm-mono text-[10px] tracking-[2px] w-fit px-2 py-1 border"
                style={{ color: update.color, borderColor: update.color }}
              >
                {update.type}
              </span>
              <h3 className="font-grotesk text-[18px] md:text-[22px] font-bold text-[#F5F5F0] tracking-[0.5px] leading-[1.25]">
                {update.title}
              </h3>
              <p className="font-ibm-mono text-[12px] md:text-[13px] text-[#777777] leading-[1.7] max-w-[760px] text-pretty">
                {update.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
