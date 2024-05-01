// ==UserScript==
// @name         Blur Bypass - Passei Direto - Responde Aí
// @namespace    https://github.com/wilssola/blur-bypass
// @version      0.2
// @description  Blur Bypass - Passei Direto - Responde Aí
// @author       Wilson Oliveira Lima
// @match        *://*.passeidireto.com/*
// @match        *://*.respondeai.com.br/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(blurBypass, 1000);
})();

function blurBypass() {
    let body = document.getElementsByTagName('body')[0];
    if (body) {
        body.innerHTML = body.innerHTML.replaceAll('blur', '');
    }

    let style = document.createElement('style');
    if (style) {
        style.innerHTML = '*, div, div *, .disable-blur, .disable-blur * { filter: blur(0) !important; -webkit-filter: blur(0) !important; }';
    }

    let head = document.getElementsByTagName('head')[0];
    if (head) {
        head.appendChild(style);
    }

    let paywall = document.querySelectorAll('[data-testid="free-trial-paywall"]')[0];
    if (paywall) {
        paywall.remove();
    }

    let divs = document.getElementsByTagName('div');
    for (let div of divs) {
        if (!div) continue;
        if (!div.classList) continue;

        div.classList.add('disable-blur');

        if (div.className.includes('banner')) {
            div.remove();
        }
    }
}
