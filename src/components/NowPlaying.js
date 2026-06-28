import React, { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const LASTFM_USER    = process.env.REACT_APP_LASTFM_USER    || "riishiiiii";
const LASTFM_API_KEY = process.env.REACT_APP_LASTFM_API_KEY || "c6dafc68f4afc35391b06bc1d1d4b949";
const BASE = `https://ws.audioscrobbler.com/2.0/?api_key=${LASTFM_API_KEY}&user=${LASTFM_USER}&format=json`;

const getImg = (images, size = 1) => {
  const src = images?.[size]?.["#text"];
  return src && !src.includes("2a96cbd8b46e442fc41c2b86b821562f") ? src : null;
};

const Avatar = ({ src, name, size = 36, round = false }) => (
  src
    ? <img src={src} alt={name} style={{ width: size, height: size, borderRadius: round ? "50%" : 6, objectFit: "cover", flexShrink: 0, background: "var(--bg-hover)" }} />
    : <div style={{ width: size, height: size, borderRadius: round ? "50%" : 6, background: "var(--bg-hover)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: size * 0.38, fontWeight: 700, color: "var(--text-muted)" }}>
        {name?.[0]?.toUpperCase()}
      </div>
);

const NowPlaying = () => {
  const [track,      setTrack]      = useState(null);
  const [playing,    setPlaying]    = useState(false);
  const [open,       setOpen]       = useState(false);
  const [topTracks,  setTopTracks]  = useState([]);
  const [topArtists, setTopArtists] = useState([]);
  const [modalLoad,  setModalLoad]  = useState(false);

  /* Poll recent track every 30 s */
  useEffect(() => {
    let mounted = true;
    const fetchRecent = () =>
      fetch(`${BASE}&method=user.getrecenttracks&limit=1`)
        .then(r => r.json())
        .then(data => {
          if (!mounted) return;
          const tracks = data?.recenttracks?.track;
          const t = Array.isArray(tracks) ? tracks[0] : tracks;
          if (!t) return;
          setPlaying(t["@attr"]?.nowplaying === "true");
          setTrack({ name: t.name, artist: t.artist?.["#text"] || t.artist, img: getImg(t.image, 2) });
        })
        .catch(() => {});
    fetchRecent();
    const id = setInterval(fetchRecent, 30000);
    return () => { mounted = false; clearInterval(id); };
  }, []);

  /* iTunes artwork lookup — free, no key, CORS allowed */
  const iTunesArt = (query) =>
    fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=music&entity=song&limit=1`)
      .then(r => r.json())
      .then(d => {
        const url = d.results?.[0]?.artworkUrl100;
        return url ? url.replace("100x100bb", "300x300bb") : null;
      })
      .catch(() => null);

  /* Fetch weekly top data when modal opens */
  const fetchTopData = useCallback(() => {
    setModalLoad(true);
    Promise.all([
      fetch(`${BASE}&method=user.gettoptracks&period=7day&limit=6`).then(r => r.json()),
      fetch(`${BASE}&method=user.gettopartists&period=7day&limit=6`).then(r => r.json()),
    ]).then(async ([td, ad]) => {
      const tracks  = td?.toptracks?.track  || [];
      const artists = ad?.topartists?.artist || [];

      /* Fetch artwork in parallel */
      const [trackArts, artistArts] = await Promise.all([
        Promise.all(tracks.map(t  => iTunesArt(`${t.name} ${t.artist?.name}`))),
        Promise.all(artists.map(a => iTunesArt(`${a.name}`))),
      ]);

      setTopTracks(tracks.map((t, i)  => ({ ...t, art: trackArts[i]  })));
      setTopArtists(artists.map((a, i) => ({ ...a, art: artistArts[i] })));
      setModalLoad(false);
    }).catch(() => setModalLoad(false));
  }, []);

  const openModal = () => { setOpen(true); fetchTopData(); };

  /* Close on Escape + lock body scroll when open */
  useEffect(() => {
    const handler = e => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!track) return null;

  return (
    <>
      {/* Listening card trigger */}
      <motion.button
        onClick={openModal}
        whileHover={{ borderColor: "var(--border-strong)", background: "var(--bg-hover)" }}
        style={{
          display: "flex", alignItems: "center", gap: 16,
          width: "100%", maxWidth: 480,
          padding: "16px 20px",
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: 14,
          cursor: "pointer",
          textAlign: "left",
          transition: "border-color 160ms ease, background 160ms ease",
        }}
      >
        {/* Album art or dot */}
        {track.img
          ? <img src={track.img} alt="" style={{ width: 44, height: 44, borderRadius: 8, objectFit: "cover", flexShrink: 0 }} />
          : <div style={{ width: 44, height: 44, borderRadius: 8, background: "var(--bg-hover)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: playing ? "#1DB954" : "var(--border-strong)", animation: playing ? "np-pulse 2s ease infinite" : "none" }} />
            </div>
        }

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: playing ? "#1DB954" : "var(--border-strong)", flexShrink: 0, animation: playing ? "np-pulse 2s ease infinite" : "none" }} />
            <span style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)" }}>
              {playing ? "Now playing" : "Last played"}
            </span>
          </div>
          <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {track.name}
            <span style={{ fontWeight: 400, color: "var(--text-muted)" }}> · {track.artist}</span>
          </div>
        </div>

        <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", flexShrink: 0, opacity: 0.6 }}>See all ↗</span>
      </motion.button>

      {/* Bottom-sheet modal — portalled to body to escape parent transforms */}
      {createPortal(
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setOpen(false)}
            style={{
              position: "fixed", inset: 0, zIndex: 10000,
              background: "rgba(0,0,0,0.65)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              display: "flex", alignItems: "flex-end", justifyContent: "center",
            }}
          >
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
              onClick={e => e.stopPropagation()}
              style={{
                width: "100%", maxWidth: 640,
                height: "88vh",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "20px 20px 0 0",
                overflow: "hidden",
                display: "flex", flexDirection: "column",
              }}
            >
              {/* Drag handle */}
              <div style={{ display: "flex", justifyContent: "center", padding: "12px 0 0" }}>
                <div style={{ width: 36, height: 4, borderRadius: 2, background: "var(--border-strong)" }} />
              </div>

              {/* Header */}
              <div style={{
                padding: "16px 28px 18px",
                borderBottom: "1px solid var(--border)",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                flexShrink: 0,
              }}>
                <div>
                  <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", margin: "0 0 3px" }}>
                    Last.fm · {LASTFM_USER}
                  </p>
                  <h3 style={{
                    fontFamily: "'Space Grotesk Variable', system-ui, sans-serif",
                    fontSize: "1.15rem", fontWeight: 700, letterSpacing: "-0.02em",
                    color: "var(--text)", margin: 0,
                  }}>
                    What I've been listening to
                  </h3>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  style={{
                    width: 34, height: 34, borderRadius: "50%",
                    border: "1px solid var(--border-strong)",
                    background: "transparent", color: "var(--text-muted)",
                    cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.85rem", flexShrink: 0,
                    transition: "color 120ms ease, border-color 120ms ease",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.borderColor = "var(--text-muted)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.borderColor = "var(--border-strong)"; }}
                >
                  ✕
                </button>
              </div>

              {/* Scrollable body — data-lenis-prevent stops Lenis from hijacking wheel events */}
              <div data-lenis-prevent style={{ overflowY: "auto", flex: 1, minHeight: 0, padding: "22px 28px 36px", overscrollBehavior: "contain", WebkitOverflowScrolling: "touch" }}>

                {/* Current track banner */}
                <div style={{
                  display: "flex", alignItems: "center", gap: 14,
                  padding: "14px 16px",
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  borderRadius: 12, marginBottom: 28,
                }}>
                  <span style={{
                    width: 9, height: 9, borderRadius: "50%", flexShrink: 0,
                    background: playing ? "#1DB954" : "var(--border-strong)",
                    animation: playing ? "np-pulse 2s ease infinite" : "none",
                  }} />
                  {track.img && (
                    <img src={track.img} alt="" style={{ width: 42, height: 42, borderRadius: 6, objectFit: "cover", flexShrink: 0 }} />
                  )}
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 3 }}>
                      {playing ? "Now playing" : "Last played"}
                    </div>
                    <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {track.name}
                      <span style={{ fontWeight: 400, color: "var(--text-muted)" }}>&nbsp;·&nbsp;{track.artist}</span>
                    </div>
                  </div>
                </div>

                {modalLoad ? (
                  /* Skeleton */
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {[1,2,3,4,5,6].map(i => (
                      <div key={i} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                        <div style={{ width: 20, height: 12, borderRadius: 4, background: "var(--border)" }} />
                        <div style={{ width: 36, height: 36, borderRadius: 6, background: "var(--border)", flexShrink: 0 }} />
                        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
                          <div style={{ height: 12, borderRadius: 4, background: "var(--border)", width: "60%" }} />
                          <div style={{ height: 10, borderRadius: 4, background: "var(--border)", width: "40%" }} />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    {/* Top Tracks */}
                    <section style={{ marginBottom: 32 }}>
                      <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", margin: "0 0 14px" }}>
                        Top Tracks · This Week
                      </p>
                      {topTracks.map((t, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                          style={{
                            display: "flex", alignItems: "center", gap: 14,
                            padding: "11px 0",
                            borderBottom: i < topTracks.length - 1 ? "1px solid var(--border)" : "none",
                          }}
                        >
                          <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "var(--text-faint)", width: 18, textAlign: "right", flexShrink: 0 }}>
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <Avatar src={t.art} name={t.name} size={36} />
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                              {t.name}
                            </div>
                            <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                              {t.artist?.name}
                            </div>
                          </div>
                          <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: 500, flexShrink: 0 }}>
                            {t.playcount} plays
                          </span>
                        </motion.div>
                      ))}
                    </section>

                    {/* Top Artists */}
                    <section>
                      <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", margin: "0 0 14px" }}>
                        Top Artists · This Week
                      </p>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                        {topArtists.map((a, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                            style={{
                              display: "flex", alignItems: "center", gap: 12,
                              padding: "12px 14px",
                              background: "var(--bg)",
                              border: "1px solid var(--border)",
                              borderRadius: 10,
                            }}
                          >
                            <Avatar src={a.art} name={a.name} size={34} round />
                            <div style={{ minWidth: 0 }}>
                              <div style={{ fontSize: "0.84rem", fontWeight: 600, color: "var(--text)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                {a.name}
                              </div>
                              <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>
                                {a.playcount} plays
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </section>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      , document.body)}

      <style>{`
        @keyframes np-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(29,185,84,0.45); }
          70%  { box-shadow: 0 0 0 7px rgba(29,185,84,0); }
          100% { box-shadow: 0 0 0 0 rgba(29,185,84,0); }
        }
      `}</style>
    </>
  );
};

export default NowPlaying;
