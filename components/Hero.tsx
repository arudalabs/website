"use client";

import { useEffect, useState } from "react";
import GlitchText from "@/components/GlitchText";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative flex flex-col items-center w-full bg-[#0A0A0A] py-16 px-6 md:py-[100px] md:px-[120px] overflow-hidden">
      <div className="flex items-center justify-center gap-[8px] h-[32px] px-[12px] md:px-[16px] bg-[#1A1A1A] border-2 border-[#FFD600]">
        <div className="w-[8px] h-[8px] bg-[#FFD600] shrink-0" />
        <span className="font-ibm-mono text-[9px] md:text-[11px] font-bold text-[#FFD600] tracking-[1px] md:tracking-[2px] whitespace-nowrap">
          [REV.C] // AR-12 MODULAR RACK IN PROTOTYPE
        </span>
      </div>

      <div className="h-8" />

      <h1 className="font-grotesk text-[clamp(32px,10vw,96px)] font-bold text-[#F5F5F0] tracking-[-1px] leading-none text-center w-full max-w-[1100px]">
        <GlitchText text="INFRASTRUCTURE" speed={45} delay={100} />
        <br />
        <GlitchText text="YOU CAN" speed={45} delay={500} />{" "}
        <span className="text-[#FFD600]">
          <GlitchText text="REBUILD." speed={45} delay={800} />
        </span>
      </h1>

      <div className="h-8" />

      <p className="font-ibm-mono text-[13px] md:text-[15px] text-[#888888] tracking-[1px] leading-[1.6] text-center w-full max-w-[820px] text-pretty">
        ARUDA LABS DESIGNS MODULAR SERVER RACKS, NAS CHASSIS, AND HOMELAB
        HARDWARE. OPEN SPECS. STANDARD PARTS. BUILT TO BE EXTENDED, NOT REPLACED.
      </p>

      <div className="h-10 md:h-[48px]" />

      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        <button
          type="button"
          onClick={() => scrollTo("projects")}
          className="flex items-center justify-center w-full sm:w-[220px] h-[56px] bg-[#FFD600] hover:bg-[#e6c200] transition-colors"
        >
          <span className="font-grotesk text-[12px] font-bold text-[#0A0A0A] tracking-[2px]">
            EXPLORE PROJECTS
          </span>
        </button>
        <button
          type="button"
          onClick={() => scrollTo("roadmap")}
          className="flex items-center justify-center w-full sm:w-[220px] h-[56px] bg-[#0A0A0A] border-2 border-[#3D3D3D] hover:border-[#888888] transition-colors"
        >
          <span className="font-ibm-mono text-[12px] text-[#888888] tracking-[2px]">
            VIEW ROADMAP &gt;
          </span>
        </button>
      </div>

      <div className="h-6" />

      <p className="font-ibm-mono text-[11px] text-[#555555] tracking-[2px] text-center">
        {"19\" & 10\" FORMATS // OPEN CAD FILES // TOOL-LESS ASSEMBLY"}
      </p>

      <div className="h-12 md:h-[64px]" />

      <div className="w-full max-w-[1100px] bg-[#0F0F0F] overflow-hidden border-2 border-[#2D2D2D]">
        <RackSVG mounted={mounted} />
      </div>
    </section>
  );
}

type Unit = { u: number; label: string; kind: "patch" | "switch" | "server" | "nas" | "ups" | "blank"; color: string };

const units: Unit[] = [
  { u: 1, label: "PATCH PANEL 24P", kind: "patch", color: "#888" },
  { u: 1, label: "SWITCH 10GBE", kind: "switch", color: "#60A5FA" },
  { u: 1, label: "NODE-01 / PROXMOX", kind: "server", color: "#4ADE80" },
  { u: 1, label: "NODE-02 / PROXMOX", kind: "server", color: "#4ADE80" },
  { u: 1, label: "BLANK", kind: "blank", color: "#333" },
  { u: 2, label: "AR-N8 NAS / 8 BAY", kind: "nas", color: "#FFD600" },
  { u: 1, label: "BLANK", kind: "blank", color: "#333" },
  { u: 2, label: "UPS 1500VA", kind: "ups", color: "#FF6B35" },
  { u: 2, label: "SHELF / MINI PC", kind: "blank", color: "#555" },
];

const telemetry = [
  { key: "INLET", val: "24.1°C", pct: 0.42, color: "#4ADE80" },
  { key: "EXHAUST", val: "31.8°C", pct: 0.58, color: "#FFD600" },
  { key: "POWER", val: "312W", pct: 0.36, color: "#FF6B35" },
  { key: "NET", val: "6.2 GB/S", pct: 0.62, color: "#60A5FA" },
];

