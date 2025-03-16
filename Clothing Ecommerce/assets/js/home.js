let hamburger = document.getElementById("hamburgerIcon");


let isVisible = true
hamburger.addEventListener('click', () => {
    let nav = document.getElementById("nav");
    if (isVisible) {
        nav.style.display = 'block';
        isVisible = false;
    }else{
        nav.style.display = 'none';
        isVisible = true;
    }
})