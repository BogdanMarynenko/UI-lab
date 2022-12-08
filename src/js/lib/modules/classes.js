import $ from '../core';
 
 // добавляем класс либо классы с помощю rest оператора можно поместить несколько классов
$.prototype.addClass = function(...className) {
     for(let i = 0; i < this.length; i++) {
      this[i].classList.add(...className); //  а с помощю spred развернуть их
      if(!this[i].classList){
        continue;
      }
     }

     return this;
};

 // удаляем класс либо классы
$.prototype.removeClass = function(...className) {
      for(let i = 0; i < this.length; i++) {
      this[i].classList.remove(...className);
      if(!this[i].classList){
        continue;
      }
    }

      return this;
};

 // тоглим класс либо классы
$.prototype.toggleClass = function(...className) {
      for(let i = 0; i < this.length; i++) {
      this[i].classList.toggle(...className);
      if(!this[i].classList){
        continue;
      }
    }

      return this;
};