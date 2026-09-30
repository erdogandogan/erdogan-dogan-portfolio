import { ImageResponse } from "next/og";
import { site, hero } from "@/lib/content";

export const alt = `${site.name} - ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#09090b",
          color: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#8b5cf6" }}>{hero.name}</div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 64, fontWeight: 700 }}>
          {hero.headline}
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 26, color: "#a1a1aa", maxWidth: 820 }}>
          {hero.summary}
        </div>
      </div>
    ),
    { ...size }
  );
}
