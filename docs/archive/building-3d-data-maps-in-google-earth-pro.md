---
title: "Building 3D data maps in Google Earth (PRO)"
date: "2013-10-23"
categories: 
  - "tutorials"
---

\[caption id="attachment\_1222" align="aligncenter" width="500"\][![Southern California, Florida and parts of Texas show a dominant number of Hispanics](images/ge31-500x347.jpg "Southern California, Florida and parts of Texas show a dominant number of Hispanics")](http://gis.yohman.com/wp-content/uploads/2013/03/ge31.jpg) Southern California, Florida and parts of Texas show a dominant number of Hispanics\[/caption\]

The traditional [choropleth](http://en.wikipedia.org/wiki/Choropleth_map) maps have now become ubiquitous, and at times not as revealing, as other forms of visualizations may tell a more compelling story from the data provided.  This tutorial takes you through the steps of importing a US County shapefile into Google Earth (pro), and extruding the counties based on a given attribute.

**Step 1:  Prepare your shapefile**

1. Download the [US County shapefile](http://gis.ats.ucla.edu/data/counties.zip) and extract it onto a local folder
2. Launch Google Earth
3. Go to **File**, **Import**...
4. Navigate to the folder of the extracted county shapefile and **make sure to select ESRI Shape (\*.shp) from the drop down menu** next to the file name
5. select the **counties.shp** file, and click "**Open**"
6. Click "**Import All**" for the Data Import warning popup
7. Click "**Yes**" to apply a template
8. Notice the 4 tabs: **Name**, **Color**, **Icon**, **Height**.  Click on **Name**, and set the name field to "NAME"
9. Select the **Color** tab
10. Select "set color from field"
11. Select color field "HISPANIC"
12. Select a **start** and **end** color of you choice (I recommend a [diverging color scheme](http://mapbox.com/tilemill/docs/guides/tips-for-color/) to contrast the lows vs the highs)
13. Set the Number of buckets to **6**
14. Change the bucket values to ******100, 1000, 10000, 100000, 500000********[![](images/ge4.png "ge4")](http://gis.yohman.com/wp-content/uploads/2013/03/ge4.png)**
15. Select the **Height** tab
16. Select **Set height from field**
17. Select height filed **HISPANIC**
18. Mapping method: **Continuous**
19. Scaling factor: **about 0.5 [![](images/ge5.png "ge5")](http://gis.yohman.com/wp-content/uploads/2013/03/ge5.png)**  
20. Click OK and turn on the layer

\[[Final KML File](http://gis.yohman.com/wp-content/uploads/2013/03/counties_hispanics.kmz)\]
