# simpleJsCopy :clipboard:

Just include the library (`v0.1.1`, under 1kB!):

    //cdn.rawgit.com/ryanpcmcquen/simpleJsCopy/bd9240aa9a0fbcdebebdefa6c0ba0185f7a36d51/simpleJsCopy.min.js

Then use the following elements:

1. `<textarea>` or `<input>` with the class `text-to-copy`
2. `<button>` with the class `js-copy-btn`

The library takes cares of the rest. :shipit:

#### So what?! Where does it work?

Almost everywhere!

Current versions (Desktop):

- Chrome
- Firefox
- Internet Explorer

Current versions (Android):

- Chrome
- Firefox


Everywhere else (meaning iOS), it will select the text, and in iOS 9+ that will cause the 'Copy' dialog to pop up (the library detects iDevices and will say `Now click 'Copy'` instead of `Copied!` on iOS).

On desktop Safari, the button will change to `Press Command + C to copy`.
