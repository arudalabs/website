export const products = [
  {
    code: "AR-12",
    slug: "ar-12",
    name: "MODULAR OPEN RACK",
    image: "/images/project-rack.png",
    alt: "Black aluminum extrusion 12U open-frame rack with yellow brackets, holding servers and a patch panel",
    status: "PROTOTYPE",
    statusColor: "#FFD600",
    summary:
      "A 12U open-frame rack assembled from eight extrusions and four rails. Extends to 24U with a riser kit and accepts snap-on side panels.",
    specs: [
      ["FORMAT", '19" / 12U'],
      ["DEPTH", "450-600MM"],
      ["LOAD", "120KG"],
    ],
  },

  {
    code: "AR-N8",
    slug: "ar-n8",
    name: "8-BAY NAS CHASSIS",
    image: "/images/project-nas.png",
    alt: "Matte black 8-bay NAS chassis with hot-swap drive trays and small yellow status LEDs",
    status: "DVT",
    statusColor: "#FF6B35",
    summary:
      "Hot-swap SAS/SATA backplane, a 3x120mm fan wall tuned for sub-30dBA idle, and mini-ITX through micro-ATX mounting. Desktop or 2U rack deployment.",
    specs: [
      ["BAYS", '8x 3.5"'],
      ["BOARD", "ITX / mATX"],
      ["NOISE", "<30 DBA"],
    ],
  },

  {
    code: "AR-M10",
    slug: "ar-m10",
    name: '10" MINI LAB KIT',
    image: "/images/project-homelab.png",
    alt: "Compact 10-inch homelab rack with network switch, short patch cables, and mini PCs on shelves",
    status: "CONCEPT",
    statusColor: "#60A5FA",
    summary:
      "A desk-sized 10-inch rack for mini PCs, a switch, and a router. Includes sleds for popular 1L machines and printable accessory files.",
    specs: [
      ["FORMAT", '10" / 8U'],
      ["SLEDS", "1L PC x4"],
      ["FILES", "STEP + STL"],
    ],
  },
];