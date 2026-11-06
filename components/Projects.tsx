import Image from "next/image";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    code: "AR-12",
    name: "MODULAR OPEN RACK",
    image: "/images/project-rack.png",
    alt: "Black aluminum extrusion 12U open-frame rack with yellow brackets, holding servers and a patch panel",
    status: "PROTOTYPE",
    statusColor: "#FFD600",
    summary:
      "A 12U open-frame rack assembled from eight extrusions and four rails. Extends to 24U with a riser kit and accepts snap-on side panels.",
    specs: [
      ["FORMAT", "19\" / 12U"],
      ["DEPTH", "450–600MM"],
      ["LOAD", "120KG"],
    ],
  },
  {
    code: "AR-N8",
    name: "8-BAY NAS CHASSIS",
    image: "/images/project-nas.png",
    alt: "Matte black 8-bay NAS chassis with hot-swap drive trays and small yellow status LEDs",
    status: "DVT",
    statusColor: "#FF6B35",
    summary:
      "Hot-swap SAS/SATA backplane, a 3x120mm fan wall tuned for sub-30dBA idle, and mini-ITX through micro-ATX mounting. Desktop or 2U rack.",
    specs: [
      ["BAYS", "8x 3.5\""],
      ["BOARD", "ITX / mATX"],
      ["NOISE", "<30 DBA"],
    ],
  },
  {
    code: "AR-M10",
    name: "10\" MINI LAB KIT",
    image: "/images/project-homelab.png",
    alt: "Compact 10-inch homelab rack with network switch, short patch cables, and mini PCs on shelves",
    status: "CONCEPT",
    statusColor: "#60A5FA",
    summary:
      "A desk-sized 10\" rack for mini PCs, a switch, and a router. Includes sleds for popular 1L machines and printable accessory files.",
    specs: [
      ["FORMAT", "10\" / 8U"],
      ["SLEDS", "1L PC x4"],
      ["FILES", "STEP + STL"],
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col w-full bg-[#060606] py-16 px-6 md:py-[100px] md:px-[120px] gap-12 md:gap-[64px] scroll-mt-[60px]"
    >
      <SectionHeader
        label="[03] // PROJECTS"
        title={"ON THE BENCH\nRIGHT NOW."}
        subtitle="ACTIVE HARDWARE PROJECTS AND WHERE EACH ONE SITS IN THE DEVELOPMENT PIPELINE."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[2px] w-full">
        {projects.map((project) => (
          <article key={project.code} className="flex flex-col bg-[#111111] border border-[#2D2D2D] group">
            <div className="relative w-full aspect-[4/3] overflow-hidden border-b border-b-[#2D2D2D] bg-[#0A0A0A]">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span
                className="absolute top-4 left-4 font-ibm-mono text-[10px] font-bold tracking-[2px] px-[10px] py-[6px] bg-[#0A0A0A] border"
                style={{ color: project.statusColor, borderColor: project.statusColor }}
              >
                {project.status}
              </span>
            </div>
            <div className="flex flex-col gap-4 p-6 md:p-8 flex-1">
              <span className="font-ibm-mono text-[11px] text-[#555555] tracking-[2px]">{project.code}</span>
              <h3 className="font-grotesk text-[20px] font-bold text-[#F5F5F0] tracking-[1px] leading-[1.2]">
                {project.name}
              </h3>
              <p className="font-ibm-mono text-[12px] text-[#777777] leading-[1.7]">{project.summary}</p>
              <dl className="grid grid-cols-3 gap-[2px] mt-auto pt-4">
                {project.specs.map(([key, val]) => (
                  <div key={key} className="flex flex-col gap-1 bg-[#0A0A0A] px-3 py-3">
                    <dt className="font-ibm-mono text-[9px] text-[#555555] tracking-[1.5px]">{key}</dt>
                    <dd className="font-grotesk text-[13px] font-bold text-[#F5F5F0]">{val}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
