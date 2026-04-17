document.addEventListener("DOMContentLoaded", () => {

    // Scroll animation
    const cards = document.querySelectorAll(".card");

    const show = () => {
        cards.forEach(c => {
            let top = c.getBoundingClientRect().top;
            if (top < window.innerHeight - 100) {
                c.classList.add("show");
            }
        });
    };

    window.addEventListener("scroll", show);
    show();

    // Slider images
    const images = [
        "images/design1.jpg",
        "images/design2.jpg",
        "images/design3.jpg",
        "images/design4.jpg",
        "images/design5.jpg",
        "images/design6.jpg"
    ];

    let current = 0;

    const slider = document.getElementById("slider");
    const sliderImg = document.getElementById("sliderImg");

    // فتح السلايدر
    window.openSlider = (index) => {
        current = index;
        slider.style.display = "flex";
        sliderImg.src = images[current];
    };

    // تغيير الصور
    window.changeSlide = (dir) => {
        current += dir;

        if (current < 0) current = images.length - 1;
        if (current >= images.length) current = 0;

        sliderImg.src = images[current];
    };

    // إغلاق السلايدر
    window.closeSlider = () => {
        slider.style.display = "none";
    };

    // 🔥 أهم جزء: قفل عند الضغط خارج الصورة
    slider.addEventListener("click", (e) => {
        if (e.target.id === "slider") {
            closeSlider();
        }
    });

    // ربط الكروت
    cards.forEach((card, index) => {
        card.addEventListener("click", () => {
            openSlider(index);
        });
    });

});