# simpleJsCopy :clipboard:

Just include the library (`v0.1.3`, under 1kB!):

    //cdn.rawgit.com/ryanpcmcquen/simpleJsCopy/99fefdbfcb344441c8ebcc8a41f11b6105b4e412/simpleJsCopy.min.js

Then use the following elements:

1. `<textarea>` with the class `text-to-copy` (can be `readonly` but *not* `disabled`)
2. `<button>` with the class `js-copy-btn`

The library takes cares of the rest. :shipit:

:newspaper: You don't have to write any JavaScript to use it!

:warning: If you want your textarea to be invisible for some reason, use this CSS:

    .text-to-copy {
      opacity: 0;
      position: absolute;
    }

Because it will not work with `display: none;` or `visibility: hidden;`. :thumbsup:

#### So what?! Where does it work?

Almost everywhere!

Desktop:

- Chrome/Chromium 42+
- Firefox 41+
- Internet Explorer 9+
- Opera 29+

Android:

- Chrome 42+
- Firefox 41+

##### What about other browsers?

Everywhere else (meaning iOS), it will select the text. The library detects iDevices and will say either `Now tap 'Copy'` (iPhone) or `Now tap the text, then 'Copy'` (iPad), to account for the strange behavioral differences of these devices.

On desktop Safari (any version), the button will change to `Press Command + C to copy`.

On failure the button will say `Please copy manually`.

