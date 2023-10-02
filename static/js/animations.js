function initIntro() {

    let tl = gsap.timeline({delay: 0.5});
     
    tl.from('h1', {
        y: -40,
        opacity: 0,
        duration: 2,
        ease: 'power4'
    })
    .from('.p-big', {
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
    .to('span', {
        color: '#A2CA66',
        duration: 0.5,
    }, 1)

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
            "[data-slide='8']", {
              opacity: 0,
              duration: 0.5,
              stagger: 1
            },
            "+=1"
        ) 
}



window.onload = () => {
	initIntro();
    initArchitettura()
};