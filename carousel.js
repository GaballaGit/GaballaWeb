// Function to be called after DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    let slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    slides[1].hidden = true;
    slides[2].hidden = true;
    
    const nextB = document.getElementsByClassName("nextB");
    const prevB = document.getElementsByClassName("prevB");

    //getElementsByClassName returns an array I guess
    nextB[0].addEventListener("click",nextSlide);
    prevB[0].addEventListener("click",prevSlide)

    function goToSlide(index) {
        slides[currentIndex].hidden = true;
        slides[index].hidden = false;
        currentIndex = index;
    }

    // Move to the next slide
    function nextSlide() {
        if (currentIndex < slides.length - 1) {
            goToSlide(currentIndex + 1);
        } else {
            goToSlide(0); // Wrap around to the first slide
        }
    }

    // Move to the previous slide
    function prevSlide() {
        if (currentIndex > 0) {
            goToSlide(currentIndex - 1);
        } else {
            goToSlide(slides.length - 1); // Wrap around to the last slide
        }
    }
    
});


