# simpleJsCopy :clipboard:

Just include the library (`v0.1.2`, under 1kB!):

    //cdn.rawgit.com/ryanpcmcquen/simpleJsCopy/47534754a9219762ecbf18224afe86a04bf83979/simpleJsCopy.min.js

Then use the following elements:

1. `<textarea>` with the class `text-to-copy`
2. `<button>` with the class `js-copy-btn`

The library takes cares of the rest. :shipit:

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

