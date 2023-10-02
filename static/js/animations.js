function initIntro() {

    let tl = gsap.timeline({delay: 0.5});
     
    tl.from('h1', {
        y: -40,
        opacity: 0,
        duration: 2,
        ease: 'power4'
    })
    .from('.p-sbig', {
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
    }, 2)

}

window.onload = () => {
	initIntro();
};