document.addEventListener("DOMContentLoaded", () => {
    // MENU BURGER
    const menuToggle = document.querySelector("#menu-toggle");
    const nav = document.querySelector(".nav");

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    
});


// LOGIQUE POUR LE CAROUSSEL 1
var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 5,
    spaceBetween: 30,
    slidesPerGroup: 5,
    loop: false,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".page1",
        clickable: true,
    },
    navigation: {
        nextEl: ".next1",
        prevEl: ".prev1",
        
    },
    breakpoints: {
        // >= 1024px
        1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        //  >= 768px
        770: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        //  < 768px
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
    },
});

// LOGIQUE POUR LE CAROUSSEL 2
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 5,
    spaceBetween: 30,
    slidesPerGroup: 5,
    loop: false,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".page2",
        clickable: true,
    },
    navigation: {
        nextEl: ".next2",
        prevEl: ".prev2",
        
    },
    breakpoints: {
        //  >= 1024px
        1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        //  >= 768px
        770: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        //  < 768px
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
    },
});


// LOGIQUE POUR LE CAROUSSEL 3
var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 5,
    spaceBetween: 30,
    slidesPerGroup: 5,
    loop: false,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".page3",
        clickable: true,
    },
    navigation: {
        nextEl: ".next3",
        prevEl: ".prev3",
        
    },
    breakpoints: {
        //  >= 1024px
        1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        //  >= 768px
        770: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        //  < 768px
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
    },
});



// LOGIQUE POUR LE FILTRE DE LA BARRE DE RECHERCHE
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const dropdownButton = document.querySelector('.dropdown-button');
      dropdownButton.textContent = this.textContent;
    });
  });




