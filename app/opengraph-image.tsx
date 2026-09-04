import { ImageResponse } from "next/og";
import { site } from "@/lib/config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Vitorello — Technical Lead";

// Catppuccin Macchiato
const bg = "#24273a";
const text = "#cad3f5";
const muted = "#a5adcb";
const green = "#a6da95";
const rainbow = ["#ed8796", "#f5a97f", "#eed49f", "#a6da95", "#8aadf4", "#c6a0f6"];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: bg,
          color: text,
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, color: green, letterSpacing: -1 }}>
          {site.name.toLowerCase()}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 88, fontWeight: 700, letterSpacing: -2, lineHeight: 1.1 }}>
            Technical Lead
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 32, color: muted }}>
            Backends · Infrastructure · AI systems · Testing
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex" }}>
            {rainbow.map((c) => (
              <div key={c} style={{ width: 44, height: 12, background: c }} />
            ))}
          </div>
          <div style={{ display: "flex", fontSize: 28, color: muted }}>vitorello.dev</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
