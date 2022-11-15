import $ from '../core';

$.prototype.addClass = function(...className) {
     for(let i = 0; i < this.length; i++) {
      this[i].classList.add(...className);
      if(!this[i].classList){
        continue;
      }
     }
     return this;
};

$.prototype.removeClass = function(...className) {
      for(let i = 0; i < this.length; i++) {
      this[i].classList.remove(...className);
      if(!this[i].classList){
        continue;
      }
      }
      return this;
};

$.prototype.toggleClass = function(...className) {
      for(let i = 0; i < this.length; i++) {
      this[i].classList.toggle(...className);
      if(!this[i].classList){
        continue;
      }
      }
      return this;
};