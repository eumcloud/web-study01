// FAQs
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

// 슬라이더
var slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slides li'),
    currentIndex = 0, // 몇 번째 사진인지?
    slideCount = slide.length, // 이미지 총 몇개?
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next'),
    slideWidth = 300,
    slideMargin = 30;

slides.style.width = (slideWidth + slideMargin) * slideCount - slideMargin + "px";

function moveSlide(num) {
    slides.style.left = -num * 330 + "px";
    currentIndex = num;
}

nextBtn.addEventListener('click', function () {
    if (currentIndex < slideCount - 3)
        moveSlide(currentIndex + 1);
    else
        moveSlide(5);
});

prevBtn.addEventListener('click', function () {
    if (currentIndex > 0)
        moveSlide(currentIndex - 1);
    else
        moveSlide(0);
});
