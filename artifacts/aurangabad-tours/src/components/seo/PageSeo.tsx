import { Helmet } from "react-helmet-async";

const SITE_URL = "https://sambhajinagar-explorer.replit.app";
const SITE_NAME = "Sambhajinagar Explorer";
const DEFAULT_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/7/78/The_Tomb_of_Dilras_Banu_Begum.jpg";

interface PageSeoProps {
  title: string;
  description: string;
  canonicalPath?: string;
  image?: string;
  imageAlt?: string;
  schema?: object | object[];
  noIndex?: boolean;
  type?: "website" | "article";
  keywords?: string;
}

export function PageSeo({
  title,
  description,
  canonicalPath = "/",
  image = DEFAULT_IMAGE,
  imageAlt = "Chhatrapati Sambhajinagar heritage tourism",
  schema,
  noIndex = false,
  type = "website",
  keywords,
}: PageSeoProps) {
  const fullTitle =
    title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
  const canonical = `${SITE_URL}${canonicalPath}`;
  const schemas = Array.isArray(schema) ? schema : schema ? [schema] : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
      )}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {/* Geo tags */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Chhatrapati Sambhajinagar, Maharashtra, India" />
      <meta name="geo.position" content="19.8762;75.3433" />
      <meta name="ICBM" content="19.8762, 75.3433" />

      {/* JSON-LD Structured Data */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
