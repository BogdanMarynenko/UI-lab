import $ from '../core';

// навешиваем обработчик 
$.prototype.on = function(eventName, callback) {
  for(let i = 0; i < this.length; i++) {
    if(!eventName || !callback) {
      return this;
    }
    this[i].addEventListener(eventName, callback);
  }
  return this;
};

// убираем обработчик 
$.prototype.off = function(eventName, callback) {
  for(let i = 0; i < this.length; i++) {
    if(!eventName || !callback) {
      return this;
    }
    this[i].removeEventListener(eventName, callback);
  }
  return this;
};

// и сам клик
$.prototype.click = function(handler) {
  for(let i = 0; i < this.length; i++) {
    if(handler) {
      this[i].addEventListener('click', handler);
    } else {
      this[i].click();
    }
    }
  return this;
};
