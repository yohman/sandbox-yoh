---
title: "Mapping Open Data"
date: "2018-04-27"
categories: 
  - "workshops"
---

The open data movement has made more and more data available for academics to download and use for their research. But how can we map this data? This workshop will take you through the process of acquiring data from the [Los Angeles Open Data portal](https://data.lacity.org/) and visualizing it on ArcGIS for further analysis.

### The Los Angeles Open Data Portal

[https://data.lacity.org/](https://data.lacity.org/)

![](images/open-data-search-1-e1524853436494.png)

Inspect the data

![](images/open-data-crime-data-e1524853710964.png)

Almost 2 million records! Let's filter it down to something more manageable.

![](images/open-data-vizualize-e1524861110176.png)

Now add the filter:

![](images/open-data-filter-e1524861049921.png)

Export the data

![](images/open-data-export-csv-e1524861203772.png)

### Cleaning up those coordinates

Open the downloaded data in Excel. Scroll to the right until you see the Location column.

![](images/open-data-location-column-e1524865676923.png)

Hmm, that's strange, the latitude and longitude columns are in the same column! ArcGIS does not like this. Let's clean this up.

First, find and replace the brackets.

1. Select the Location column
2. Bring up the find and replace tool (ctrl-h)
3. For "Find what", enter an open bracket "("
4. Click Replace All

![](images/open-data-replace-brackets-e1524869310445.png)

Repeat for the closing bracket.

Split the column into two:

![](images/open-data-text-to-columns-e1524869544554.png)

Choose, delimited, check the "Comma" box, and finish.

![](images/open-data-text-to-columns2-e1524869659658.png)

Rename the column headers to Latitude and Longitude

![](images/open-data-lat-lon-e1524869765545.png)

### Let's map it!

Add the csv file to a new ArcMap project. Right click, Display XY Data...

![](images/open-data-display-xy-e1524870101534.png)

1. Set X to Longitude
2. Set Y to Latitude
3. Click Edit for the coordinate system
4. Enter "WGS 1984" in the search box
5. Choose WGS 1984

![](images/open-data-set-coordinate-system-e1524870277327.png)

Now save your new layer as a shapefile, or geodatabase:

![](images/open-data-export-data-e1525276046743.png)

![](images/open-data-export-into-geodatabase-e1525276199611.png)

### Project the data

Our data is currently in a geographic coordinate system (WGS1984). Let's change this to a projected coordinate system (UTM Zone 11N).

Click on the search tool

![](images/search-tool-e1525277972537.png)

Type "project" and click on **Project (Data Management)**

![](images/project-to-utm-e1525278207598.png)

Now, set the projection of the data frame. Right click on **Layers**, and go to **properties**. Then, set the coordinate system to **NAD 1983 UTM Zone 11N**

![](images/open-data-set-utm-zone-1-e1525277078543.png)

### Hot spots?

Let's find crime hot spots by race. Select incidents where the person arrested was classified as Hispanic (H). In the menu bar, go to **Selection**, **Select by attribute.** Enter the following SQL statement:

Victim\_Decent = 'H'

![](images/crime-by-race-1-e1525280021439.png)

Now perform a kernel density to visualize the density of Hispanic arrests in Los Angeles. In the search box, enter "kernel" and click on the Kernel Density (Spatial Analyst) tool. Enter the four boxes as shown below:

![](images/hispanic-kernel-e1525280163943.png)

Add a basemap, and change the symbology to make the visual more powerful:

![](images/kernel-crime-map-e1525280341147.png)

Repeat the process for other race categories:

<table><tbody><tr><td>Black <img class="alignnone size-full wp-image-3313" src="images/kernel-black-e1525280897233.png" alt="" width="991" height="731"></td><td>White<img class="alignnone size-full wp-image-3314" src="images/kernel-white-e1525281024184.png" alt="" width="991" height="731"></td><td>Hispanic<img class="alignnone size-full wp-image-3312" src="images/kernel-hispanic-e1525280752322.png" alt="" width="991" height="731"></td></tr></tbody></table>

 

### Data in this tutorial

- [LAPD Crime Data 2010 (csv)](http://gis.ucla.edu/geodata/dataset/lapd-crime-data-2010)
