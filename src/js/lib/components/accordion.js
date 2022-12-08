import $ from '../core';

$.prototype.accordion = function () {
   for(let i = 0; i < this.length; i++) {
    $(this[i]).siblings().removeClass('accordion-item--active')
    .closest('.accordion').find('.accordion-block--active').removeClass('accordion-block--active');
 
      $(this[i].nextElementSibling).fadeOut(300);
    $(this[i]).click(() => {
      $(this[i]).toggleClass('accordion-item--active').siblings().removeClass('accordion-item--active');
      $(this[i].nextElementSibling).fadeToggle(500).stopPropagation().toggleClass('accordion-block--active').siblings().removeClass('accordion-block--active');

    });
    
   }
};

$('.accordion-heading').accordion();