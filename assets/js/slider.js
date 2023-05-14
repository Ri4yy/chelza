const swiperHero = new Swiper('.swiperHero', {
    // Default parameters
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
});

const swiperProduct = new Swiper('.swiperProduct', {
    // Default parameters
    allowTouchMove: true,
    spaceBetween: 30,


    breakpoints: {
      320: {
        slidesPerView: 1,
        grid: {
          rows: 1,
          fill: "row",
        }
      },
      580: {
        slidesPerView: 2,
        grid: {
          rows: 1,
          fill: "row",
        }
      },
      1024: {
        slidesPerView: 3,
        grid: {
          rows: 1,
          fill: "row",
        }
      },
      1170: {
        slidesPerView: 2,
        grid: {
          rows: 2,
          fill: "row",
        },
      },
    },

    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
});

$(function () {
  for (let e = 1; e < 10; e++) new Swiper(".swiperProduction" + e, { 
    spaceBetween: 30,
    freeMode: true,
    enabled: true,

    breakpoints: {
      320: {
        allowTouchMove: true,
        slidesPerView: 1,
        grid: {
          rows: 1,
          fill: "row",
        }
      },
      658: {
        allowTouchMove: true,
        slidesPerView: 2,
        grid: {
          rows: 1,
          fill: "row",
        }
      },
      900: {
        allowTouchMove: true,
        slidesPerView: 3,
        grid: {
          rows: 1,
          fill: "row",
        }
      },
      1024: {
        allowTouchMove: true,
        slidesPerView: 3,
        grid: {
          rows: 2,
          fill: "row",
        }
      }
    },
    
    navigation: {
      nextEl: '.swiper-next-production' + e,
      prevEl: '.swiper-prev-production' + e,
    },
  });
});

for (let e = 1; e < 10; e++) new Swiper(".swiperProject" + e, { 
    // Default parameters
    slidesPerView: 1,

    navigation: {
      nextEl: '.swiper-next-project' + e,
      prevEl: '.swiper-prev-project' + e,
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
});

const swiperDoc = new Swiper('.swiperDoc', {
  // Default parameters
  slidesPerView: 5,
  spaceBetween: 18,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    490: {
      slidesPerView: 3,
    },
    728: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  },

  navigation: {
    nextEl: '.swiper-next-cert',
    prevEl: '.swiper-prev-cert',
  },
});

const swiperNews = new Swiper('.swiperNews', {
  // Default parameters
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    490: {
      slidesPerView: 2,
    },
    728: {
      slidesPerView: 3,
    },
  },

  navigation: {
    nextEl: '.swiper-next-news',
    prevEl: '.swiper-prev-news',
  },
});