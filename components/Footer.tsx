const columns = [
  {
    heading: "PRODUCTS",
    links: [
      { label: "SERVER RACKS", href: "#products" },
      { label: "NAS CHASSIS", href: "#products" },
      { label: "ACCESSORIES", href: "#products" },
    ],
  },
  {
    heading: "LAB",
    links: [
      { label: "PROJECTS", href: "#projects" },
      { label: "UPDATES", href: "#updates" },
      { label: "ROADMAP", href: "#roadmap" },
    ],
  },
  {
    heading: "COMPANY",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "CONTACT", href: "#contact" },
      { label: "OPEN CAD", href: "https://github.com/aruda-labs" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col w-full bg-[#050505]">
      <div className="flex flex-col md:flex-row gap-12 md:gap-[80px] px-6 md:px-[120px] py-12 md:py-[64px]">
        <div className="flex flex-col gap-6 md:w-[280px] md:shrink-0">
          <div className="flex items-center gap-[12px]">
            <div className="w-[32px] h-[32px] bg-[#FFD600] shrink-0" aria-hidden="true" />
            <span className="font-grotesk text-[16px] font-bold text-[#FFD600] tracking-[3px]">ARUDA LABS</span>
          </div>
          <p className="font-ibm-mono text-[11px] text-[#888888] tracking-[1px] leading-[1.6] max-w-[260px]">
            MODULAR RACKS, NAS CHASSIS, AND HOMELAB INFRASTRUCTURE. OPEN SPECS. STANDARD PARTS.
          </p>
        </div>

        <div className="grid grid-cols-3 md:flex md:flex-1 gap-8 md:gap-[80px]">
          {columns.map((col) => (
            <nav key={col.heading} aria-label={col.heading} className="flex flex-col gap-4 md:gap-[20px]">
              <span className="font-grotesk text-[11px] font-bold text-[#F5F5F0] tracking-[2px]">{col.heading}</span>
              {col.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-ibm-mono text-[12px] text-[#888888] tracking-[1px] hover:text-[#CCCCCC] transition-colors"
                  {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full px-6 md:px-[120px] py-4 md:h-[56px] border-t border-t-[#1D1D1D] gap-3 sm:gap-0">
        <span className="font-ibm-mono text-[11px] text-[#666666] tracking-[1px]">
          © 2026 ARUDA LABS. ALL RIGHTS RESERVED.
        </span>
        <span className="font-ibm-mono text-[11px] font-bold text-[#FFD600] tracking-[1px]">AR-12 / REV.C</span>
      </div>
    </footer>
  );
}
