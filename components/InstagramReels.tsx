"use client";

import { useEffect } from "react";

type Reel = {
  title?: string;
  url?: string;
};

type InstagramReelsProps = {
  reels?: Reel[];
  title?: string;
  subtitle?: string;
};

function getEmbedUrl(url?: string) {
  if (!url) return null;

  try {
    const cleanUrl = url.split("?")[0];

    if (!cleanUrl.includes("instagram.com")) {
      return null;
    }

    return `${cleanUrl.replace(/\/$/, "")}/embed`;
  } catch {
    return null;
  }
}

export default function InstagramReels({
  reels = [],
  title = "Latest From Instagram",
  subtitle = "Follow our latest stays, experiences and moments.",
}: InstagramReelsProps) {
  useEffect(() => {
    const scriptId = "instagram-embed-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");

      script.id = scriptId;
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;

      document.body.appendChild(script);
    }

    const instagram = window as typeof window & {
      instgrm?: {
        Embeds?: {
          process: () => void;
        };
      };
    };

    setTimeout(() => {
      instagram.instgrm?.Embeds?.process();
    }, 500);
  }, [reels]);

  const validReels = reels
    .map((reel) => ({
      ...reel,
      embedUrl: getEmbedUrl(reel.url),
    }))
    .filter((reel) => reel.embedUrl);

  if (validReels.length === 0) {
    return null;
  }

  return (
    <section className="px-6 py-24 bg-[#0b0b0b] border-t border-white/10">
      <div className="max-w-7xl mx-auto">

        <div className="text-center max-w-2xl mx-auto">

          <p className="text-xs uppercase tracking-[0.35em] text-gold">
            Instagram
          </p>

          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-white">
            {title}
          </h2>

          <p className="mt-5 text-sm md:text-base text-sandstone/60">
            {subtitle}
          </p>

        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {validReels.slice(0, 3).map((reel, index) => (
            <div
              key={`${reel.url}-${index}`}
              className="overflow-hidden rounded-3xl border border-gold/20 bg-white/[0.03]"
            >

              <div className="bg-black min-h-[500px] flex items-center justify-center">

                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={reel.url}
                  data-instgrm-version="14"
                  style={{
                    background: "#000",
                    border: 0,
                    margin: 0,
                    maxWidth: "540px",
                    minWidth: "280px",
                    padding: 0,
                    width: "100%",
                  }}
                >
                  <a
                    href={reel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View this reel on Instagram
                  </a>
                </blockquote>

              </div>

              {reel.title && (
                <div className="p-5">
                  <p className="text-sm text-sandstone">
                    {reel.title}
                  </p>
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}