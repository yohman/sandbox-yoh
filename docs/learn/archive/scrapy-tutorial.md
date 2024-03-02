---
title: "Scrapy Tutorial"
date: "2017-05-09"
categories: 
  - "python"
---

## Install Scrapy

```bash
pip install scrapy
```

## Setting up the project

```bash
scrapy startproject ucla_scraper
```

## Creating the Spider

Run this snippet in the your command line/terminal to create a spider called "ucla\_scraper":

```bash
scrapy genspider ucla_scraper ucla 
```

Next open the file that was created in the "spiders" folder, it should be called "ucla\_scraper.py"

Feel free to copy and paste the following code based off of a datablogger tutorial ([https://www.data-blogger.com/2016/08/18/scraping-a-website-with-python-scrapy/](https://www.data-blogger.com/2016/08/18/scraping-a-website-with-python-scrapy/))

\# -\*- coding: utf-8 -\*-
import scrapy
from scrapy.linkextractor import LinkExtractor
from scrapy.spiders import Rule, CrawlSpider

class ScraperItem(scrapy.Item):
    # The source URL
    url\_from = scrapy.Field()
    # The destination URL
    url\_to = scrapy.Field()

class UclaScraperSpider(CrawlSpider):
    name = "ucla\_scraper"
    allowed\_domains = \["ucla.edu"\]
    start\_urls = \['http://www.ucla.edu/students/current-students'\]
    custom\_settings = {
        'DEPTH\_LIMIT': '2'}

    # This spider has one rule: extract all (unique and canonicalized) links, follow them and parse them using the parse\_items method
    rules = \[
        Rule(
            LinkExtractor(
                canonicalize=True,
                unique=True
            ),
            follow=True,
            callback="parse\_items"
        )
    \]

    # Method which starts the requests by visiting all URLs specified in start\_urls
    def start\_requests(self):
        for url in self.start\_urls:
            yield scrapy.Request(url, callback=self.parse, dont\_filter=True)

    # Method for parsing items
    def parse\_items(self, response):
        # The list of items that are found on the particular page
        items = \[\]
        # Only extract canonicalized and unique links (with respect to the current page)
        links = LinkExtractor(canonicalize=True, unique=True).extract\_links(response)
        # Now go through all the found links
        for link in links:
            # Check whether the domain of the URL of the link is allowed; so whether it is in one of the allowed domains
            is\_allowed = False
            for allowed\_domain in self.allowed\_domains:
                if allowed\_domain in link.url:
                    is\_allowed = True
            # If it is allowed, create a new item and add it to the list of found items
            if is\_allowed:
                item = ScraperItem()
                item\['url\_from'\] = response.url
                item\['url\_to'\] = link.url
                items.append(item)
        # Return all the found items
        return items

## Execute the Spider!

Run the spider from the command line in the parent directory of the spiders folder as follows:

```bash
scrapy crawl ucla_scraper -o links.csv -t csv
```

Done!
