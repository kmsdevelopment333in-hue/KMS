let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

function showNextSlide() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto slide every 5 seconds
setInterval(showNextSlide, 5000);

// Example Google login button click
document.getElementById('googleLogin').addEventListener('click', () => {
    alert("Google Login feature will be added here!");
});


let slideindex = 0;
showNextSlide();

function showslide() {
    let i;
    let slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideindex++;
    if (slideindex > slides.length) { slideindex = 1; }
    slides[slideindex - 1].style.display = "block";
    setTimeout(showslide, 3000); // change image every 3 seconds
}