---
title: "A GIS Intro: Building an elections results map"
date: "2013-10-23"
---

[![](images/prez-500x386.png "prez")](http://gis.yohman.com/wp-content/uploads/2012/11/prez.png)

Every four years in the United States, we are made to go through one of the most exciting, political theaters in the world: the US Presidential Elections.  At every twist and turn of the build up towards the eventual outcome, there is one mode of communication that links everybody, whether they are in blue states or red states, and that is that we all communicate and are transfixed by the real-time, digital maps of the evolving results.

The following tutorial is an introduction to the basic concepts of GIS, using this exciting medium, the election data, as a basis of teaching about spatial data, joining data to the relevant geographic scales, and styling the maps to create compelling election maps, just like the ones we have all seen on CNN and other major news outlets.

# Step 1:  The Data

This tutorial presumes that the election data has been compiled for you in a nicely formatted Excel table (keep in mind that data is rarely "handed over" in such a user friendly format!).

- [prez\_data](http://gis.yohman.com/wp-content/uploads/2012/11/prez_data1.zip)

Download the data link above, and unzip in your local drive.  You should see the following files:

- 2012PrezData.xls
- counties.cst
- counties.dbf
- counties.prj
- counties.shp
- counties.shp.xml
- counties.shx
- states.cst
- states.dbf
- states.prj
- states.shp
- states.shp.xml
- states.shx

Open the  2012PrezData.xls file, and inspect its contents.  What data fields are there?  How do you propose to use this data on a map?  Close excel, and launch ArcMap.

# Step 2: ArcMap

1. Open ArcMap, and accept a "blank" project
2. Go to **File**, **Add Data**, **Add Data**
3. Navigate to the 2012PrezData.xls file that you downloaded, and double click on it. Select "**Sheet1$prez**" and click on "**Add**"
4. Right click on **Sheet1$prez** from the table of content, and "**Open**"
5. Inspect the table, and ensure that the content has an "ObamaMargin" and "FIPS" column [![](images/Screen-Shot-2012-11-19-at-9.16.12-AM-500x257.png "Screen Shot 2012-11-19 at 9.16.12 AM")](http://gis.yohman.com/wp-content/uploads/2012/11/Screen-Shot-2012-11-19-at-9.16.12-AM.png)
6. Go to **File**, **Add Data**, **Add Data** again
7. Navigate to the root folder of the downloaded data, and add "**counties.shp**".  You map canvas should now show a map of US Counties.

# Step 3: Joining data

You have now loaded tabular data (election results), and a county geographic layer to your project.  However, these two datasets are not "linked", or "joined" yet, which means that they do not relate to each other in any way.  In order to allow the election data to be mapped, it will have to be joined to the county later.

1. Right click on the "**counties**" layer from the table of contents
2. Go to **Joins and relates**, **Join...**
3. In the popup window,
    1. select "**Join attributes from a table**" for "What do you want to join to this table"
    2. select "**FIPS**" for step 1
    3. select "**Sheet1$prez**" for step 2
    4. select "**FIPS**" for step 3 [![](images/Screen-Shot-2012-11-19-at-12.13.42-AM-331x500.png "Screen Shot 2012-11-19 at 12.13.42 AM")](http://gis.yohman.com/wp-content/uploads/2012/11/Screen-Shot-2012-11-19-at-12.13.42-AM.png)
4. Click "**OK**"
5. Right click on "**counties**" and "**Open Attribute Table**"
6. Inspect the table, scroll to the right, and make sure that you see the "**ObamaMargin**" column

# Step 4: Make a pretty map

1. Right click on "**counties**" and go to "**properties**"
2. Select the "**Symbology**" tab
3. Highlight "**Quantities**", "**Graduated Colors**"
4. For "**Value**", select "**ObamaMargin**"
5. For Color Ramp, choose this one: [![](images/Screen-Shot-2012-11-19-at-12.26.19-AM-500x71.png "Screen Shot 2012-11-19 at 12.26.19 AM")](http://gis.yohman.com/wp-content/uploads/2012/11/Screen-Shot-2012-11-19-at-12.26.19-AM.png)
6. For **Classification**, choose **6** classes, and click the "**Classify**" button
7. Modify the numbers under "**Break Values**" with the following:
    1. \-100000
    2. \-20000
    3. 0
    4. 20000
    5. 100000 [![](images/Screen-Shot-2012-11-19-at-12.29.08-AM-500x402.png "Screen Shot 2012-11-19 at 12.29.08 AM")](http://gis.yohman.com/wp-content/uploads/2012/11/Screen-Shot-2012-11-19-at-12.29.08-AM.png)
8. Click "**OK**"
9. We want to switch the colors (Obama is blue after all).  Left click on the header above the color patches "**Symbol**", and "**Flip Symbols**"
10. Let's also make the county outlines white, instead of black.  Left click on the header again, and select "**Properties for all symbols...**"
11. Change the "**Outline color**" to white
12. Click "**OK**" twice

# Step 5: Final touch up

1. Let's change the projection to a US friendly one.  Right click on "**Layers**" from the table of contents, and go to **Properties**
2. Select the "**Coordinate Systems**" tab
3. Expand "**Projected Coordinate Systems**", "**Continental**", "**North America**" and select "**US National Atlas Equal Area**" [![](images/Screen-Shot-2012-11-19-at-12.39.11-AM-421x500.png "Screen Shot 2012-11-19 at 12.39.11 AM")](http://gis.yohman.com/wp-content/uploads/2012/11/Screen-Shot-2012-11-19-at-12.39.11-AM.png)
4. Finally let's add the State layer.  Go to **File**, **Add data**, **Add data**, and add "**states.shp**"
5. Right click on **states**, and go to **Properties**.  Select the **Symbology** tab, and click on the symbol patch (the big colored rectangle)
6. For "**Fill color**", choose "**No color**"
7. Click **Ok** twice

Inspect the map.  What does it tell you?  Is it revealing?  Is it misleading?  Most importantly... does it communicate its intent effectively?  Show it around, and discuss with your fiends and colleagues!
