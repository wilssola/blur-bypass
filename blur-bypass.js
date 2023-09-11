// ==UserScript==
// @name         Blur Bypass - Passei Direto - Responde Aí
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*.passeidireto.com/*
// @match        *://*.respondeai.com.br/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let body = document.getElementsByTagName('body')[0];
    body.innerHTML = body.innerHTML.replaceAll('blur', '');

    let style = document.createElement('style');
    style.innerHTML = '*, div, div *, .disable-blur, .disable-blur * { filter: blur(0) !important; -webkit-filter: blur(0) !important; }';

    let head = document.getElementsByTagName('head')[0];
    head.appendChild(style);

    let divs = document.getElementsByTagName('div');
    for (let i in divs) {
        divs[i].classList.add('disable-blur');

        if (divs[i].className.includes('banner')) {
            divs[i].remove();
        }
    }
})();
