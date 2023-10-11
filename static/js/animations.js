function initIntro() {

    let tl = gsap.timeline({delay: 0.5});
     
    tl.from('.hero h1', {
        y: -40,
        opacity: 0,
        duration: 2,
        ease: 'power4'
    })
    .from('.hero .p-big', {
        y: -20,
        opacity: 0,
        duration: 2,
        ease: 'power4'
    }, 0.1)
    .from('.hero img', {
        y: 200,
        opacity: 0,
        duration: 2,
        ease: 'power4'
    }, 0.1)
    .to('.hero span', {
        color: '#A2CA66',
        duration: 0.5,
    }, 1)

}

function initProblema() {

    gsap.from(".problema", {
      scrollTrigger: {
          trigger: ".problema",
          start: "50% center", 
          end: "bottom center", 
          toggleClass: {targets: ".problema", className: "scrolled"} // Add "scrolled"
    }
    });

    if (window.innerWidth < 768) {
      gsap.getTweensOf(".problema").forEach(tween => {
        // Update the start value for smaller screens
        tween.scrollTrigger.vars.start = "bottom center";
      });
    }

}

function initFunzionalita() {

  const title = document.querySelector('.funzionalità h2');

  gsap.from(title, {
    y: 50,
    opacity: 0,
    duration: 2,
    ease: 'power4',
    scrollTrigger: {
      trigger: title,
      start: 'top bottom',
      toggleActions: 'restart pause resume pause',
    },
  });

  const cards = document.querySelectorAll('.funzionalità .card');

  cards.forEach((card, index) => {
    gsap.from(card, {
      y: 50,
      opacity: 0,
      duration: 2,
      ease: 'power4',
      scrollTrigger: {
        trigger: card,
        start: 'top bottom',
        toggleActions: 'restart pause resume pause',
        delay: index * 0.5 + 4,
      },
    });
  });
}

function initEsempi() {

  gsap.utils.toArray(".slick-nav").forEach((a, i) => {
    a.clickElem = document.querySelector(a.hash);
    a.offset = a.clickElem.offsetTop;
    a.height = a.clickElem.offsetHeight;
    a.addEventListener("click", e => {
      e.preventDefault();
      gsap.to(window, {scrollTo: a.offset + a.height * (i + 1)})
    });
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".esempi",
      duration: 1.5,
      pin: true,
      scrub: true,
      start: "top top",
      end: "+=3000",
      toggleActions: "restart pause resume pause"
    }
  });


  // Slides Scroll Animation
  tl.from(
      ".esempi [data-slide='1'] ", {
        opacity: 0.5,
        duration: 1,
        stagger: 2
      },
      "+=1"
    )

    .to(
      ".esempi [data-slide='1'] ", {
        opacity: 0,
        duration: 1,
        stagger: 2,
        ease: "power4"
      },
      "+=10"
    )

    .from(
      ".esempi [data-slide='2'] ", {
        opacity: 0,
        duration: 1,
        stagger: 2
      },
      "+=1"
    )
    .to(
      ".esempi [data-slide='2']", {
        opacity: 0,
        duration: 1,
        stagger: 2,
        ease: "power4"
      },
      "+=10"
    )

    .from(
      ".esempi [data-slide='3']", {
        opacity: 0,
        duration: 1,
        stagger: 2
      },
      "+=1"
    )
    .to(
      ".esempi [data-slide='3']", {
        opacity: 0,
        duration: 1,
        stagger: 2,
        ease: "power4"
      },
      "+=10"
    )

    .from(
      ".esempi [data-slide='4']", {
        opacity: 0,
        duration: 1,
        stagger: 2
      },
      "+=1"
    )
    .to(
      ".esempi [data-slide='4'] ", {
        opacity: 0,
        duration: 1,
        stagger: 2,
        ease: "power4"
      },
      "+=10"
    )

}

function initArchitettura() {

  gsap.from('.architettura h2', {
    y: 150, 
    opacity: 0, 
    ease: "back", 
    duration: 1,
    scrollTrigger: {
      trigger: '.architettura',
      start: 'top center', 
      toggleActions: 'restart pause resume pause'
    }
  });

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".architettura",
      pin: true,
      scrub: true,
      start: "top top",
      toggleActions: "restart pause resume pause"
    }
  });

  const slideCount = 9; // Number of slides
  const staggerDuration = 1; // Stagger duration between slides

  for (let i = 1; i <= slideCount; i++) {
    tl.from(
      `.architettura [data-slide='${i}']`, {
        opacity: 0,
        duration: 0.5,
        stagger: {
          each: staggerDuration,
          from: "start"
        }
      },
      `+=${i === slideCount ? 0 : 1}`
    ).to(
      `.architettura [data-slide='${i}']`, {
        duration: 0.5,
        ease: "power4"
      },
      `+=${staggerDuration}`
    );
  }

}

function initCaseStudies() {

  gsap.from(['.case-studies h2:first-child', '.case-studies .mySwiper'], {
    x: 100,
    opacity: 0,
    duration: 2,
    ease: 'power4',
    scrollTrigger: {
      trigger: '.case-studies',
      start: 'top center', 
      toggleActions: 'restart pause resume pause'
    }
  });

}


window.onload = () => {
	initIntro();
  initProblema();
  initFunzionalita();
  initEsempi();
  initArchitettura();
  initCaseStudies();
};