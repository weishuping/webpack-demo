import _ from 'lodash';
require('./style.less');
import printMe from './print.js';
// import $ from '../vendor/jquery-1.11.2.js';
import Icon from '../static/color.png';
import Data from '../static/my.json';
function component() {
    var element = document.createElement('div');
    //lodash
    element.innerHTML = _.join(['Hello'], ' ');
    element.classList.add('hello');
    console.log(Data);
    //添加图像

    var myIcon = new Image();
    myIcon.src = Icon;
    var ii =document.createElement('i');
    ii.innerHTML = 'camera';
    ii.classList.add('icon-camera-retro');
    element.appendChild(ii);
    ii.appendChild(myIcon);

    var btn = document.createElement('button');

    btn.innerHTML = 'Click ME';
    btn.onclick = printMe;
    element.appendChild(btn);
    return element;
}
document.body.appendChild(component());
// var a = require('../one/index.js');
// var css = require('../one/index.css');
// var app  = document.createElement('canvas');
// app.id = "c";
// document.body.appendChild(app);