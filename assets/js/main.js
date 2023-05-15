$('.navOpen').click(() => {
    $('.navDrop').toggleClass('hidden');
    $('.navOpen').find('svg').toggleClass('rotate-180');
});

$(function() {
    $("#tabsProject").tabs();
});
$(function() {
    $("#tabsProduction").tabs();
});
$(function() {
    $("#tabsCatalog").tabs();
});
$(function() {
    $("#accordion").accordion();
});

// Menu
$('#openMenu, #overlay').click(() => {
    $('#menu').toggleClass('hidden');
    $('#menu').toggleClass('flex');
    $('#overlay').toggleClass('hidden');

    $('#openMenu').find('.topLine').toggleClass('-rotate-45 translate-y-[14px]');
    $('#openMenu').find('.midLine').toggleClass('opacity-0');
    $('#openMenu').find('.bottomLine').toggleClass('rotate-45 -translate-y-[14px]');
    $('#openMenu').children().toggleClass('border-white');

    $('body').toggleClass('overflow-hidden');
});

// Scroll
$("a.scroll-to").on("click", function(e){
  e.preventDefault();
  var anchor = $(this).attr('href');
  $('html, body').stop().animate({
      scrollTop: $(anchor).offset().top - 60
  }, 800);
});

// Modal
$('.openModal').click(() => {
    $('.overlay, .modal, .closeModal').toggleClass('hidden');
    $('body').toggleClass('overflow-hidden');
}); 

$('.overlay, .closeModal').click(() => {
    $('.overlay, .modal, .closeModal').toggleClass('hidden');
    $('body').toggleClass('overflow-hidden');
});

// Tabs
$(function() {
    document.querySelectorAll('.tabs-triggers__item').forEach((item) =>
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const id = e.target.getAttribute('href').replace('#', '');
  
      document.querySelectorAll('.tabs-triggers__item').forEach(
        (child) => child.classList.remove('tabs-triggers__item_active')
      );
  
      document.querySelectorAll('.tabs-content__item').forEach(
        (child) => child.classList.remove('tabs-content__item_active')
      );
  
      item.classList.add('tabs-triggers__item_active');
      document.getElementById(id).classList.add('tabs-content__item_active');
    })
  );
  
  document.querySelector('.tabs-triggers__item').click();
  
  const btnPrev = document.querySelector('.tabs-button__prev');
  const btnNext = document.querySelector('.tabs-button__next');
  
  btnNext.addEventListener("click", function () {
    let current = document.querySelector(".tabs-triggers__item_active");
    (current.nextElementSibling || current.parentElement.children[0]).click();
  });
  
  btnPrev.addEventListener("click", function () {
    let current = document.querySelector(".tabs-triggers__item_active");
    (current.previousElementSibling || current.parentElement.children[current.parentElement.children.length - 1]).click();
  });
});