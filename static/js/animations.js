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
  const title = document.querySelector('.col-12 h2');

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

  const cards = document.querySelectorAll('.card');

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


function initArchitettura() {

        gsap.from('.architettura h2', {
          y:150, 
          opacity:0, 
          ease:"back", 
          duration:1,
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

function initCaseStudies() {

  gsap.from('.case-studies h2:first-child', {
    x: 40,
    opacity: 0,
    duration: 2,
    ease: 'power4',
    scrollTrigger: {
      trigger: '.case-studies',
      start: 'top center', // Adjust the start position as needed
      toggleActions: 'restart pause resume pause'
    }
  });

  

}


window.onload = () => {
	initIntro();
  initProblema();
  initFunzionalita();
  initArchitettura();
  initCaseStudies();
};