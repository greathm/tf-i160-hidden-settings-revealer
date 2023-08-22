// ==UserScript==
// @name         tf-i160 hidden setting revealer
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  removes "display: none;" and "disabled" attributes from entire page code
// @author       @great_hm
// @match        https://192.168.1.1/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


    function removeDisplayNoneFromElements() {
        const elements = document.querySelectorAll('[style*="display: none;"]');
        elements.forEach(element => {
            const style = element.getAttribute('style');
            const updatedStyle = style ? style.replace(/display:\s*none;/gi, '') : '';
            element.setAttribute('style', updatedStyle);
        });
    }


    function removeDisabledFromElements() {
        const elements = document.querySelectorAll('[disabled="disabled"]');
        elements.forEach(element => {
            element.removeAttribute('disabled');
        });
    }


    function addButtons() {
        function createButton(text, onClick) {
            const button = document.createElement('button');
            button.textContent = text;
            button.style.position = 'fixed';
            button.style.bottom = '10px';
            button.style.zIndex = '9999';
            button.addEventListener('click', onClick);
            return button;
        }

        const displayNoneButton = createButton('reveal hidden settings', () => {
            removeDisplayNoneFromElements();
        });

        const disabledButton = createButton('enable disabled checks ', () => {
            removeDisabledFromElements();
        });

        document.body.appendChild(displayNoneButton);
        document.body.appendChild(disabledButton);

        displayNoneButton.style.right = '40px';
        disabledButton.style.right = '230px';
    }

    // Ensure buttons are added when the DOM is ready
    if (document.readyState === 'complete') {
        addButtons();
    } else {
        document.addEventListener('DOMContentLoaded', () => {
            addButtons();
        });
    }
})();
