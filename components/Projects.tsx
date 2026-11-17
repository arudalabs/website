import Image from "next/image";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { products } from "@/data/products";

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
        {products.map((project) => (
          <Link key ={project.code} href={`/products/${project.slug}`} className="block">
          <article className="flex flex-col bg-[#111111] border border-[#2D2D2D] group">
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
          </Link>
        ))}
      </div>
    </section>
  );
}
