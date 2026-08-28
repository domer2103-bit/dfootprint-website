document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // "Systems" nav dropdown(s) — click/keyboard-toggle rather than hover, so
  // mobile and desktop use identical behavior. Only one exists today
  // (Systems), but this stays correct if more get added later.
  var dropdownToggles = document.querySelectorAll(".nav-dropdown-toggle");

  function closeAllDropdowns() {
    dropdownToggles.forEach(function (btn) {
      btn.closest(".nav-dropdown").classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    });
  }

  dropdownToggles.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      event.stopPropagation();
      var dropdown = btn.closest(".nav-dropdown");
      var wasOpen = dropdown.classList.contains("is-open");
      closeAllDropdowns();
      if (!wasOpen) {
        dropdown.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  document.addEventListener("click", closeAllDropdowns);
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeAllDropdowns();
    }
  });

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var sections = document.querySelectorAll("main .band");

  // Safety fallback: if a section is never revealed by the code below (slow
  // load, blocked script, observer edge case, backgrounded tab, etc.), force
  // it visible after a short delay so content is never left permanently
  // hidden. This is a plain function, not part of the try/catch below, so it
  // always exists no matter what happens to the observer.
  function revealAll() {
    sections.forEach(function (section) {
      section.classList.add("reveal");
      section.classList.add("is-visible");
    });
  }

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealAll();
    return;
  }

  try {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach(function (section) {
      section.classList.add("reveal");
      observer.observe(section);
    });

    // Fail-safe: if the observer never fires for any reason, force-reveal
    // everything after 1.5s so the page is never left blank.
    window.setTimeout(revealAll, 1500);
  } catch (err) {
    revealAll();
  }
});
