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
    <div className="mx-auto w-full max-w-[400px]">
      {/* Caixa 9:16 fixa (vídeo vertical): o player é forçado a preencher a caixa (o script do VTurb
          injeta um padding próprio que estouraria a altura). */}
      <div
        className={[
          "relative aspect-[9/16] overflow-hidden rounded-2xl border border-navy-foreground/15 bg-navy-deep shadow-[var(--shadow-elevate)]",
          "[&_vturb-smartplayer]:absolute [&_vturb-smartplayer]:inset-0 [&_vturb-smartplayer]:!max-w-none [&_vturb-smartplayer]:!h-full [&_vturb-smartplayer]:!w-full",
          "[&_div]:!static [&_div]:!h-full [&_div]:!w-full [&_div]:!p-0",
          "[&_img]:!absolute [&_img]:!inset-0 [&_img]:!h-full [&_img]:!w-full [&_img]:!object-cover",
          "[&_video]:!absolute [&_video]:!inset-0 [&_video]:!h-full [&_video]:!w-full [&_video]:!object-cover",
        ].join(" ")}
        dangerouslySetInnerHTML={{
          __html: `<vturb-smartplayer id="${PLAYER_ID}"><div class="vturb-player-placeholder" style="background-color:black"></div></vturb-smartplayer>`,
        }}
      />
    </div>
  );
}

