const $ = function (selector) {
     return new $.prototype.init(selector); // каждий раз при использовании $ будет создаватся новий обект и метод который будет записан в прототипе етой функции
};

$.prototype.init = function(selector) {
    if(!selector) { // если не передан аргумент то
      return this; // возвращается пустой обьект контекста визова this {};
    }
// проверка на 1 selector
    if (selector.tagName) { //проверка на HTML елемент так как функция принимает селектор но не html елемент
      this[0] = selector; // и спомощю tagName проверяем есть ли у елемента ето свойство
      this.length = 1;
      return this;
    }
    //проверка на несколько selector
    //  Object.assign позволяет в существующий обьект добавить свойства и  закрепить тоесть selector копирует в this
    Object.assign(this, document.querySelectorAll(selector)); // назначаем новий обьект и получим все селекторы которие указивали више
    this.length = document.querySelectorAll(selector).length; // свойство которое отвечает за количество переданих елементов в selector
    return this;
};

$.prototype.init.prototype = $.prototype; // в прототив init записиваем главную функцию

window.$ = $; //записиваем функцию в глобальний обьект window/ и теперь ето глобальная функция которую можна визивать только по одному символу
export default $;