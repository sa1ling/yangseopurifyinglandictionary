const cardWrapper = document.getElementById('cardWrapper');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

let scrollAmount = 0;
const cardWidth = 270; // 카드 너비 + margin

rightArrow.addEventListener('click', () => {
    if(scrollAmount < cardWrapper.scrollWidth - cardWrapper.clientWidth) {
        scrollAmount += cardWidth;
        cardWrapper.style.transform = `translateX(-${scrollAmount}px)`;
    }
});

leftArrow.addEventListener('click', () => {
    if(scrollAmount > 0) {
        scrollAmount -= cardWidth;
        cardWrapper.style.transform = `translateX(-${scrollAmount}px)`;
    }
});
