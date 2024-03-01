// ScrollReveal
window.sr = ScrollReveal ({reset: true});
sr.reveal('p', {duration: 2500});

// Botão
const magneto = document.querySelector('.magneto');
const magnetoText = document.querySelector('.magneto .text');

const activateMagneto = (event) => {
    let boundBox = magneto.getBoundingClientRect();
    const magnetoStrength = 40;
    const magnetoTextStrength = 50;
    const newX = ((event.clientX - boundBox.left) / magneto.offsetWidth) - 0.5;
    const newY = ((event.clientY - boundBox.top) / magneto.offsetHeight) - 0.5;

    gsap.to(magneto, {
        duration: 1,
        x: newX * magnetoStrength,
        y: newY * magnetoStrength,
        ease: Power4.easeOut

    });

    gsap.to(magnetoText, {
        duration: 4,
        x: newX * magnetoTextStrength,
        y: newY * magnetoTextStrength,
        ease: Power4.easeOut
    });
};

const resetMagneto = (event) => {
    gsap.to([magneto, magnetoText], {
        duration: 2,
        x: 0,
        y: 0,
        ease: Power4.easeOut
    });
};

magneto.addEventListener('mousemove', activateMagneto);
magneto.addEventListener('mouseleave', resetMagneto);