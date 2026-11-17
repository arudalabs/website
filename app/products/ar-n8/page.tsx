import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { products } from "@/data/products";

export default function ARN8Page() {
  const product = products.find(
    (p) => p.slug === "ar-n8"
  );

  if (!product) {
    return null;
  }

  return (
    <main className="bg-[#060606] min-h-screen text-white">
      <section className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-[100px] flex flex-col gap-[64px]">

        <Link
          href="/#projects"
          className="font-ibm-mono text-[12px] tracking-[2px] text-[#666666] hover:text-[#FFD600] transition-colors"
        >
          ← BACK TO PROJECTS
        </Link>

        <SectionHeader
          label={product.code}
          title={product.name}
          subtitle={product.summary}
        />

        <div className="border border-[#2D2D2D] bg-[#111111] p-8">
          <span
            className="font-ibm-mono text-[10px] font-bold tracking-[2px] px-[10px] py-[6px] border"
            style={{
              color: product.statusColor,
              borderColor: product.statusColor,
            }}
          >
            {product.status}
          </span>

          <div className="mt-8">
            <h2 className="font-grotesk text-[24px] font-bold text-[#F5F5F0]">
              OVERVIEW
            </h2>

            <p className="mt-4 font-ibm-mono text-[14px] text-[#777777] leading-[1.8] max-w-[900px]">
              {product.summary}
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-grotesk text-[24px] font-bold text-[#F5F5F0] mb-8">
            SPECIFICATIONS
          </h2>

          <div className="grid md:grid-cols-3 gap-[2px]">
            {product.specs.map(([key, val]) => (
              <div
                key={key}
                className="bg-[#0A0A0A] border border-[#2D2D2D] p-6"
              >
                <dt className="font-ibm-mono text-[11px] text-[#555555] tracking-[1.5px]">
                  {key}
                </dt>

                <dd className="font-grotesk text-[18px] font-bold text-[#F5F5F0] mt-2">
                  {val}
                </dd>
              </div>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
}