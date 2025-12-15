export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ui.eindev.ir"

// Breadcrumb JSON-LD generator
export function generateBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  }
}

// Software Application JSON-LD for component library
export function generateSoftwareAppJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Ein UI",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "127",
    },
  }
}

// Article/Documentation JSON-LD
export function generateArticleJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
}: {
  title: string
  description: string
  url: string
  datePublished?: string
  dateModified?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: title,
    description,
    url: `${SITE_URL}${url}`,
    datePublished: datePublished || new Date().toISOString(),
    dateModified: dateModified || new Date().toISOString(),
    author: {
      "@type": "Person",
      name: "Ehsan",
      url: "https://eindev.ir",
    },
    publisher: {
      "@type": "Organization",
      name: "Ein UI",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${url}`,
    },
  }
}

// FAQ JSON-LD generator
export function generateFaqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

// HowTo JSON-LD for installation guides
export function generateHowToJsonLd({
  name,
  description,
  steps,
}: {
  name: string
  description: string
  steps: { name: string; text: string }[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  }
}

// Strip UTM parameters from URLs
export function stripUtmParams(url: string): string {
  try {
    const urlObj = new URL(url)
    const params = new URLSearchParams(urlObj.search)
    const utmParams = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]
    utmParams.forEach((param) => params.delete(param))
    urlObj.search = params.toString()
    return urlObj.toString()
  } catch {
    return url
  }
}

// Generate canonical URL
export function getCanonicalUrl(path: string): string {
  const cleanPath = path.split("?")[0] // Remove query params
  return `${SITE_URL}${cleanPath}`
}
