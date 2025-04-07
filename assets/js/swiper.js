const swiperNews = new Swiper('.swiper-news', {
    // Optional parameters
    spaceBetween: 20,
    enabled: true,

    breakpoints: {
        320: {
            allowTouchMove: true,
            slidesPerView: 1,
        },
        375: {
            allowTouchMove: true,
            slidesPerView: 1.3,
        },
        480: {
            allowTouchMove: true,
            slidesPerView: 1.7,
        },
        600: {
            allowTouchMove: true,
            slidesPerView: 2.3,
        },
        700: {
            allowTouchMove: true,
            slidesPerView: 2.7,
        },
        992: {
            allowTouchMove: true,
            slidesPerView: 3.3,
        },
        1080: {
            allowTouchMove: true,
            slidesPerView: 4,
        },
        1280: {
            allowTouchMove: true,
            slidesPerView: 4,
        },
        1921: {
            allowTouchMove: true,
            slidesPerView: 4
        },
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-news-btn-next',
      prevEl: '.swiper-news-btn-prev',
    },
});

const swiperBanner = new Swiper('.swiper-banner', {
    // Optional parameters
    slidesPerView: 1,
    enabled: true,
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-banner-btn-next',
      prevEl: '.swiper-banner-btn-prev',
    },
});
const swiperNewsGallery = new Swiper('.swiper-news-gallery', {
    // Optional parameters
    slidesPerView: 1,
    enabled: true,
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-news-gallery-btn-next',
      prevEl: '.swiper-news-gallery-btn-prev',
    },
});

const swiperProduction = new Swiper('.swiper-production', {
    // Optional parameters
    spaceBetween: 30,
    slidesPerView: 3,
    enabled: true,

    breakpoints: {
        320: {
            allowTouchMove: true,
            slidesPerView: 1,
        },
        769: {
            allowTouchMove: true,
            slidesPerView: 3,
        },
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-production-btn-next',
      prevEl: '.swiper-production-btn-prev',
    },
});

const swiperCertificate = new Swiper('.swiper-certificate', {
    // Optional parameters
    spaceBetween: 50,
    slidesPerView: 3,
    enabled: true,

    breakpoints: {
        320: {
            allowTouchMove: true,
            slidesPerView: 1,
        },
        600: {
            allowTouchMove: true,
            slidesPerView: 2,
        },
        769: {
            allowTouchMove: true,
            spaceBetween: 20,
            slidesPerView: 3,
        },
        1024: {
            allowTouchMove: true,
            slidesPerView: 4,
        },
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-certificate-btn-next',
      prevEl: '.swiper-certificate-btn-prev',
    },
});

const swiperReadAlso = new Swiper('.swiper-read-also', {
    // Optional parameters
    spaceBetween: 50,
    slidesPerView: 3,
    enabled: true,

    breakpoints: {
        320: {
            allowTouchMove: true,
            slidesPerView: 1,
        },
        600: {
            allowTouchMove: true,
            slidesPerView: 2,
        },
        769: {
            allowTouchMove: true,
            spaceBetween: 20,
            slidesPerView: 3,
        },
        1024: {
            allowTouchMove: true,
            slidesPerView: 3,
        },
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-read-also-btn-next',
      prevEl: '.swiper-read-also-btn-prev',
    },
});

const swiperGallery = new Swiper('.swiper-gallery', {
    // Optional parameters
    slidesPerView: 3,
    enabled: true,

    breakpoints: {
        320: {
            allowTouchMove: true,
            slidesPerView: 1,
        },
        600: {
            allowTouchMove: true,
            spaceBetween: 16,
            slidesPerView: 2,
        },
        769: {
            allowTouchMove: true,
            spaceBetween: 16,
            slidesPerView: 2,
        },
        992: {
            allowTouchMove: true,
            spaceBetween: 30,
            slidesPerView: 3,
        },
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-gallery-btn-next',
      prevEl: '.swiper-gallery-btn-prev',
    },
});

const swiperSimilar = new Swiper('.swiper-similar', {
    // Optional parameters
    spaceBetween: 26,
    slidesPerView: 3,
    enabled: true,

    breakpoints: {
        220: {
            allowTouchMove: true,
            slidesPerView: 1,
        },
        600: {
            allowTouchMove: true,
            slidesPerView: 2,
        },
        769: {
            allowTouchMove: true,
            spaceBetween: 20,
            slidesPerView: 2,
        },
        900: {
            allowTouchMove: true,
            slidesPerView: 3,
        },
        1200: {
            allowTouchMove: true,
            slidesPerView: 4,
        },
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-similar-btn-next',
      prevEl: '.swiper-similar-btn-prev',
    },
});

const swiperProjects = new Swiper('.swiper-projects', {
    // Optional parameters
    slidesPerView: 1,
    enabled: true,
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-projects-btn-next',
      prevEl: '.swiper-projects-btn-prev',
    },
});
const swiperProduct = new Swiper('.swiper-product', {
    // Optional parameters
    slidesPerView: 1,
    enabled: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-product-btn-next',
      prevEl: '.swiper-product-btn-prev',
    },
});

const swiperProjectBlock = new Swiper('.swiper-project-block', {
    // Optional parameters
    slidesPerView: 1,
    enabled: true,
    grabCursor: true,
      effect: "creative",
      creativeEffect: {
        prev: {
          opacity: 0,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-project-block-btn-next',
      prevEl: '.swiper-project-block-btn-prev',
    },
});

const btnNextOutside = document.querySelector('.swiper-project-block-btn-next-outside');
const btnPrevOutside = document.querySelector('.swiper-project-block-btn-prev-outside');

if(btnNextOutside && btnPrevOutside) {
    btnNextOutside.addEventListener('click', () => swiperProjectBlock.slideNext());
    btnPrevOutside.addEventListener('click', () => swiperProjectBlock.slidePrev());
}

let swiperCustomers = new Swiper(".swiper-customers", {
    direction: "vertical",
    slidesPerView: 1,
    autoHeight: true,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    mousewheel: true,
    hashNavigation: {
        watchState: true,
    },

    enabled: true,
    grabCursor: true,
      effect: "creative",
      creativeEffect: {
        prev: {
          opacity: 0,
          translate: [0, 0, -400],
        },
        next: {
          translate: [0, "100%", 0],
        },
    },

    pagination: {
        el: ".customers-menu__list",
        clickable: true,
        renderBullet: (index, className) => {
            const names = [
                "Порядок заключения договоров",
                "Доставка",
                "Оплата",
                "Гарантия",
                "Сертификаты",
            ];
            return `
            <li class="customers-menu__item ${className}">
                <span class="customers-menu__text">${names[index]}</span>
            </li>
            `;
        },
    },
});

