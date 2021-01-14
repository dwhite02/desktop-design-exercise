/*
    Page Load
*/

window.addEventListener("load", function () {
    drop('.cc-bar.one',8, "0")
    drop('.cc-bar.two', 12, ".25s")
    drop('.cc-bar.three', 4, ".5s")
    drop('.cc-bar.four', 0, ".75s")
    drop('.cc-bar.five', 8, "1s")
    drop('.cc-bar.six', 15, "1.25s")
    drop('.cc-bar.seven', 7, "1.5s")
    drop('.cc-bar.eight', 0, "1.75s")
});

function drop(el, mTop, tDelay) {
    const element = document.querySelector(el)
    element.style.marginTop = `${mTop}%`
    element.style.transitionDelay = tDelay
}


/*
    SCROLL EFFECTS
*/

window.addEventListener("scroll", function () {
    scrollEffect('lorem-row', '.cc-circle-sm', 'line-overlay')
    scrollEffect('ea-row', '.cc-circle-lg', 'line-overlay')
    scrollEffect('consectetur-row', '.cc-circle-box', 'combine')
    scrollEffect('tempor-row', '.cc-circle-box', 'overlay')
    parrallax()
});


function scrollEffect (section, element, className) {
    const container = document.getElementById(section);
    const els = document.querySelectorAll(element);
    const scrollLocation = container.offsetParent.offsetTop + container.offsetTop -150;
    
    if (window.scrollY > scrollLocation) {
        for (const el of els) {
            el.classList.add(className)
        }
    } 
}

function parrallax() {
    const pyramid = document.querySelector(".pyramid")
    const tBlock = document.querySelector(".cc-blocks-container .top")
    const bBlock = document.querySelector(".cc-blocks-container .bottom")
    const offset = pyramid.offsetTop - 50

    if (window.scrollY > offset) {
        let topY = (window.scrollY - offset) * .1
        let topX = (window.scrollY - offset) * .19
        let bottomY = (window.scrollY - offset) * .15
        let bottomX = (window.scrollY - offset) * .1
        
        
        if (topY <= 23.3 ) {
            tBlock.style.top = `${topY}%`;
        }
        if (topX <= 43) {
            tBlock.style.right = `${topX}%`;
        }

        if (bottomY < 33) {
            bBlock.style.bottom = `${bottomY}%`;
        }

        if (bottomX < 16) {
            bBlock.style.left = `${-10 + bottomX}%`;
        }
    }
    else {
        tBlock.style.top = 0;
        tBlock.style.right = 0;
        bBlock.style.left = "-10%";
        bBlock.style.bottom = 0;
    }
}

/*
    CLICK EFFECTS
*/

let textBox = document.querySelector('.cc-text-container');

let selected = document.querySelector('.cc-text-box');;

textBox.onclick = function (event) {
    let target = event.target;

    while (target != this) {
        if (target.className === 'cc-text-box') {
            highlight(target);
            return;
        }
        target = target.parentNode;
    }
}

function highlight(node) {
    console.log(selected)
    if (selected) {
        selected.classList.remove('active');
    }
    selected = node;
    selected.classList.add('active');
}

let accordians = document.querySelectorAll('.cc-accordian');

for (const acc of accordians) {

    acc.onclick = function (event) {
        let target = event.target;
        
        acc.classList.toggle('active')
        if (acc.classList.contains('active')) {
            target.src = "images/assets/minus.svg"
        } else {
            target.src = "images/assets/plus.svg"
        }
    }
   
}
