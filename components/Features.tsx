import SectionHeader from "./SectionHeader";

interface ProductLineProps {
  code: string;
  accent: string;
  title: string;
  description: string;
  specs: string[];
  tag: string;
}

const productLines: ProductLineProps[] = [
  {
    code: "AR-R",
    accent: "#FFD600",
    title: "MODULAR\nSERVER RACKS",
    description:
      "OPEN-FRAME 19\" AND 10\" RACKS BUILT FROM STANDARD 2020 EXTRUSION. ADD HEIGHT, DEPTH, OR SIDE PANELS WITHOUT BUYING A NEW FRAME.",
    specs: ["6U — 24U", "450 / 600MM DEPTH", "TOOL-LESS RAILS"],
    tag: "RACKS",
  },
  {
    code: "AR-N",
    accent: "#FF6B35",
    title: "NAS\nCHASSIS",
    description:
      "HOT-SWAP STORAGE ENCLOSURES WITH PASSIVE BACKPLANES, QUIET AIRFLOW, AND MOUNTS FOR MINI-ITX THROUGH MICRO-ATX BOARDS.",
    specs: ["4 / 8 / 12 BAYS", "SAS + SATA", "120MM FAN WALL"],
    tag: "STORAGE",
  },
  {
    code: "AR-H",
    accent: "#F5F5F0",
    title: "HOMELAB\nINFRASTRUCTURE",
    description:
      "SHELVES, PATCH PANELS, MINI PC SLEDS, PDU MOUNTS, AND CABLE SPINES THAT SNAP INTO ANY ARUDA FRAME — OR YOURS.",
    specs: ["1U ACCESSORIES", "PRINTABLE PARTS", "OPEN CAD"],
    tag: "ACCESSORIES",
  },
];

function ProductLineCard({ code, accent, title, description, specs, tag }: ProductLineProps) {
  return (
    <article
      className="flex flex-col gap-5 p-8 border w-full md:flex-1 bg-[#111111]"
      style={{ borderColor: accent }}
    >
      <div className="flex items-center justify-between">
        <div className="w-[40px] h-[40px] shrink-0" style={{ backgroundColor: accent }} aria-hidden="true" />
        <span className="font-ibm-mono text-[11px] tracking-[2px] text-[#555555]">{code}</span>
      </div>
      <h3 className="font-grotesk text-[20px] font-bold text-[#F5F5F0] tracking-[1px] leading-[1.2] whitespace-pre-line">
        {title}
      </h3>
      <p className="font-ibm-mono text-[12px] text-[#777777] tracking-[1px] leading-[1.6]">{description}</p>
      <ul className="flex flex-col gap-2 mt-auto pt-2 border-t border-t-[#222222]">
        {specs.map((spec) => (
          <li key={spec} className="flex items-center gap-2 font-ibm-mono text-[11px] text-[#AAAAAA] tracking-[1px]">
            <span className="w-[4px] h-[4px] shrink-0" style={{ backgroundColor: accent }} aria-hidden="true" />
            {spec}
          </li>
        ))}
      </ul>
      <div
        className="flex items-center justify-center h-[28px] px-[12px] bg-[#1A1A1A] border w-fit"
        style={{ borderColor: accent }}
      >
        <span className="font-ibm-mono text-[11px] tracking-[2px]" style={{ color: accent }}>
          {tag}
        </span>
      </div>
    </article>
  );
}

export default function Features() {
  return (
    <section
      id="products"
      className="flex flex-col w-full bg-[#0A0A0A] py-16 px-6 md:py-[100px] md:px-[120px] gap-12 md:gap-[64px] scroll-mt-[60px]"
    >
      <SectionHeader
        label="[01] // PRODUCT LINES"
        title={"THREE SYSTEMS.\nONE STANDARD."}
        subtitle="EVERY ARUDA PART SHARES THE SAME MOUNTING GRID, FASTENERS, AND DIMENSIONS. MIX, MATCH, AND UPGRADE ONE PIECE AT A TIME."
      />
      <div className="flex flex-col md:flex-row w-full gap-[2px]">
        {productLines.map((line) => (
          <ProductLineCard key={line.code} {...line} />
        ))}
      </div>
    </section>
  );
}
