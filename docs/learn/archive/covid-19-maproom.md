---
title: "COVID-19 Maproom"
date: "2020-03-13"
categories: 
  - "projects"
---

![covid19 sandbox maproom](images/image-8-1024x446.png)

[https://sandbox.idre.ucla.edu/covid19/](https://sandbox.idre.ucla.edu/covid19/)

To better understand and visualize the global and local spread of the COVID-19 epidemic, a group of researchers at the [UCLA Institute for Digital Research and Education](https://idre.ucla.edu/) have developed a map-based data dashboard that provides an interactive timeline from January 22 to present day.

### Where does the data come from?

This project is powered by two external sources of data. The global view draws from a [data repository operated by the Johns Hopkins University Center for Systems Science and Engineering](https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data) and is updated automatically as the repository is updated. The California and Los Angeles County views draw [data from the Los Angeles Times’ Tracking coronavirus in California page](https://www.latimes.com/projects/california-coronavirus-cases-tracking-outbreak/) and are updated as time permits (usually daily).

This visualization is being offered “as-is” given its time-sensitive purpose. There is no attempt to independently verify the validity of the data sources it depends upon and it is not running in a production environment that is intended to handle wide access and use. However, the visualization is being offered under a [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) license in the spirit of global collaboration and the hope that others may build on this work and help to add to the world’s understanding of COVID-19.

### How do you use this site?

The main feature of [this visualization](https://sandbox.idre.ucla.edu/covid19) is the ability to "scrub" through time. When you first load the page, watch as the animation depicts the spread of the virus starting from January 22, 2020, to present day (at the time of this writing, 3/24/20). From its origin in China, one can witness the spatial growth of the epidemic. Within 60 days, it has reached almost all corners of our planet. Once the animation is done, you can use your left ← and right → arrow keys to navigate back and forth in one day increments. You can also drag the red circle and slide it across the time line, or click on an area on the red line to jump to a specific day.

![time bar closeup](images/image-16-1024x435.png)

The ranking table on the bottom right allows you to see the rankings for that particular day on the timebar. As you "scrub" the timeline, the ranking will update in real time:

![ranking table](images/image-2-e1585087383364.png)

Hover over a row on the rankings table, or hover over a circle on the map to see a line chart of the location's data over time.

![change over time](images/image-3.png)

The three buttons on the top left corner allow you to change the scale of the map. The three scales available are "Global," "California," and "Los Angeles."

![Global, California, Los Angeles buttons](images/image-17.png)

Global:

![global map](images/image-12-1024x458.png)

California:

![California map](images/image-13-1024x458.png)

Los Angeles:

![LA map](images/la-1024x458.jpg)

And finally, the three buttons at the bottom right allow you to switch the data from "confirmed cases," "deaths," and "recovered."

![buttons for confirmed, deaths, and recovered](images/image-14.png)

Below is the world map for recorded deaths as of 3/24/2020:

![world map of deaths](images/image-15-1024x459.png)

### What can you tell from the visualization?

One of the goals to address this epidemic is to "flatten the curve." According to the CDC, the flattening of the curve refers to our collective effort to not overwhelm our health care system capacity. This, we do by measures we have now become accustomed to: washing our hands, social distancing, and avoiding crowds. By limiting the spread, we allow our health care system to treat the most needy, while also biding valuable time to develop vaccines needed to cure those who are and become infected.

The map informs this curve in several ways. Circle sizes on the map represent the total number of confirmed cases, deaths, or recovered by location, usually a country or a region. Because of the big outliers (specifically China and Italy), the map uses a logarithmic curve, meaning that circles with high values beyond a certain number remain roughly the same size. That is why the circle sizes for Italy, France, and Spain are similar, despite their wide range in actual numbers:

![circle sizes](images/image-4-1024x593.png)

Circle colors are represented by growth rate, calculated as a percent change from the previous day. If the growth is greater than 50％ from the day before, it is represented by a red circle; no change is represented by a semi-transparent white circle.

![red circle](images/image-19.png)

![white circle](images/image-20.png)

That is why we see a cluster of large but relatively white circles in East Asia, indicative or a region from where the peak has passed and/or the virus has been contained. In contrast, a cluster of white and red circles are predominant in Europe and Africa, where the virus is present and still spreading:

![red vs white circles](images/image-5.png)

This is also evident in the line charts produced for each country. Below, one can see how South Korea's line curve has "flattened," whereas the USA curve is still rising:

![South Korea's curve](images/image-6.png)

![USA curve](images/image-9.png)

When the red circles on the map disappear, it will mark the day that there are no longer any new cases.

### How was the site built?

This maproom was created using the following javascript libraries:

- [leafletjs](https://leafletjs.com/) for mapping
- [jquery](https://jquery.com/) for javascript boosting
- [bootstrap](https://getbootstrap.com/) for styling
- [papaparse](https://www.papaparse.com/) for csv parsing
- [chartist](https://gionkunz.github.io/chartist-js/) for responsive charts
- [Ion.RangeSlider](http://ionden.com/a/plugins/ion.rangeSlider/) for the time slider

You can find the code repository at this [github page](https://github.com/IDREsandbox/covid19).
