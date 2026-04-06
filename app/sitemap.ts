import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://rdtrash.org'

const cities = [
  'miami',
  'miami-beach',
  'hialeah',
  'doral',
  'kendall',
  'homestead',
  'aventura',
  'north-miami',
  'fort-lauderdale',
  'hollywood',
  'pembroke-pines',
  'miramar',
  'coral-springs',
  'pompano-beach',
  'boca-raton',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${siteUrl}/junk-removal-${city}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteUrl}/estimate`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...cityPages,
  ]
}
