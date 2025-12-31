$(document).ready(function () {
    let currentIndex = 0;
    const slides = $(".slide");

    function showSlide(index) {
        slides.hide(); // göm alla bilder
        slides.eq(index).show(); // visa den valda bilden
    }

    // visa första bilden initialt
    showSlide(currentIndex);

    // nästa bild
    $(".next").on("click", function () {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    // föregående bild
    $(".prev").on("click", function () {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });
});
