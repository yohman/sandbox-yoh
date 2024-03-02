---
title: "Digital Mapping - Part 1b: Social Explorer and ArcGIS"
date: "2015-04-10"
categories: 
  - "workshops"
---

This part of the first Desktop Mapping series will cover Social Explorer and ArcGIS as tools to process and generate digital maps.

# Social Explorer:

### [http://www.socialexplorer.com](http://www.socialexplorer.com)

Social Explorer is an online GIS tool that allows you to interrogate data from the U.S. Census from the very first census to the most recent. While this portion of the workshop will assume some interest in using Social Explorer, like all other platforms, there are benefits and drawbacks for selecting this particular application.

### Is Social Explorer right for me?

#### Do use Social Explorer if you…

- Have access to the internet
- Plan to use only U.S. census data
- Focus on the “story” of a map rather than a fully customized map
- Would like to use graphs from other data sources
- Want to share online maps

#### Do NOT use Social Explorer if you…

- Intend to use geographic data not a part of the U.S. census database
- Want to show data beyond:

- State
- County
- Census Tract
- Census Block Group

- Want to customize your own data symbolization
- Want your maps put into GoogleEarth, ArcGIS, or other desktop-based GIS solutions

#### Percentage below U.S. Poverty Line mapping: Data Layers

[![poverty2010_acs](images/poverty2010_acs.png)](http://www.socialexplorer.com/69d085f68e/explore)

[![dotDensity](images/dotDensity-1024x260.png)](http://www.socialexplorer.com/12df69da74/view)

[![graduatedCylinder](images/graduatedCylinder.png)](http://www.socialexplorer.com/dfbb9c804e/explore)

#### Making Visually Appealing Maps: Symbology

[![badColor_0_6groups](images/badColor_0_6groups.png)](http://www.socialexplorer.com/9db4837e78/view)

[![BadColor_2](images/BadColor_2.png)](http://www.socialexplorer.com/8927fe8dbb/view)

[![bad_cutoffpoints](images/bad_cutoffpoints.png)](http://www.socialexplorer.com/6ddecccb56/view)

[![goodColor_f1](images/goodColor_f1.png)](http://www.socialexplorer.com/02152ded7f/view)

#### Exporting data out of Social Explorer: Using Reports

[![se_DataTable](images/se_DataTable.png)](http://www.socialexplorer.com/tables/ACS2013_5yr/R10930921)

#### Fancy use of Social Explorer: Comparing, swiping, and stories

[![comparisonMap](images/comparisonMap.png)](http://www.socialexplorer.com/d6d7183365/view)

[![Poverty_Story_SocialExplorer](images/Poverty_Story_SocialExplorer.png)](http://www.socialexplorer.com/0a440cebff/view)

# An EASY way to GIS? More like an [![New-esri-logo](images/New-esri-logo.gif)](http://www.esri.com/) way to GIS: ArcGIS

The first step is to understand that we are covering the basics of desktop GIS analysis using ESRI's ArcGIS software suite. This is by no means an all encompassing "this is GIS" demo, but rather a view on how GIS is used to build maps from ESRI's perspective, limited by the functionalities of the software provided.

Generally speaking, the ESRI ArcGIS suite consists of 3 parts:

1. ArcCatalog
2. ArcMap
3. 3D GIS (ArcGlobe/ArcScene)

[![icons](images/icons.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2014/09/icons.png)

For the workshop, we will use only ArcCatalog and the ArcMap to demo the top 10 most used functions of GIS. Strap yourselves in and pay attention because there's bound to be some confusion when we are visiting the wondrous land of ESRI.

\[TBS\_ALERT color="info" heading="A note about OpenSource Alternatives"\]

[QGIS](http://www.qgis.org/en/site/) is as an alternative to ArcGIS that is free and openly available to the public on all computing platforms. Despite the accessibility of QGIS, there is a steeper learning curve for those learning GIS for the first time. However, those seeking a free low-cost alternative to ArcGIS can apply the concepts learned in this workshop with that program.

For those interested in seeing the comparison between QGIS and ArcGIS you can check out this external article here: [http://www.xyht.com/spatial-itgis/qgis-v-arcgis/](http://www.xyht.com/spatial-itgis/qgis-v-arcgis/)

\[/TBS\_ALERT\]

 

1\. Attribute data

![ArcGIS_data_Table](images/ArcGIS_data_Table.png)

2\. Editing data

![ArcMap_editor_good](images/ArcMap_editor_good.png)

3\. Joining data

![ArcGIS_joining](images/ArcGIS_joining.png)

4\. Geocoding \[[Address Locator download](http://sandbox.idre.ucla.edu/workshops/DigitalMappingWorkshop2015/AddressLocator.zip) (2.1gb)\]

![ArcGIS_geoCode](images/ArcGIS_geoCode.png)

5\. Buffer Analysis

![ArcGIS_buffer](images/ArcGIS_buffer.png)

6\. Clip

![ArcGIS_clip](images/ArcGIS_clip.png)

7\. Merge data sets

![ArcGIS_merge](images/ArcGIS_merge.png)

8\. Network Analysis - Service Areas \[[Network Dataset Download](http://sandbox.idre.ucla.edu/workshops/DigitalMappingWorkshop2015/StreetData.zip)\] (2.38 gb)\]

![ArcGIS_serviceMap](images/ArcGIS_serviceMap.png)

9\. Network Analysis - Routing

![network_analysis_tut](images/network_analysis_tut-1024x216.png)

10\. Spatial Statistics

\[iframe src="https://www.google.com/fusiontables/embedviz?q=select+col4+from+1fQpEM0xAbUC4NtQZim11lZgJqHofnei5Lz9m94w&viz=MAP&h=false&lat=33.163621188510625&lng=66.52446556249991&t=1&z=7&l=col4&y=1&tmplt=1&hml=TWO\_COL\_LAT\_LNG" height="150"\]

 

\[[Tutorial Data for 1 - 9](http://sandbox.idre.ucla.edu/workshops/DigitalMappingWorkshop2015/Part1.zip)\]

\[[Spatial Statistics Tutorial (10) and Data](http://sandbox.idre.ucla.edu/?page_id=211 "Workshop: How to map your data with Google Fusion Tables and ArcGIS")\]

\[[Address Locator](http://sandbox.idre.ucla.edu/workshops/DigitalMappingWorkshop2015/AddressLocator.zip)\] (2.24 gb)

\[[North America Street Network + Los Angeles Street Data](http://sandbox.idre.ucla.edu/workshops/DigitalMappingWorkshop2015/StreetData.zip)\] (2.38gb)
