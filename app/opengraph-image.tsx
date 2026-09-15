import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name}. ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** The evergreen avatar mark, reused as the social card. */
const mark = `data:image/svg+xml;base64,${Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 120" width="128" height="120">
    <path d="M0 0H96V24H24V64H96V88H0Z" fill="#F4F2EC"/>
    <path d="M128 120H32V96H104V56H32V32H128Z" fill="#F4F2EC"/>
  </svg>`,
).toString("base64")}`;

/**
 * Sora, fetched at render time so the card is set in the brand display face.
 * If the fetch fails the card still renders in the default face rather than
 * failing the request.
 */
async function soraData(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Sora:wght@600&display=swap",
      { headers: { "User-Agent": "Mozilla/5.0" } },
    ).then((response) => response.text());

    const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    if (!url) return null;

    return await fetch(url).then((response) => response.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const sora = await soraData();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#2D3834",
          color: "#F4F2EC",
          fontFamily: "Sora",
          padding: 80,
        }}
      >
        <img src={mark} alt="" width={128} height={120} />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, letterSpacing: "-0.02em", lineHeight: 1.05, maxWidth: 900 }}>
            {site.brandLine}
          </div>
          <div
            style={{
              marginTop: 32,
              fontSize: 26,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#A7A299",
            }}
          >
            Sourcework
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: sora
        ? [{ name: "Sora", data: sora, weight: 600 as const, style: "normal" as const }]
        : undefined,
    },
  );
}
