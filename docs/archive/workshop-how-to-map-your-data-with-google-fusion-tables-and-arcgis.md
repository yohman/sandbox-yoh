---
title: "Workshop: How to map your data with Google Fusion Tables and ArcGIS"
date: "2013-10-23"
categories: 
  - "workshops"
---

This hands on workshop demonstrates how to use Google Fusion Tables and ArcGIS to create stunning presentations of your GIS data.

## What are we doing?

In 2010, wikileaks released a document called the Afghan War Diaries.  According to the Wikileaks website, this is "an extraordinary compendium of over 91,000 reports covering the war in Afghanistan from 2004 to 2010. The reports, while written by soldiers and intelligence officers, and mainly describing lethal military actions involving the United States military, also include intelligence information, reports of meetings with political figures, and related details."

This workshop will explore different methods of spatial visualization of this document, first by seeing how spatial data can be compiled and viewed on an interactive web based interface using Google Fusion Tables, and second, to see how one can enable the temporal dimension of the data and create stunning time-based animations using ArcGIS.

## The Data

- [Afghan War Diary, Wikileaks](https://wikileaks.org/wiki/Afghan_War_Diary,_2004-2010) 
- Cleaned up version for this workshop ([AfgWorkshopVersion](http://gis.yohman.com/wp-content/uploads/2012/02/AfgWorkshopVersion.zip))

## Part 1: Fusion Tables

\*If you do not have a google account, you can peruse the data [here](https://www.google.com/fusiontables/DataSource?snapid=S509701D5LQ)

1. Download [the data](http://gis.yohman.com/wp-content/uploads/2012/02/AfgWorkshopVersion.zip) as a csv file
2. Go to [https://drive.google.com](https://drive.google.com) and login
3. Click on Create, Table (beta)
4. Upload the csv file to fusion tables
5. Map (Visualize -> Map)
6. Symbolize (Configure Styles -> Marker icon -> Columns -> select "icon" from drop down
7. Embed into your class blog (if applicable)

<iframe width="500" height="300" scrolling="no" frameborder="no" src="https://www.google.com/fusiontables/embedviz?viz=MAP&amp;q=select+col4+from+1CRJcx8lzPReSYFEwPxyspZcwZmv12F5nlgicIsw&amp;h=false&amp;lat=31.485780211014898&amp;lng=67.66985893199215&amp;z=6&amp;t=4&amp;l=col4"></iframe>

# Part 2: Get the fusion table ready for ArcMap

1. Now, get the fusion table ready for ArcMap.  First, query/filter out bad data.  Click on Options -> Filter, and add 3 filters:
    1. "Where Longitude > 0"
    2. "Where Latitude > 0"
    3. "Where date >= 1/1/2009" (just get 2009 data to give ArcMap some breathing room)
2. Export as csv for use in ArcMap (File -> Download)

## Part 3:  ArcMap

1. Import the csv file
2. Map the data by XY coordinates (make sure to set the coordinate system to WGS1984)
3. Export (save) the data as a new shapefile (GIS data layer)
4. Play with symbology (categorical mapping by the "cat" field)
5. Add time dimension to your layer: Properties, Time tab, enable, and select Date (not the DateTime) field ([ESRI](http://help.arcgis.com/en/arcgisdesktop/10.0/help/index.html#//005z0000000p000000.htm))
6. Explore the time slider ([ESRI](http://help.arcgis.com/en/arcgisdesktop/10.0/help/index.html#/Using_the_Time_Slider_window/005z0000000z000000/))
7. Play your data over time ([ESRI](http://help.arcgis.com/en/arcgisdesktop/10.0/help/index.html#/Playing_a_time_visualization/005z0000001t000000/))
8. Apply Spatial statistics ([directional distribution](http://help.arcgis.com/en/arcgisdesktop/10.0/help/index.html#//005p00000016000000.htm)) to your temporal data
9. Toolbox -> Spatial Statistics -> Measuring Geographic Distributions -> Directional Distribution
10. For the Case Field, make sure to select Date (not DateTime)
11. Enable time to the new layer created, and play the temporal animation again

https://vimeo.com/36055250
