const platforms = ["TRUENAS", "PROXMOX", "UNRAID", "OPNSENSE", "KUBERNETES"];

export default function Logos() {
  return (
    <section className="flex flex-col items-center w-full bg-[#0F0F0F] py-[48px] px-6 md:px-[120px] gap-[32px]">
      <span className="font-ibm-mono text-[11px] text-[#555555] tracking-[3px]">
        BUILT FOR THE STACKS YOU ALREADY RUN
      </span>
      <ul className="flex flex-wrap items-center justify-center gap-8 md:gap-[64px] w-full">
        {platforms.map((name) => (
          <li key={name} className="font-grotesk text-[13px] md:text-[14px] font-bold text-[#444444] tracking-[2px]">
            {name}
          </li>
        ))}
      </ul>
    </section>
  );
}
