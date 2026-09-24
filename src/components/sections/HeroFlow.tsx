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
    let targetY = 0;
    let startTimes: number[] = [];
    let msPerPx = LOOP_MS / stage.getBoundingClientRect().height;
    let appliedDeltaMs = 0;
    let lastTick = 0;
    let rafId = 0;

    // The automatic rotation advances at 1ms of timeline per 1ms of real
    // time. Manual drag gets a faster ceiling than that (snappier, still
    // responsive to quick mouse moves) but is never fully unbounded — a
    // sudden flick still can't jump the whole carousel instantly.
    const MAX_RATE = 4;

    const wrap = (t: number) => ((t % LOOP_MS) + LOOP_MS) % LOOP_MS;

    // Runs every frame for the whole drag, independent of pointermove
    // events. A rAF loop (rather than clamping between pointermove events)
    // is what keeps the per-tick time budget small and steady even if the
    // mouse pauses mid-drag and then continues — otherwise the idle gap
    // reads as "elapsed time" and its very next step is free to jump
    // however far the mouse has drifted, shuffling the whole stack.
    const tick = () => {
      const now = performance.now();
      const maxStep = Math.min(now - lastTick, 50) * MAX_RATE;
      lastTick = now;

      const targetDeltaMs = (targetY - startY) * msPerPx;
      const step = targetDeltaMs - appliedDeltaMs;
      const clampedStep = Math.max(-maxStep, Math.min(maxStep, step));
      appliedDeltaMs += clampedStep;

      cards.forEach((card, i) => {
        const anim = card.getAnimations()[0];
        if (anim) anim.currentTime = wrap(startTimes[i] + appliedDeltaMs);
      });

      if (dragging) rafId = requestAnimationFrame(tick);
    };

    const onPointerDown = (e: PointerEvent) => {
      dragging = true;
      startY = e.clientY;
      targetY = e.clientY;
      appliedDeltaMs = 0;
      lastTick = performance.now();
      // Dragging the stage's own height covers exactly one full loop, so a
      // slow, deliberate drag moves through the carousel at the same rate
      // the automatic rotation does — just under manual control.
      msPerPx = LOOP_MS / stage.getBoundingClientRect().height;
      startTimes = cards.map((card) => {
        const anim = card.getAnimations()[0];
        anim?.pause();
        return Number(anim?.currentTime ?? 0);
      });
      stage.setPointerCapture(e.pointerId);
      stage.classList.add("is-dragging");
      rafId = requestAnimationFrame(tick);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      targetY = e.clientY;
    };

    const endDrag = (e: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      cancelAnimationFrame(rafId);
      stage.classList.remove("is-dragging");
      if (stage.hasPointerCapture(e.pointerId)) stage.releasePointerCapture(e.pointerId);
      cards.forEach((card) => card.getAnimations()[0]?.play());
    };

    stage.addEventListener("pointerdown", onPointerDown);
    stage.addEventListener("pointermove", onPointerMove);
    stage.addEventListener("pointerup", endDrag);
    stage.addEventListener("pointercancel", endDrag);

    return () => {
      cancelAnimationFrame(rafId);
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
