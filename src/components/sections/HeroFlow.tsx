import { useEffect, useRef } from "react";

import sentinelopsAdminDashboard from "../../assets/case-studies/sentinelops/dashboard.png";
import sentinelopsAdminLiveTracking from "../../assets/case-studies/sentinelops/live-tracking.png";
import sentinelopsAdminPersonnel from "../../assets/case-studies/sentinelops/personnel.png";
import sentinelopsAdminCheckpoints from "../../assets/case-studies/sentinelops/checkpoints.png";
import sentinelopsAdminPatrols from "../../assets/case-studies/sentinelops/patrols.png";
import sentinelopsAdminReports from "../../assets/case-studies/sentinelops/reports.png";
import sentinelopsGuardHome from "../../assets/case-studies/sentinelopsguard/home.png";

import "./HeroFlow.css";

const IMAGES = [
  { src: sentinelopsAdminDashboard, alt: "SentinelOps yönetim paneli — dashboard" },
  { src: sentinelopsAdminLiveTracking, alt: "SentinelOps canlı takip ekranı" },
  { src: sentinelopsAdminPersonnel, alt: "SentinelOps personel ekranı" },
  { src: sentinelopsAdminCheckpoints, alt: "SentinelOps kontrol noktaları ekranı" },
  { src: sentinelopsAdminPatrols, alt: "SentinelOps devriye rotaları ekranı" },
  { src: sentinelopsAdminReports, alt: "SentinelOps raporlar ekranı" },
  { src: sentinelopsGuardHome, alt: "SentinelOpsGuard mobil ana ekran" },
];

const LOOP_MS = 18000;
const MS_PER_PX = 60;

/**
 * A 3D depth carousel of our own shipped screenshots, styled after
 * tasteskill.dev's hero visual: cards travel a fixed path from far/top
 * (small) through a near/center peak (large — the "hero" moment) to
 * far/bottom (small again), each offset by an equal phase via
 * animation-delay so one CSS keyframe drives every card.
 *
 * Mouse-draggable, matching tasteskill's own carousel: dragging pauses
 * the shared timeline and scrubs every card's Animation.currentTime by
 * the same delta (so their relative phase offsets are preserved), and
 * releasing resumes normal auto-play from wherever it was left.
 */
export function HeroFlow() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cards = Array.from(stage.querySelectorAll<HTMLElement>(".hero-flow__card"));
    let dragging = false;
    let startY = 0;
    let startTimes: number[] = [];

    const wrap = (t: number) => ((t % LOOP_MS) + LOOP_MS) % LOOP_MS;

    const onPointerDown = (e: PointerEvent) => {
      dragging = true;
      startY = e.clientY;
      startTimes = cards.map((card) => {
        const anim = card.getAnimations()[0];
        anim?.pause();
        return Number(anim?.currentTime ?? 0);
      });
      stage.setPointerCapture(e.pointerId);
      stage.classList.add("is-dragging");
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      const deltaMs = -(e.clientY - startY) * MS_PER_PX;
      cards.forEach((card, i) => {
        const anim = card.getAnimations()[0];
        if (anim) anim.currentTime = wrap(startTimes[i] + deltaMs);
      });
    };

    const endDrag = (e: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      stage.classList.remove("is-dragging");
      if (stage.hasPointerCapture(e.pointerId)) stage.releasePointerCapture(e.pointerId);
      cards.forEach((card) => card.getAnimations()[0]?.play());
    };

    stage.addEventListener("pointerdown", onPointerDown);
    stage.addEventListener("pointermove", onPointerMove);
    stage.addEventListener("pointerup", endDrag);
    stage.addEventListener("pointercancel", endDrag);

    return () => {
      stage.removeEventListener("pointerdown", onPointerDown);
      stage.removeEventListener("pointermove", onPointerMove);
      stage.removeEventListener("pointerup", endDrag);
      stage.removeEventListener("pointercancel", endDrag);
    };
  }, []);

  return (
    <div className="hero-flow" aria-hidden="true">
      <div className="hero-flow__stage" ref={stageRef}>
        <div className="hero-flow__tilt">
          {IMAGES.map((image, i) => (
            <figure key={image.alt} className="hero-flow__card" style={{ "--i": i } as React.CSSProperties}>
              <img src={image.src} alt={image.alt} loading={i === 0 ? "eager" : "lazy"} draggable={false} />
            </figure>
          ))}
        </div>
      </div>

      <div className="hero-flow__mobile-track">
        <div className="hero-flow__mobile-row">
          {[...IMAGES, ...IMAGES].map((image, i) => (
            <img key={`${image.alt}-${i}`} src={image.src} alt="" className="hero-flow__mobile-item" loading="lazy" />
          ))}
        </div>
      </div>
    </div>
  );
}
