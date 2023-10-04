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
        y: 40,
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

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".funzionalità",
      start: "top center",
      toggleActions: "restart pause resume pause",
      markers: true,
    }
  });

  tl.from('.funzionalità h2', {
    x: -40,
    opacity: 0,
    duration: 2,
    ease: 'power4'
})

}

function initArchitettura() {

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".architettura",
          pin: true,
          scrub: true,
          start: "top top",
          toggleActions: "restart pause resume pause"
        }
      });
    
      // Slides Scroll Animation
      tl.from(
          "[data-slide='1'] ", {
            opacity: 0,
            duration: 0.5
          },
          "+=1"
        )
    
        .to(
          "[data-slide='1'] ", {
            duration: 0.5,
            ease: "power4"
          },
          "+=10"
        )
    
        .from(
          "[data-slide='2'] ", {
            opacity: 0,
            duration: 0.5,
          },
          "+=1"
        )
        
        .to(
          "[data-slide='2']", {
            duration: 0.5,
            ease: "power4"
          },
          "+=10"
        )
    
        .from(
            "[data-slide='3'] ", {
              opacity: 0,
              duration: 0.5,
            },
            "+=1"
        )

        .to(
            "[data-slide='3']", {
              duration: 0.5,
              ease: "power4"
            },
            "+=10"
        )

        .from(
            "[data-slide='4'] ", {
              opacity: 0,
              duration: 0.5,
            },
            "+=1"
        )

        .to(
            "[data-slide='4']", {
              duration: 0.5,
              ease: "power4"
            },
            "+=10"
        )

        .from(
            "[data-slide='5'] ", {
              opacity: 0,
              duration: 0.5,
            },
            "+=1"
        )

        .to(
            "[data-slide='5']", {
              duration: 0.5,
              ease: "power4"
            },
            "+=10"
        )

        .from(
            "[data-slide='6'] ", {
              opacity: 0,
              duration: 0.5,
            },
            "+=1"
        )

        .to(
            "[data-slide='6']", {
              duration: 0.5,
              ease: "power4"
            },
            "+=10"
        )

        .from(
            "[data-slide='7'] ", {
              opacity: 0,
              duration: 0.5,
            },
            "+=1"
        )

        .to(
            "[data-slide='7']", {
              duration: 0.5,
              ease: "power4"
            },
            "+=10"
        )

        .from(
            "[data-slide='8'] ", {
              opacity: 0,
              duration: 0.5,
            },
            "+=1"
        )

        .to(
            "[data-slide='8']", {
              duration: 0.5,
              ease: "power4"
            },
            "+=10"
        )

        .from(
            "[data-slide='9']", {
              opacity: 0,
              duration: 0.5,
              stagger: 1
            },
            "+=1"
        ) 
}



window.onload = () => {
	initIntro();
  initProblema();
  initFunzionalita();
  initArchitettura();
};