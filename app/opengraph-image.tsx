import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/config";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Vitorello — Technical Lead";

// Catppuccin Macchiato
const bg = "#24273a";
const text = "#cad3f5";
const muted = "#a5adcb";
const green = "#a6da95";
const rainbow = ["#ed8796", "#f5a97f", "#eed49f", "#a6da95", "#8aadf4", "#c6a0f6"];

async function loadAvatar(): Promise<string | null> {
  try {
    const buf = await readFile(join(process.cwd(), "public/avatar.jpeg"));
    return `data:image/jpeg;base64,${buf.toString("base64")}`;
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const avatar = await loadAvatar();

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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", fontSize: 34, color: green, letterSpacing: -1 }}>
            {site.name.toLowerCase()}
          </div>
          {avatar ? (
            <img
              src={avatar}
              width={132}
              height={132}
              style={{
                borderRadius: 9999,
                objectFit: "cover",
                border: `4px solid ${green}`,
              }}
            />
          ) : null}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 88, fontWeight: 700, letterSpacing: -2, lineHeight: 1.1 }}>
            Technical Lead
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 27, color: muted }}>
            Back-ends · Infrastructure · Agentic Applications · Quality Engineering
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
