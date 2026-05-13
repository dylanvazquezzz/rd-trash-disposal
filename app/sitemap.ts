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

const commercialCities = [
  'miami',
  'doral',
  'fort-lauderdale',
  'hialeah',
  'miami-beach',
  'boca-raton',
  'pompano-beach',
  'miramar',
  'coral-springs',
  'hollywood',
  'kendall',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${siteUrl}/junk-removal-${city}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const demolitionPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${siteUrl}/demolition/${city}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const commercialCityPages: MetadataRoute.Sitemap = commercialCities.map((city) => ({
    url: `${siteUrl}/commercial/junk-removal/${city}`,
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
      priority: 0.9,
    },
    {
      url: `${siteUrl}/commercial/junk-removal`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/commercial/estimate`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...cityPages,
    ...demolitionPages,
    ...commercialCityPages,
    {
      url: `${siteUrl}/appliance-removal`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/mattress-removal`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/garage-cleanout`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/estate-cleanout`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/yard-debris-removal`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
