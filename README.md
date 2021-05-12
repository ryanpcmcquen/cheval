# Cheval :clipboard:

[![Downloads](https://img.shields.io/badge/jsDelivr-100k%2B%20downloads-green.svg?style=rounded)](https://www.jsdelivr.com/package/gh/ryanpcmcquen/cheval)
[![GitHub license](https://img.shields.io/github/license/ryanpcmcquen/cheval.svg)](https://github.com/ryanpcmcquen/cheval/blob/gh-pages/LICENSE)

<img alt="Cheval glass" width="250" src="https://usercontent.irccloud-cdn.com/file/3kF3sGJE/Jekyll.and.Hyde.Ch10.Drawing2.jpg">

Just include the library (~2kB!):

    <script src="https://cdn.jsdelivr.net/gh/ryanpcmcquen/cheval@latest/cheval.min.js"></script>

https://cdn.jsdelivr.net/gh/ryanpcmcquen/cheval@latest/cheval.min.js

Provided by:

[![jsDelivr](https://usercontent.irccloud-cdn.com/file/VDPwfxpi/jsDelivr_logo.png)](https://www.jsdelivr.com/)

Then use the following elements:

1. `<textarea>` with the class `text-to-copy` (can be `readonly` but _not_ `disabled`)
2. `<button>` with the class `js-copy-btn`

The library takes cares of the rest. :shipit:

:newspaper: You don't have to write any JavaScript to use it!

Alternatively, you can use the project with npm:

```
npm install cheval
```

---

#### Featured in MarkApp!

[![MarkApp](https://usercontent.irccloud-cdn.com/file/X2uIqOZA/Screen%20Shot%202017-10-17%20at%208.23.37%20AM.png)](http://markapp.io)

---

#### So what?! Where does it work?

Almost everywhere!

Desktop:

-   Chrome/Chromium 42+
-   Firefox 41+
-   Internet Explorer 9+
-   Opera 29+
-   Safari 10+

Android:

-   Chrome 42+
-   Firefox 41+

iOS:

-   10+

##### What about other browsers?

Everywhere else (old versions of Safari), it will select the text. The library detects iDevices and will change the inital button text to `Select text` (to avoid confusing the user). After clicking it will say either `Now tap 'Copy'` (iPhone) or `Now tap the text, then 'Copy'` (iPad), to account for the strange behavioral differences of these devices.

On desktop Safari (< v10), the button will change to `Press Command + C to copy`.

On failure the button will say `Please copy manually`.

---

:warning: If you want your textarea to be invisible for some reason, use this CSS:

```css
.text-to-copy {
    opacity: 0;
    position: absolute;
}
```

Because it will not work with `display: none;` or `visibility: hidden;`. :thumbsup:

Note that you should also supplement that CSS with something like this helper library, otherwise people on iOS will not be able to copy at all since Safari doesn't support cool stuff:

https://gist.github.com/ryanpcmcquen/1229119ffcf5098543c0

#### What else is cool?

If you aren't concerned with maximum compatibility, you can use elements besides a `textarea`.

You may also add multiple copy elements and buttons to each page, using the following format:

```html
<textarea class="text-to-copy-0"></textarea>
<button class="js-copy-btn-0"></button>

<textarea class="text-to-copy-1"></textarea>
<button class="js-copy-btn-1"></button>

<textarea class="text-to-copy-2"></textarea>
<button class="js-copy-btn-2"></button>

<textarea class="text-to-copy-3"></textarea>
<button class="js-copy-btn-3"></button>
```

The characters after the dash in `text-to-copy-` or `js-copy-btn-` can be anything, they just have to match between the button and element.

For example:

```html
<textarea class="text-to-copy-email"></textarea>
<button class="js-copy-btn-email"></button>
```

Positioning of the elements and buttons does not matter, they do not need to be near each other on the page. This allows you to write declarative markup and not be concerned with the inner workings of this library. Enjoy!

---

#### But ...

###### I want to dynamically add elements to my page, `cheval` only runs on page load!

You're right! That's why in version `1.3.0`, `cheval` also adds itself to global scope.

Now you can invoke at will on dynamic elements!

```js
cheval('.dynamic-js-copy-btn', '.dynamic-text-to-copy');
```

---

What does `cheval` mean?

The name comes from Cheval glass, a type of mirror.

---

This project is LibreJS compliant!

[![LibreJS](https://www.gnu.org/software/librejs/images/logo-medium.png)](https://www.gnu.org/software/librejs/)

---

If you prefer using specific tags instead of the latest version, you may specify a tag in the `jsDelivr` URL:

https://cdn.jsdelivr.net/gh/ryanpcmcquen/cheval@2.0.0/cheval.min.js

---

### Contributing:

If you wish to contribute to this project, pull requests are always welcome! Please make sure that any changes pass through [![http://jslint.com/](http://jslint.com/image/jslintpill.gif)](http://jslint.com/) with the following options before submitting them:

```js
/*global module, window*/
/*jslint browser: true*/
```

---

Thanks to [Lea Verou](https://github.com/LeaVerou) for lots of support and help with the name.

Thanks to Nikita Tcherednikov for the Cheval icon, provided under the [Creative Commons license](https://creativecommons.org/licenses/by/3.0/us/).

Thanks to Charles Raymond Macauley for the drawing available [here](https://commons.wikimedia.org/wiki/File:Jekyll.and.Hyde.Ch10.Drawing2.jpg). (Public domain)

Thanks to BrowserStack and Koding!

[![https://browserstack.com](https://usercontent.irccloud-cdn.com/file/1egf6j3q/BrowserStack_logo.png)](https://browserstack.com)

<a href="https://koding.com/">
    <img
         src="https://koding-cdn.s3.amazonaws.com/badges/made-with-koding/v1/koding_badge_RectangleColor.png"
         srcset="https://koding-cdn.s3.amazonaws.com/badges/made-with-koding/v1/koding_badge_RectangleColor.png 1x, https://koding-cdn.s3.amazonaws.com/badges/made-with-koding/v1/koding_badge_RectangleColor@2x.png 2x"
         alt="Made with Koding"/>
</a>

---

Full download stats available here:

https://data.jsdelivr.com/v1/package/gh/ryanpcmcquen/cheval/stats?from=2014-01-01
