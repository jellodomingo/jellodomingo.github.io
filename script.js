function showHome() {
    document.getElementById("projects-page").style.display = 'none';
    document.getElementById("home-page").style.opacity = 0;
    document.getElementById("home-page").style.display = 'block';

    let tl = anime.timeline({
        easing: 'easeOutExpo',
        duration: 100
    });
    
    tl.add({
        targets: '#home-page',
        translateY: -150
    });
    
    tl.add({
        targets: '#home-page',
        translateY: 0,
        opacity: 1,
        duration: 1000
    });
}

function showProjects() {
    document.getElementById("home-page").style.display = 'none';
    document.getElementById("projects-page").style.opacity = 0;
    document.getElementById("projects-page").style.display = 'block';

    let tl = anime.timeline({
        easing: 'easeOutExpo',
        duration: 100
    });
    
    tl.add({
        targets: '#projects-page',
        translateY: -150
    });
    
    tl.add({
        targets: '#projects-page',
        translateY: 0,
        opacity: 1,
        duration: 1000
    });
}

let tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 100
});

tl.add({
    targets: '#home-page',
    translateY: -150
});

tl.add({
    targets: '#home-page',
    translateY: 0,
    opacity: 1,
    duration: 1000
});

//START UP ANIMATION

