import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/**
 * Apple touch icon: the Bone mark on an Evergreen field. Generated rather than
 * checked in because Apple only accepts raster formats here, while the rest of
 * the icon set is served as SVG.
 */
const mark = `data:image/svg+xml;base64,${Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 120" width="128" height="120">
    <path d="M0 0H96V24H24V64H96V88H0Z" fill="#F4F2EC"/>
    <path d="M128 120H32V96H104V56H32V32H128Z" fill="#F4F2EC"/>
  </svg>`,
).toString("base64")}`;

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#2D3834",
        }}
      >
        <img src={mark} alt="" width={102} height={96} />
      </div>
    ),
    size,
  );
}
