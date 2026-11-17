import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://arudalabs.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://arudalabs.com/products/ar-12",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://arudalabs.com/products/ar-n8",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://arudalabs.com/products/ar-m10",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    }
  ];
}
