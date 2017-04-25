## Website Performance Optimization portfolio project

There are 2 parts to this project. The first part uses PageSpeed Insights. The second uses custom metrics.

### Getting started

#### Part 1: Optimize PageSpeed Insights score for index.html

Do ``npm install`` to install all Node.js modules needed.

Do ``grunt`` to run ngrok and grunt-pagespeed.
This will also resize images in ``views/images_src/`` and put needed images into ``views/images/``.

I'm not sure why the numbers here (always 99 in score) is different from that on PageSpeed Insights website.


To measure using PageSpeed Insights website (rather than grunt-pagespeed)...

Open another terminal and do ``python3 -m http.server``. This starts the web server at port 8000.

Open a terminal and do ``ngrok http 8000``. This opens a tunnel to your computer, port 8000.
Copy the URL listed as *Forwarding*.

Go to [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights)
Paste the above URL into the website for analysis.


#### Part 2: Optimize Frames per Second in pizza.html

Enter folder ``views`` and do ``python3 -m http.server`` to start the web server there.

Open a browser to location ``localhost:8000``, scroll and change pizza size.
Metrics will output performance numbers on DevTool console.


### Optimizations

Optimizations are made to ``index.html``, ``views/js/main.js`` and ``views/pizza.html``.

#### ``index.html``

``css/print.css`` is linked with ``media="print"`` so it doesn't get downloaded for screen.

``analytics.js`` is loaded with ``async`` and ``defer`` so it doesn't block rendering.
Analytics doesn't affect the DOM, so ``defer`` is used to get it loaded much later.

``css/style.css`` is inlined so that it doesn't block render.
This CSS file isn't too large, so it doesn't increase the download time for ``index.html`` very much.

Google font is loaded much later, at the end of ``<body>`` element.
This removes the render-blocking CSS load from the top (above-the-fold) of the document.

``pizzeria.jpg`` is replaced with ``pizzeria_small.jpg``.
Only a 100px wide image is needed.


#### ``views/pizza.html``

``pizzeria.jpg`` is replaced with ``pizzeria_medium.jpg``.
Only a 720px by 540px image is needed at the largest.


#### ``views/js/main.js``

``updatePositions()`` now retrieves ``document.body.scrollTop outside of a for-loop.
Forced reflow is removed.
Also, a division math is computed outside the for-loop.

``determineDx()`` is removed.
It calculates the percentage width of an element, something that CSS already does very quickly.
Consequently, a forced reflow is also removed.

Number of sliding pizzas is reduced to just the right number needed by the screen height.
