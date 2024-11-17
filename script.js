const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

function runLoaderAnimation() {
  const tl = gsap.timeline();
  const tl2 = gsap.timeline();
  tl2.from(".scroller-body", {
    y: "30%",
    ease: "power2.inOut",
    opacity: 0,
  });
  tl2.to(".scroller-body", {
    scale: 0.35,
    ease: "power2.inOut",
  });

  tl.to(".scroller-body", {
    y: "-28%",
    delay: 0.4,
    duration: 1, // Slightly longer for a more noticeable scaling effect
    ease: "power2.inOut", // Smooth easing for the scaling down
    // scale: 0.35,
  });

  tl.to(".scroller-body", {
    y: "-30%",
    duration: 0.8, // Extend this for a smoother transition
    delay: 0.1, // Shorter delay to keep momentum
    ease: "power1.inOut", // Smooth but slightly quicker
  }); // Delays this by 0.5 seconds relative to the start of "anim"

  tl.to(".scroller-body", {
    y: 0,
    rotation: -360,
    duration: 1.4, // Longer rotation to make the -360° feel smoother
    scale: 1,
    ease: "power2.out", // Gradual easing out for the final part
  });
}

function navSticky() {
  gsap.to("nav", {
    height: "80px",
    duration: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "nav",
      scroller: ".main",
      // markers: true,
      start: "top top",
      end: "top -100%", // Adjust as needed
      scrub: 1,
    },
  });
}

function marqueeAnimation() {
  gsap.to(".scroller-text-container", {
    xPercent: -100,
    duration: 6,
    repeat: -1,
    ease: "linear",
  });
}

document.addEventListener("DOMContentLoaded", runLoaderAnimation);

navSticky();

marqueeAnimation();
