// @license magnet:?xt=urn:btih:cf05388f2679ee054f2beb29a391d25f4e673ac3&dn=gpl-2.0.txt GPL-v2-or-later
/*! cheval v1.0.6 by ryanpcmcquen */
// Ryan P.C. McQuen | Everett, WA | ryanpcmcquen@member.fsf.org
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation; either version 2 of the License, or
// (at your option) any later version, with the following exception:
// the text of the GPL license may be omitted.
//
// This program is distributed in the hope that it will be useful, but
// without any warranty; without even the implied warranty of
// merchantability or fitness for a particular purpose. Compiling,
// interpreting, executing or merely reading the text of the program
// may result in lapses of consciousness and/or very being, up to and
// including the end of all existence and the Universe as we know it.
// See the GNU General Public License for more details.
//
// You may have received a copy of the GNU General Public License along
// with this program (most likely, a file named COPYING).  If not, see
// <https://www.gnu.org/licenses/>.
/*global window*/
/*jslint browser:true, white:true, single:true*/
(function() {
    'use strict';

    var textClassName = 'text-to-copy';
    var buttonClassName = 'js-copy-btn';
    var canUpdateButtonText = false;
    var copyBtnText = {
        repeatCopy: 'Copy',
        iphoneOrIpodCopy: 'Tap+Copy',
        ipadCopy: 'Tap Text+Copy',
        oldSafariCopy: 'Command+C',
        copyNotSupported: 'Copy Manually'
    };
    var sets = {};
    var regexBuilder = function(prefix) {
        return new RegExp(prefix + '\\S*');
    };

    window.addEventListener('DOMContentLoaded', function() {



        var texts = Array.prototype.slice.call(document.querySelectorAll(
            '[class*=' + textClassName + ']'));
        var buttons = Array.prototype.slice.call(document.querySelectorAll(
            '[class*=' + buttonClassName + ']'));

        var classNameFinder = function(arr, regex, namePrefix) {
            return arr.map(function(item) {
                return (item.className.match(regex)) ? item.className
                    .match(regex)[0].replace(namePrefix, '') : false;
            }).sort();
        };

        sets.texts = classNameFinder(
            texts, regexBuilder(textClassName), textClassName);

        sets.buttons = classNameFinder(
            buttons, regexBuilder(buttonClassName), buttonClassName);

        var matches = sets.texts.map(function(ignore, index) {
            return sets.texts[index].match(sets.buttons[index]);
        });

        var throwErr = function(err) {
            throw new Error(err);
        };
        var iPhoneORiPod = false;
        var iPad = false;
        var oldSafari = false;
        var navAgent = window.navigator.userAgent;
        if (
            (/^((?!chrome).)*safari/i).test(navAgent)
            // ^ Fancy safari detection thanks to: https://stackoverflow.com/a/23522755
            &&
            !(/^((?!chrome).)*[0-9][0-9](\.[0-9][0-9]?)?\ssafari/i).test(
                navAgent)
            // ^ Even fancier Safari < 10 detection thanks to regex.  :^)
        ) {
            oldSafari = true;
        }
        // We need to test for older Safari and the device,
        // because of quirky awesomeness.
        if (navAgent.match(/iPhone|iPod/i)) {
            iPhoneORiPod = true;
        } else if (navAgent.match(/iPad/i)) {
            iPad = true;
        }
        var cheval = function(btn, text) {
            var copyBtn = document.querySelector(btn);

            var setCopyBtnText = function(textToSet) {
                copyBtn.textContent = textToSet;
            };
            if (iPhoneORiPod || iPad) {
                if (oldSafari) {
                    setCopyBtnText('Select text');
                }
            }
            if (copyBtn) {
                copyBtn.addEventListener('click', function() {
                    var oldPosX = window.scrollX;
                    var oldPosY = window.scrollY;
                    // Clone the text-to-copy node so that we can
                    // create a hidden textarea, with its text value.
                    // Thanks to @LeaVerou for the idea.
                    var originalCopyItem = document.querySelector(text);
                    var dollyTheSheep = originalCopyItem.cloneNode(true);
                    var copyItem = document.createElement('textarea');
                    copyItem.style.opacity = 0;
                    copyItem.style.position = 'absolute';
                    // If .value is undefined, .textContent will
                    // get assigned to the textarea we made.
                    var copyValue = dollyTheSheep.value || dollyTheSheep.textContent;
                    copyItem.value = copyValue;
                    document.body.appendChild(copyItem);
                    if (copyItem) {
                        // Select the text:
                        copyItem.focus();
                        copyItem.selectionStart = 0;
                        // For some reason the 'copyItem' does not get
                        // the correct length, so we use the OG.
                        copyItem.selectionEnd = copyValue.length;
                        try {
                            // Now that we've selected the text, execute the copy command:
                            document.execCommand('copy');
                            // And disable the cloned area to prevent jumping.
                            // This has to come after the `copy` command.
                            copyItem.setAttribute('disabled', true);

                            // if update button text enable then update button text after clicking on it
                            if (canUpdateButtonText) {
                                if (oldSafari) {
                                    if (iPhoneORiPod) {
                                        setCopyBtnText(copyBtnText.iphoneOrIpodCopy);
                                    } else if (iPad) {
                                        // The iPad doesn't have the 'Copy' box pop up,
                                        // you have to tap the text first.
                                        setCopyBtnText(copyBtnText.ipadCopy);
                                    } else {
                                        // Just old!
                                        setCopyBtnText(copyBtnText.oldSafariCopy);
                                    }
                                } else {
                                    setCopyBtnText(copyBtnText.repeatCopy);
                                }
                            }
                        } catch (ignore) {
                            setCopyBtnText(copyBtnText.copyNotSupported);
                        }
                        originalCopyItem.focus();
                        // Restore the user's original position to avoid
                        // 'jumping' when they click a copy button.
                        window.scrollTo(oldPosX, oldPosY);
                        originalCopyItem.selectionStart = 0;
                        originalCopyItem.selectionEnd = copyValue.length;
                        copyItem.remove();
                    } else {
                        throwErr(
                            "You don't have an element with the class: '" +
                            textClassName +
                            "'. Please check the cheval README."
                        );
                    }
                });
            } else {
                throwErr(
                    "You don't have a <button> with the class: '" +
                    buttonClassName + "'. Please check the cheval README."
                );
            }
        };

        // Copy all sets of elements and buttons:
        var copiedItems = matches.map(function(i) {
            return cheval('.' + buttonClassName + i, '.' + textClassName +
                i);
        });

    });

}());
// @license-end