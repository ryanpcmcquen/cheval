/* simpleJsCopy.js v0.1.4 by @ryanpcmcquen */

/*global window*/
/*jslint browser:true, white:true*/

(function() {
  'use strict';
  // a stupidly simple copy button
  // - copies on awesome browsers/devices
  // - selects text on underwhelming mobile devices
  // - the button instructs the user if necessary
  window.addEventListener('load', function() {
    var copyBtn = document.querySelector('.js-copy-btn');
    var iPhoneORiPod = false,
      iPad = false,
      safari = false;
    if (navigator.userAgent.match(/iPhone|iPod/i)) {
      iPhoneORiPod = true;
    } else if (navigator.userAgent.match(/iPad/i)) {
      iPad = true;
    } else if (/^((?!chrome).)*safari/i.test(navigator.userAgent)) {
      safari = true;
    }
    if (iPhoneORiPod || iPad || safari) {
      copyBtn.textContent = "Select text";
    }
    copyBtn.addEventListener('click', function() {
      // select the text
      var copyItem = document.querySelector('.text-to-copy');
      copyItem.select();
      try {
        // now that we've selected the text, execute the copy command
        document.execCommand('copy');
        if (iPhoneORiPod) {
          copyBtn.textContent = "Now tap 'Copy'";
        } else if (iPad) {
          // the iPad doesn't have the 'Copy' box pop up,
          // you have to tap the text first
          copyBtn.textContent = "Now tap the text, then 'Copy'";
        } else if (safari) {
          // fancy safari detection thanks to: http://stackoverflow.com/a/23522755
          copyBtn.textContent = "Press Command + C to copy";
        } else {
          copyBtn.textContent = "Copied!";
        }
      } catch (ignore) {
        copyBtn.textContent = "Please copy manually";
      }
      // this is what selects it on iOS
      copyItem.focus();
      if (iPhoneORiPod || iPad) {
        copyItem.selectionStart = 0;
        copyItem.selectionEnd = copyItem.textContent.length;
      } else {
        copyItem.select();
      }

      // disable the button because clicking it again could cause madness
      copyBtn.disabled = true;
    });
  });
}());
