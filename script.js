document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".card");

    const showCards = () => {
        cards.forEach(card => {
            const top = card.getBoundingClientRect().top;
            const trigger = window.innerHeight - 100;

            if (top < trigger) {
                card.classList.add("show");
            }
        });
    };

    window.addEventListener("scroll", showCards);
    showCards();

});