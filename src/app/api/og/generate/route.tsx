import { ImageResponse } from "next/og";
import { person } from "@/resources/server";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Portfolio";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "6rem",
          background: "#151515",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "4rem",
          }}
        >
          <span
            style={{
              fontSize: "6rem",
              lineHeight: "8rem",
              letterSpacing: "-0.05em",
            }}
          >
            {title}
          </span>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "3rem",
            }}
          >
            <img
              src={person.avatar}
              style={{
                width: "10rem",
                height: "10rem",
                borderRadius: "100%",
                objectFit: "cover",
              }}
            />

            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "3.5rem" }}>{person.name}</span>
              <span style={{ fontSize: "2rem", opacity: 0.6 }}>
                {person.role}
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1280,
      height: 720,
    }
  );
}
