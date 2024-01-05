---
title: "Web Scrapin' Focus on Python"
date: "2017-05-10"
categories: 
  - "workshops"
---

### Join us here: [https://sandbox.idre.ucla.edu/sandbox/web-scrapin-focus-on-python](https://sandbox.idre.ucla.edu/sandbox/web-scrapin-focus-on-python)

# Workshop Outline

1. Introduction: To scrape or not to scrape
    1. \[expand title="Sometimes it's better never to have scraped at all"\]
        - Try asking first!
        - File->Save Page As... is your friend.
        - Consider using a GUI scraping app instead (many require subscriptions, though): Import.io, Portia, Diffbot, Extracty. Good list [here](https://www.quora.com/Who-are-the-competitors-to-import-io).\[/expand\]
    2. \[expand title="Don't pay a great deal too dear for what's given freely"\]
        - Does the site have an API? An RSS feed?
            - JSON and XML are much easier to parse than hand-coded or auto-generated HTML.
            - Python (as well as R and other languages) has many modules that are custom-built to scrape specific web sources.
        - Look for bulk data access options (like [this](https://arxiv.org/help/bulk_data)), or even just a big "Download" button.\[/expand\]
2. The scrape's afoot: tips and tricks
    1. \[expand title="Best practices"\]
        - Find the right HTML elements to target: get used to right-clicking to "inspect element" or using the "View Page Source" menu option (a good [target](https://report.boonecountymo.org/mrcjava/servlet/SH01_MP.I00290s))
        - Consider scholarly open-data requirements: if you can't publish your results because sharing the scraped data would violate copyright or privacy, that's a lot of wasted effort.
        - Play nice: when looping, limit requests to a few per minute, or the site may do this for you (and/or block you entirely)
        - [stackoverflow.com](http://stackoverflow.com) usually has an answer \[/expand\]
    2. \[expand title="Scrapable vs. unscrapable sites (and what you can do with the former)"\]
        - Built to facilitate &, even encourage machine access:
            - [http://mcd.iosphe.re/](http://mcd.iosphe.re/) -- Manga Covers Database (has an [API](http://mcd.iosphe.re/api/v1/series/90/)): after scraping, can make [this](http://babylon.library.ucla.edu/~broadwell/manga/zoomified/)
        - Tabular formats good, but sometimes there's a download option
            - [https://data.lacounty.gov/browse?category=Health&utf8=%E2%9C%93](https://data.lacounty.gov/browse?category=Health&utf8=%E2%9C%93) -
            - Also the [example](https://report.boonecountymo.org/mrcjava/servlet/SH01_MP.I00290s) from [this tutorial](https://first-web-scraper.readthedocs.io/en/latest/)
        - Actively discourage scraping:
            - [http://ctext.org/](http://ctext.org/) -- will block your IP address indefinitely if you read too quickly \[/expand\]
3. [Installing Python](https://www.python.org/)
    1. Consider all-in one packages like [Anaconda](https://conda.io/miniconda.html), plus lightweight development environments like [Jupyter Notebook](http://jupyter.readthedocs.io/en/latest/install.html)
    2. Installing PIP
4. [Not so scary up close: Python Basics](https://sandbox.idre.ucla.edu/sandbox/not-so-scary-up-close-python-basics)
    1. \[expand title="Code-and-tell"\]
        1. [Twitter Scraper](https://sandbox.idre.ucla.edu/sandbox/basic-web-scrapin-101)
        2. Articles [search data](https://sandbox.idre.ucla.edu/sandbox/uncategorized/web-scraping-example-scrape-article-search-pages-iteratively) and [contents](https://sandbox.idre.ucla.edu/sandbox/tools/python/web-scraping-get-article-metadata-and-download-pdf) scraper\[/expand\]

- Time Permitting: Advanced Python
    - Python Cookbook Recipes UCLA
        - [Pete’s Recipes](https://sandbox.idre.ucla.edu/sandbox/uncategorized/petes-python-cookbook)
        - [Albert’s Recipes](https://sandbox.idre.ucla.edu/sandbox/alberts-python-cookbook)
    - Free workshop time
