//ScrollReveal animation

const sr = ScrollReveal({
  // reset: true
});

sr.reveal(".navbar", {
  duration: 2000,
  origin: "bottom"
});
sr.reveal(".showcase-left", {
  duration: 2000,
  origin: "top",
  distance: "300px"
});
sr.reveal(".showcase-right", {
  duration: 2000,
  origin: "right",
  distance: "300px"
});
sr.reveal(".btn", {
  duration: 2000,
  delay: 1000,
  origin: "bottom"
});
sr.reveal("#testimonial div", {
  duration: 1000,
  delay: 1000,
  origin: "bottom"
});
sr.reveal(".info-left", {
  duration: 2000,
  origin: "left",
  distance: "300px",
  viewFactor: 0.2
});
sr.reveal(".info-right", {
  duration: 2000,
  origin: "right",
  distance: "300px",
  viewFactor: 0.2
});

$(function() {
  // Smooth Scrolling
  $('a[href*="#"]:not([href="#"])').click(function() {
    //récupère toutes les ancres (a) contenant #, mais excluse ceux qui ne contiennent que #
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000
        );
        return false;
      }
    }
  });
});
