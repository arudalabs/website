"use client";

import { useState, type FormEvent } from "react";
import SectionHeader from "./SectionHeader";

const CONTACT_EMAIL = "contact@arudalabs.com";

const topics = ["GENERAL", "BETA PROGRAM", "WHOLESALE / RESELLER", "PRESS", "ENGINEERING COLLAB"];

const channels = [
  { label: "GENERAL", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { label: "SOURCE + CAD", value: "GITHUB / ARUDA-LABS", href: "https://github.com/aruda-labs" },
  { label: "LOCATION", value: "DESIGNED + TESTED IN-HOUSE", href: undefined },
];

const socials = [
  { label: "GITHUB", handle: "@aruda-labs", href: "https://github.com/aruda-labs" },
  { label: "X / TWITTER", handle: "@arudalabs", href: "https://x.com/arudalabs" },
  { label: "YOUTUBE", handle: "@arudalabs", href: "https://youtube.com/@arudalabs" },
  { label: "REDDIT", handle: "r/arudalabs", href: "https://reddit.com/r/arudalabs" },
  { label: "DISCORD", handle: "COMMUNITY SERVER", href: "https://discord.gg/arudalabs" },
  { label: "INSTAGRAM", handle: "@arudalabs", href: "https://instagram.com/arudalabs" },
];

const inputClass =
  "w-full bg-[#0A0A0A] border border-[#2D2D2D] px-4 py-3 font-ibm-mono text-[13px] text-[#F5F5F0] placeholder:text-[#444444] focus:outline-none focus:border-[#FFD600] transition-colors";
const labelClass = "font-ibm-mono text-[10px] font-bold text-[#888888] tracking-[2px]";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const topic = String(data.get("topic") ?? "GENERAL");
    const message = String(data.get("message") ?? "").trim();

    const subject = `[${topic}] Message from ${name}`;
    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section
      id="contact"
      className="flex flex-col w-full bg-[#0A0A0A] py-16 px-6 md:py-[100px] md:px-[120px] border-t-2 border-t-[#FFD600] scroll-mt-[60px]"
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-[96px] w-full">
        <div className="flex flex-col gap-10 lg:w-[420px] lg:shrink-0">
          <SectionHeader
            label="[07] // CONTACT"
            title={"LET'S BUILD\nSOMETHING."}
            subtitle="BETA ACCESS, RESELLER INQUIRIES, CUSTOM RACK BUILDS, OR JUST A QUESTION ABOUT YOUR LAB. A HUMAN READS EVERY MESSAGE."
            titleWidth="w-full"
            subtitleWidth="w-full mt-[5px] ml-[3px]"
            subtitleSize="text-[10px] md:text-[14px]"
          />
          <dl className="flex flex-col border-t border-t-[#1D1D1D]">
            {channels.map((c) => (
              <div key={c.label} className="flex items-center justify-between gap-4 py-4 border-b border-b-[#1D1D1D]">
                <dt className="font-ibm-mono text-[10px] text-[#555555] tracking-[2px]">{c.label}</dt>
                <dd className="font-ibm-mono text-[12px] text-[#F5F5F0] tracking-[1px] text-right">
                  {c.href ? (
                    <a
                      href={c.href}
                      className="hover:text-[#FFD600] transition-colors"
                      {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {c.value}
                    </a>
                  ) : (
                    c.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <div className="flex flex-col gap-4">
            <h3 className="font-ibm-mono text-[10px] font-bold text-[#888888] tracking-[2px]">FOLLOW THE BUILD</h3>
            <ul className="grid grid-cols-2 gap-px bg-[#1D1D1D] border border-[#1D1D1D]">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-1 h-full bg-[#0A0A0A] px-4 py-4 hover:bg-[#111111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FFD600] transition-colors"
                  >
                    <span className="flex items-center justify-between font-grotesk text-[12px] font-bold text-[#F5F5F0] tracking-[2px] group-hover:text-[#FFD600] transition-colors">
                      {s.label}
                      <span aria-hidden="true" className="text-[#555555] group-hover:text-[#FFD600] transition-colors">{"->"}</span>
                    </span>
                    <span className="font-ibm-mono text-[10px] text-[#555555] tracking-[1px]">{s.handle}</span>
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 bg-[#111111] border border-[#2D2D2D] p-6 md:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-name" className={labelClass}>NAME</label>
              <input id="contact-name" name="name" required autoComplete="name" maxLength={100} placeholder="ADA LOVELACE" className={inputClass} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-email" className={labelClass}>EMAIL</label>
              <input id="contact-email" name="email" type="email" required autoComplete="email" maxLength={200} placeholder="YOU@HOMELAB.DEV" className={inputClass} />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-topic" className={labelClass}>TOPIC</label>
            <select id="contact-topic" name="topic" defaultValue="GENERAL" className={`${inputClass} appearance-none cursor-pointer`}>
              {topics.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-message" className={labelClass}>MESSAGE</label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={6}
              maxLength={4000}
              placeholder="TELL US ABOUT YOUR SETUP..."
              className={`${inputClass} resize-y min-h-[140px]`}
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="font-ibm-mono text-[11px] text-[#555555] tracking-[1px]" aria-live="polite">
              {sent ? "OPENING YOUR EMAIL CLIENT..." : "OPENS IN YOUR EMAIL CLIENT."}
            </p>
            <button
              type="submit"
              className="flex items-center justify-center h-[56px] px-8 bg-[#FFD600] hover:bg-[#e6c200] transition-colors"
            >
              <span className="font-grotesk text-[12px] font-bold text-[#0A0A0A] tracking-[2px]">SEND MESSAGE &gt;</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
