import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = {
  width: 96,
  height: 96,
};

export const contentType = "image/png";

/**
 * A favicon needs a square, high-contrast mark. The supplied brand logo is a
 * horizontal lockup, so this route renders its distinctive G mark rather than
 * shrinking the whole wordmark until it becomes illegible at browser-tab size.
 */
export default async function Icon() {
  const image = await readFile(join(process.cwd(), "public", "gynetra-brand-logo.png"));
  const brandLogo = `data:image/png;base64,${image.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#ffffff",
          display: "flex",
          height: "100%",
          overflow: "hidden",
          position: "relative",
          width: "100%",
        }}
      >
        <img
          alt=""
          src={brandLogo}
          style={{
            height: "180px",
            left: "-2px",
            position: "absolute",
            top: "-43px",
            width: "360px",
          }}
        />
        <div
          style={{
            background: "#ffffff",
            height: "100%",
            left: "71px",
            position: "absolute",
            top: 0,
            width: "25px",
          }}
        />
      </div>
    ),
    size,
  );
}
