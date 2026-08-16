// Drives the hero's phone + notification bubble from scroll position
// instead of time, so the little "missed call -> auto-reply sent" story
// plays out as you scroll down (and reverses if you scroll back up).
//
// Pure CSS transform/opacity, no video — deliberately, since video can't
// have a transparent background and scroll-scrubbing a <video> turned out
// to be unreliable in production (mobile playback issues, desktop
// sizing). Transforms on an image have none of that: no loading/seeking/
// codec concerns, works identically everywhere.
//
// Ships safe by default: if the phone image is missing, or the visitor
// has prefers-reduced-motion set, this does nothing — the CSS resting
// state in style.css already shows everything fully visible and settled,
// so the hero still looks complete either way.
document.addEventListener("DOMContentLoaded", function () {
  var hero = document.getElementById("scroll-hero");
  var phone = document.getElementById("hero-phone");
  var notification = document.getElementById("hero-notification");

  if (!hero || !phone || !notification) {
    return;
  }

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    return;
  }

  var ticking = false;

  function clamp01(n) {
    return Math.max(0, Math.min(1, n));
  }

  function updateFrame() {
    ticking = false;

    var rect = hero.getBoundingClientRect();
    var scrollableDistance = hero.offsetHeight - window.innerHeight;
    if (scrollableDistance <= 0) {
      return;
    }

    var scrolledIntoHero = -rect.top;
    var fraction = clamp01(scrolledIntoHero / scrollableDistance);

    // Stage 1 (0 -> 0.4 of the hero's scroll range): the phone settles
    // into place — starts slightly small and tilted like it just started
    // ringing, scales/straightens up as you scroll.
    var phoneProgress = clamp01(fraction / 0.4);
    var scale = 0.85 + phoneProgress * 0.15;
    var rotation = -8 + phoneProgress * 8;
    var phoneOpacity = 0.5 + phoneProgress * 0.5;
    phone.style.transform = "scale(" + scale + ") rotate(" + rotation + "deg)";
    phone.style.opacity = String(phoneOpacity);

    // Stage 2 (0.4 -> 0.75): once the phone's settled, the auto-reply
    // notification fades in and slides down into its resting position
    // over the top of the phone, like a real notification banner
    // dropping in. Sets the --notif-y custom property only, never
    // `transform` directly — the CSS rule for .scroll-hero-notification
    // composes it with its own horizontal-centering transform, and
    // setting `transform` here would silently override that centering
    // with an inline style, since inline styles always win over
    // stylesheet rules.
    var notifProgress = clamp01((fraction - 0.4) / 0.35);
    notification.style.opacity = String(notifProgress);
    notification.style.setProperty("--notif-y", (-14 + notifProgress * 14) + "px");
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(updateFrame);
      ticking = true;
    }
  }

  // Set the starting state immediately (fraction 0) rather than waiting
  // for the first scroll event, so it doesn't flash the CSS resting state
  // before JS takes over.
  updateFrame();

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
});
