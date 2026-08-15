// Drives a <video> element's playback position from scroll position instead
// of time, so the hero plays like a story that unfolds as you scroll down
// (and reverses if you scroll back up) rather than an autoplaying clip.
//
// Ships safe by default: if there's no video source, if it fails to load,
// or if the visitor has prefers-reduced-motion set, this does nothing and
// the CSS gradient fallback in .scroll-hero-sticky shows instead — the
// section still reads fine as a plain hero with a headline over it.
document.addEventListener("DOMContentLoaded", function () {
  var hero = document.getElementById("scroll-hero");
  var video = document.getElementById("hero-scrub-video");

  if (!hero || !video) {
    return;
  }

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    return;
  }

  // No <source> given yet (asset not generated/dropped in), or the browser
  // couldn't load it — leave the gradient fallback showing.
  var hasSource = video.querySelector("source[src]");
  if (!hasSource) {
    return;
  }

  var ready = false;
  var ticking = false;

  video.addEventListener("loadedmetadata", function () {
    if (video.duration && isFinite(video.duration)) {
      ready = true;
      video.classList.add("is-ready");
    }
  });

  video.addEventListener("error", function () {
    ready = false;
    video.classList.remove("is-ready");
  });

  function updateFrame() {
    ticking = false;
    if (!ready) {
      return;
    }

    var rect = hero.getBoundingClientRect();
    var scrollableDistance = hero.offsetHeight - window.innerHeight;
    if (scrollableDistance <= 0) {
      return;
    }

    var scrolledIntoHero = -rect.top;
    var fraction = scrolledIntoHero / scrollableDistance;
    fraction = Math.max(0, Math.min(1, fraction));

    video.currentTime = fraction * video.duration;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(updateFrame);
      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
});
