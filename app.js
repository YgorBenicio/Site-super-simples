'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});

var classname= document.body.className;
if(classname == "light-theme") {    
    this.textContet = "Dark";
}

else{
    this.textContet = "Light";
}

console.log('current class name: ' + classname);