const UNIT_H = 32;
const RACK_X = 400;
const RACK_W = 300;
const RACK_Y = 60;

function RackSVG({ mounted }: { mounted: boolean }) {
  let cursor = 0;
  const placed = units.map((unit) => {
    const y = RACK_Y + cursor * UNIT_H;
    cursor += unit.u;
    return { ...unit, y, start: cursor - unit.u + 1 };
  });
  const totalU = cursor;
  const rackH = totalU * UNIT_H;

  return (
    <>
      <style>{`
        @keyframes ar-blink { 0%,100%{opacity:1} 50%{opacity:0.15} }
        @keyframes ar-scan { 0%{transform:translateY(-40px)} 100%{transform:translateY(540px)} }
        @keyframes ar-pulse { 0%,100%{opacity:0.3} 50%{opacity:1} }
        .ar-led { animation: ar-blink 1.2s steps(2, jump-none) infinite; }
        .ar-scan { animation: ar-scan 5s linear infinite; }
        .ar-pulse { animation: ar-pulse 2s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .ar-led, .ar-scan, .ar-pulse { animation: none; } }
      `}</style>

      <svg
        viewBox="0 0 1100 540"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Rack elevation diagram of a 12U Aruda Labs modular rack with patch panel, switch, compute nodes, an 8-bay NAS, and a UPS, alongside live telemetry readouts"
        style={{ display: "block", width: "100%", height: "auto" }}
      >
        <rect width="1100" height="540" fill="#0F0F0F" />

        {Array.from({ length: 22 }, (_, c) =>
          Array.from({ length: 11 }, (_, r) => (
            <circle key={`d${c}-${r}`} cx={c * 50 + 25} cy={r * 50 + 25} r="1" fill="#1A1A1A" />
          ))
        )}

        <rect className="ar-scan" x="220" y="0" width="660" height="4" fill="rgba(255,214,0,0.05)" />

        {/* Left panel: elevation list */}
        <rect x="0" y="0" width="220" height="540" fill="#111111" />
        <line x1="220" y1="0" x2="220" y2="540" stroke="#2D2D2D" />
        <rect x="0" y="0" width="220" height="36" fill="#161616" />
        <text x="14" y="23" fontFamily="monospace" fontSize="9" fill="#FFD600" letterSpacing={2} fontWeight="700">ELEVATION / AR-12</text>
        {placed.map((p, i) => (
          <g
            key={i}
            style={{
              opacity: mounted ? 1 : 0,
              transition: `opacity 0.4s ease ${i * 0.07}s`,
            }}
          >
            {p.kind === "nas" && <rect x="0" y={44 + i * 30} width="220" height="30" fill="#1E1E1E" />}
            {p.kind === "nas" && <rect x="0" y={44 + i * 30} width="2" height="30" fill="#FFD600" />}
            <text x="14" y={63 + i * 30} fontFamily="monospace" fontSize="8" fill="#444">
              U{String(p.start).padStart(2, "0")}
            </text>
            <circle cx="46" cy={60 + i * 30} r="3" fill={p.color} />
            <text x="56" y={63 + i * 30} fontFamily="monospace" fontSize="8.5" fill={p.kind === "nas" ? "#F5F5F0" : "#666"} letterSpacing={0.5}>
              {p.label}
            </text>
          </g>
        ))}

        {/* Rack frame */}
        <text x={RACK_X} y={RACK_Y - 18} fontFamily="monospace" fontSize="8" fill="#FFD600" letterSpacing={1}>
          AR-12 / 19&quot; / 12U / 600MM DEPTH
        </text>
        <rect x={RACK_X - 24} y={RACK_Y - 8} width={RACK_W + 48} height={rackH + 16} fill="none" stroke="#2D2D2D" strokeWidth="2" />
        <rect x={RACK_X - 18} y={RACK_Y} width="14" height={rackH} fill="#161616" />
        <rect x={RACK_X + RACK_W + 4} y={RACK_Y} width="14" height={rackH} fill="#161616" />
        {Array.from({ length: totalU * 3 }, (_, i) => (
          <g key={`hole${i}`}>
            <rect x={RACK_X - 13} y={RACK_Y + 4 + i * (UNIT_H / 3)} width="4" height="4" fill="#0A0A0A" />
            <rect x={RACK_X + RACK_W + 9} y={RACK_Y + 4 + i * (UNIT_H / 3)} width="4" height="4" fill="#0A0A0A" />
          </g>
        ))}
        {Array.from({ length: totalU }, (_, i) => (
          <text key={`un${i}`} x={RACK_X - 44} y={RACK_Y + i * UNIT_H + 20} fontFamily="monospace" fontSize="7" fill="#333">
            {String(i + 1).padStart(2, "0")}
          </text>
        ))}

        {placed.map((p, i) => {
          const h = p.u * UNIT_H - 2;
          return (
            <g
              key={`unit${i}`}
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateX(0)" : "translateX(-12px)",
                transition: `opacity 0.4s ease ${0.2 + i * 0.07}s, transform 0.4s ease ${0.2 + i * 0.07}s`,
              }}
            >
              <rect
                x={RACK_X}
                y={p.y + 1}
                width={RACK_W}
                height={h}
                fill={p.kind === "blank" ? "#121212" : "#1A1A1A"}
                stroke={p.kind === "nas" ? "#FFD600" : "#262626"}
                strokeWidth={p.kind === "nas" ? 1.5 : 1}
                strokeDasharray={p.kind === "nas" ? "4 2" : undefined}
              />
              {p.kind === "patch" &&
                Array.from({ length: 24 }, (_, k) => (
                  <rect key={k} x={RACK_X + 30 + k * 10} y={p.y + 11} width="7" height="9" fill="#0A0A0A" stroke="#333" strokeWidth="0.5" />
                ))}
              {p.kind === "switch" &&
                Array.from({ length: 16 }, (_, k) => (
                  <g key={k}>
                    <rect x={RACK_X + 20 + k * 14} y={p.y + 11} width="10" height="9" fill="#0A0A0A" stroke="#333" strokeWidth="0.5" />
                    <rect
                      className={k % 3 === 0 ? "ar-led" : undefined}
                      style={{ animationDelay: `${k * 0.13}s` }}
                      x={RACK_X + 22 + k * 14}
                      y={p.y + 7}
                      width="3"
                      height="2"
                      fill="#60A5FA"
                    />
                  </g>
                ))}
              {p.kind === "server" && (
                <>
                  {Array.from({ length: 4 }, (_, k) => (
                    <rect key={k} x={RACK_X + 16 + k * 40} y={p.y + 9} width="34" height="13" fill="#111" stroke="#2D2D2D" strokeWidth="0.5" />
                  ))}
                  {Array.from({ length: 10 }, (_, k) => (
                    <rect key={`v${k}`} x={RACK_X + 190 + k * 6} y={p.y + 9} width="2" height="13" fill="#222" />
                  ))}
                  <circle className="ar-led" style={{ animationDelay: `${i * 0.3}s` }} cx={RACK_X + RACK_W - 16} cy={p.y + 16} r="2.5" fill="#4ADE80" />
                </>
              )}
              {p.kind === "nas" &&
                Array.from({ length: 8 }, (_, k) => (
                  <g key={k}>
                    <rect x={RACK_X + 12 + k * 35} y={p.y + 8} width="30" height="46" fill="#111" stroke="#333" strokeWidth="0.75" />
                    <rect x={RACK_X + 16 + k * 35} y={p.y + 14} width="22" height="2" fill="#2D2D2D" />
                    <rect x={RACK_X + 16 + k * 35} y={p.y + 19} width="22" height="2" fill="#2D2D2D" />
                    <circle
                      className="ar-led"
                      style={{ animationDelay: `${k * 0.17}s` }}
                      cx={RACK_X + 27 + k * 35}
                      cy={p.y + 46}
                      r="2"
                      fill={k === 6 ? "#FF6B35" : "#FFD600"}
                    />
                  </g>
                ))}
              {p.kind === "ups" && (
                <>
                  <rect x={RACK_X + 20} y={p.y + 16} width="90" height="30" fill="#0A0A0A" stroke="#333" strokeWidth="0.75" />
                  <text x={RACK_X + 30} y={p.y + 35} fontFamily="monospace" fontSize="9" fill="#FF6B35">100% / 21MIN</text>
                  {Array.from({ length: 14 }, (_, k) => (
                    <rect key={k} x={RACK_X + 140 + k * 10} y={p.y + 14} width="4" height="34" fill="#202020" />
                  ))}
                </>
              )}
              {p.kind === "blank" && p.u === 2 && (
                <>
                  <rect x={RACK_X + 30} y={p.y + 22} width="60" height="38" fill="#1A1A1A" stroke="#2D2D2D" strokeWidth="0.75" />
                  <rect x={RACK_X + 110} y={p.y + 22} width="60" height="38" fill="#1A1A1A" stroke="#2D2D2D" strokeWidth="0.75" />
                  <rect x={RACK_X + 190} y={p.y + 22} width="60" height="38" fill="#1A1A1A" stroke="#2D2D2D" strokeWidth="0.75" />
                </>
              )}
            </g>
          );
        })}

        {/* Dimension guide */}
        <line x1={RACK_X + RACK_W + 44} y1={RACK_Y} x2={RACK_X + RACK_W + 44} y2={RACK_Y + rackH} stroke="#FF6B35" strokeWidth="0.75" />
        <line x1={RACK_X + RACK_W + 38} y1={RACK_Y} x2={RACK_X + RACK_W + 50} y2={RACK_Y} stroke="#FF6B35" strokeWidth="0.75" />
        <line x1={RACK_X + RACK_W + 38} y1={RACK_Y + rackH} x2={RACK_X + RACK_W + 50} y2={RACK_Y + rackH} stroke="#FF6B35" strokeWidth="0.75" />
        <text x={RACK_X + RACK_W + 52} y={RACK_Y + rackH / 2} fontFamily="monospace" fontSize="7" fill="#FF6B35">533MM</text>

        {/* Right panel: telemetry */}
        <rect x="880" y="0" width="220" height="540" fill="#111111" />
        <line x1="880" y1="0" x2="880" y2="540" stroke="#2D2D2D" />
        <rect x="880" y="0" width="220" height="36" fill="#161616" />
        <text x="894" y="23" fontFamily="monospace" fontSize="9" fill="#FFD600" letterSpacing={2} fontWeight="700">TELEMETRY</text>
        {telemetry.map((t, i) => {
          const y = 64 + i * 52;
          return (
            <g key={t.key} style={{ opacity: mounted ? 1 : 0, transition: `opacity 0.4s ease ${0.3 + i * 0.08}s` }}>
              <text x="894" y={y} fontFamily="monospace" fontSize="8" fill="#555" letterSpacing={1}>{t.key}</text>
              <text x="1086" y={y} textAnchor="end" fontFamily="monospace" fontSize="8" fill="#AAA">{t.val}</text>
              <rect x="894" y={y + 10} width="192" height="6" fill="#1A1A1A" />
              <rect
                x="894"
                y={y + 10}
                width={mounted ? 192 * t.pct : 0}
                height="6"
                fill={t.color}
                style={{ transition: `width 1s ease ${0.4 + i * 0.1}s` }}
              />
            </g>
          );
        })}
        <line x1="880" y1="282" x2="1100" y2="282" stroke="#222" />
        <text x="894" y="306" fontFamily="monospace" fontSize="9" fill="#FFD600" letterSpacing={2} fontWeight="700">BILL OF MATERIALS</text>
        {[
          ["EXTRUSION 2020", "x8"],
          ["RAIL / M6 CAGE", "x4"],
          ["SIDE PANEL", "x2"],
          ["CASTER KIT", "x1"],
          ["CABLE SPINE", "x1"],
        ].map(([name, qty], i) => (
          <g key={name}>
            <text x="894" y={330 + i * 22} fontFamily="monospace" fontSize="8" fill="#666">{name}</text>
            <text x="1086" y={330 + i * 22} textAnchor="end" fontFamily="monospace" fontSize="8" fill="#444">{qty}</text>
          </g>
        ))}

        {/* Status bar */}
        <line x1="220" y1="507" x2="880" y2="507" stroke="#222" />
        <rect x="220" y="508" width="660" height="32" fill="#0D0D0D" />
        <circle className="ar-pulse" cx="240" cy="524" r="4" fill="#4ADE80" />
        <text x="252" y="528" fontFamily="monospace" fontSize="8" fill="#555" letterSpacing={1}>ALL SYSTEMS NOMINAL</text>
        <text x="440" y="528" fontFamily="monospace" fontSize="8" fill="#333" letterSpacing={1}>{totalU}U POPULATED</text>
        <text x="570" y="528" fontFamily="monospace" fontSize="8" fill="#333" letterSpacing={1}>8 DRIVES / 96TB</text>
        <text x="760" y="528" fontFamily="monospace" fontSize="8" fill="#333" letterSpacing={1}>REV.C</text>
      </svg>
    </>
  );
}
