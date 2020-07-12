function enterWebsiteAnimate() {
    let tl = anime.timeline({
        easing: 'easeOutExpo',
        duration: 100
    });
    
    tl.add({
        targets: '#home-page',
        translateX: 100
    });
    
    tl.add({
        targets: '#topbar',
        translateY: -25
    });
    
    tl.add({
        targets: '#topbar, #home-page',
        translateX: 0,
        translateY: 0,
        opacity: 1,
        duration: 1000
    });
}

function enterHomeAnimate() {
    let tl = anime.timeline({
        easing: 'easeOutExpo',
        duration: 100
    });
    
    tl.add({
        targets: '#home-page',
        translateX: 100
    });
    
    tl.add({
        targets: '#home-page',
        translateX: 0,
        opacity: 1,
        duration: 1000
    });
}

function enterProjectsAnimate(){
    let tl = anime.timeline({
        easing: 'easeOutExpo',
        duration: 100
    });
    
    tl.add({
        targets: '#projects-page',
        translateX: 100
    });
    
    tl.add({
        targets: '#projects-page',
        translateX: 0,
        opacity: 1,
        duration: 1000
    });
}

function showHome() {
    document.getElementById("projects-page").style.display = 'none';
    document.getElementById("home-page").style.opacity = 0;
    document.getElementById("home-page").style.display = 'block';
    enterHomeAnimate();
}

function showProjects() {
    document.getElementById("home-page").style.display = 'none';
    document.getElementById("projects-page").style.opacity = 0;
    document.getElementById("projects-page").style.display = 'block';
    enterProjectsAnimate();
}

//START UP ANIMATION
enterWebsiteAnimate();

//DIV ANIMATION
AOS.init({ 
    mirror: true
});