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


### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
