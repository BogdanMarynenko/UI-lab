import $ from "../core";


  $.prototype.set = function (name, value) {
  for(let i = 0; i < this.length; i++) {
    if (!name && !value) {
    return this;
    }else if (name && !value) {
      this[i].setAttribute(name, '');
    } else {
      this[i].setAttribute(name, value);
    }
  }
  return this;
  };


  $.prototype.get = function (name) {
    for(let i = 0; i < this.length; i++) { 
      if(!this[i].getAttribute(name)) {
      continue;
      }else {
        this[i].getAttribute(name);
      }
    }
    console.log(this[0].getAttribute(name));
    return this[0].getAttribute(name);
    };
    

  $.prototype.removeAttr = function (name) {
      for(let i = 0; i < this.length; i++) {
        this[i].removeAttribute(name);
      }
      return this;
      };

  $.prototype.toggleAttr = function (name, value) {
      for(let i = 0; i < this.length; i++) {
        if(this[i].hasAttribute(name)){
             this[i].removeAttribute(name);
        }else if (name && !value) {
             this[i].setAttribute(name, '');
        } else {
             this[i].setAttribute(name, value);
        }
      }
      console.log(this);
      return this;
      };
    
