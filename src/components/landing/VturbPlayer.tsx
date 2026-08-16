import { useEffect } from "react";

const PLAYER_ID = "vid-6a821c358eb1f48097ecca80";
const SCRIPT_SRC =
  "https://scripts.converteai.net/956faba1-2cbe-4718-a215-9c167fcc9315/players/6a821c358eb1f48097ecca80/v4/player.js";

/** Player de vendas VTurb (vertical). O script é injetado após a hidratação. */
export function VturbPlayer() {
  useEffect(() => {
    if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) return;
    const s = document.createElement("script");
    s.src = SCRIPT_SRC;
    s.async = true;
    document.head.appendChild(s);
  }, []);

  return (
    <div
      className="mx-auto w-full max-w-[320px] overflow-hidden rounded-2xl border border-navy-foreground/15 shadow-[var(--shadow-elevate)]"
      dangerouslySetInnerHTML={{
        __html: `<vturb-smartplayer id="${PLAYER_ID}" style="display:block;margin:0 auto;width:100%;max-width:320px"><div class="vturb-player-placeholder" style="position:relative;width:100%;padding:177.77777777777777% 0 0;z-index:0;background-color:black"></div></vturb-smartplayer>`,
      }}
    />
  );
}
