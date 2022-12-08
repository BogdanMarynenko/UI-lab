import $ from '../core';

// функция показивает елемент на странице
$.prototype.show = function() {
 for(let i = 0; i < this.length; i++){
     if(!this[i].style) {
      continue;
     }
     this[i].style.display = '';
 }

 return this; // возвращаем this чтобы можна дальше с ним работать
};

//  скривает елементы
$.prototype.hide = function() {
  for(let i = 0; i < this.length; i++){
      if(!this[i].style) {
       continue;
      }
      this[i].style.display = 'none';
  }
 
  return this;
 };

 // елемент скрыт показиваем. показан скриваем. добавляем условие для проверки
 $.prototype.toggle = function() {
  for(let i = 0; i < this.length; i++){
      if(!this[i].style) {
       continue;
      }
      if(this[i].style.display === 'none'){
        this[i].style.display = '';
      }else {
        this[i].style.display = 'none';  
      } 
  }

  return this;
 };