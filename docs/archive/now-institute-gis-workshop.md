---
title: "Now Institute GIS Workshop"
date: "2015-03-18"
categories: 
  - "workshops"
---

#### Welcome to the Now Institute GIS Workshop! Please navigate to this page using the URL below:

#### [http://sandbox.idre.ucla.edu/?p=1248](http://sandbox.idre.ucla.edu/?p=1248)

# Other Links

Workshop Demo Files: [http://sandbox.idre.ucla.edu/Workshops/workshop.zip](http://sandbox.idre.ucla.edu/Workshops/workshop.zip)

ESRI's Self-learning Tutorials: [http://www.esri.com/training/main/training-catalog/course-recommendations](http://www.esri.com/training/main/training-catalog/course-recommendations)

Social Explorer: [http://www.socialexplorer.com/](http://www.socialexplorer.com/)

# Outline:

1. Introduction to GIS and ESRI
2. Background: Geographical information in the U.S.
3. Hello Map: Thematic Mapping and the basics
    1. Layers
    2. Attributes
    3. Symbolization
    4. Labeling
    5. Choropleth
4. Data, data, data!
    1. Acquiring data
    2. Editing data
    3. Joining data
5. Geoprocessing: Conducting spatial analysis
    1. Buffers
    2. Joins/Intersects
    3. Geocoding
6. Exporting a map

Part I: Introduction to GIS

The ESRI way of GIS

The first step in this tutorial is to understand that we are covering the basics of desktop GIS analysis using ESRI's ArcGIS software suite. This is by no means an all encompassing "this is GIS" tutorial, but rather a view on how GIS is used to build maps from ESRI's perspective, limited by the functionalities of the software provided.

Generally speaking, the ESRI ArcGIS suite consists of 3 parts:

1. ArcCatalog
2. ArcMap
3. 3D GIS (ArcGlobe/ArcScene)

[![icons](images/icons.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2014/09/icons.png)

For the workshop, we will focus mainly on ArcCatalog and the ArcMap applications, understanding what each does, and how they work collectively.

\[TBS\_ALERT color="info" heading="A note about OpenSource Alternatives"\]

[QGIS](http://www.qgis.org/en/site/) is as an alternative to ArcGIS that is free and openly available to the public on all computing platforms. Despite the accessibility of QGIS, there is a steeper learning curve for those learning GIS for the first time. However, those seeking a free low-cost alternative to ArcGIS can apply the concepts learned in this workshop with that program.

For those interested in seeing the comparison between QGIS and ArcGIS you can check out this external article here: [http://www.xyht.com/spatial-itgis/qgis-v-arcgis/](http://www.xyht.com/spatial-itgis/qgis-v-arcgis/)

\[/TBS\_ALERT\]

## Background: Geographical information in the U.S.A.

Demographic information in the USA is typically arranged in a hierarchical geography, starting from large to small. Starting from States, the information gets broken down into Counties or Metropolitan Statistical Areas (MSAs) which are smaller regions within States. Each of those are comprised of Census Places which are similar to cities in their size and composition. Finally, the neighborhoods of each city are broken down into a Census Block Group. The last and smallest geographic unit is the Census Tract, which is a subdivision of Census Block Groups.

[![ca](images/ca-150x150.jpg)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2014/01/ca.jpg) [![ca2](images/ca2-150x150.jpg)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2014/01/ca2.jpg) [![ca3](images/ca3-150x150.jpg)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2014/01/ca3.jpg)

## Hello Map: Thematic Mapping and the basics

Now it's finally time to actually map something! For this exercise, you are provided with a CA\_Workshop geodatabase. A geodatabas refers to a single file, that when opened in ArcGIS, houses multiple GIS datasets. A GIS dataset can be anything from a vector layer of points, lines or polygons, an image (eg. Satellite imagery), a raster, or simply be tabular data (eg. csv, excel). In other words, a geodatabase is a zipped file that can contain one, or many layers of geographic data. Here is a look at our UCLA\_extension geodatabase:

Workshop.gdb
|--CA\_Boundary
   |--CA\_County
      |--CA\_Zipcodes
      |--CA\_CensusTracts
         |--CA\_Blockgroups
|--LA\_Boundary
   |--LA\_BusLines
   |--LA\_BusStops
   |--LA\_Highschool\_Attendence
     |--LA\_Zipcodes
       |--LA\_CensusTracts
         |--LA\_CensusBlocks
|--Tables
   |--LA\_ACS\_Poverty

- [Workshop.gdb Download Link](http://sandbox.idre.ucla.edu/Workshops/workshop.zip)

Download and extract Workshop.zip. Then locate Workshop.gdb, and put it in a project folder for this workshop. For this class, you will learn how to inspect the geodatabase layers in ArcCatalog, and then use ArcMap to create some maps.

\[TBS\_ALERT color="info" heading="Vector vs. Rasters"\]Geographic data is stored either as [vector](http://support.esri.com/en/knowledgebase/GISdictionary/popup/vector) data (as points, lines, or polygons) or [raster](http://support.esri.com/en/knowledgebase/GISdictionary/popup/raster) data (as pixel grids).

Because of these differences in data storage, vector data is best suited for a human geography context (ex. urban planning, transportation forecasting, asset mapping), while raster data are best used for storing data on physical geography (ex. satellite imagery, elevation, watersheds, vegetation).

In ArcGIS, vector data is stored as individual .shp files (or feature classes within a geodatabase), while raster data is stored as .tiffs, .jpgs, or other image formats. \[/TBS\_ALERT\]

## Starting with the basics:

## Layers (feature class)

[![workshop1](images/workshop1-510x188.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2014/09/workshop1.png)

Layers are referred to as feature classes in ESRILand. To add multiple feature classes to your project you can add data. Now drag each layer and re-order them. If you are familiar with Adobe Photoshop or Illustrator, you will recognize conceptual similarities with layering. What happens when layers are re-ordered? How does this dictate your strategy on building a single flattened map with multiple layers?

## Attributes

[![workshop2](images/workshop2-510x201.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2014/09/workshop2.png)

Every layer (feature class) comes with attributes. This is the all-important "information" part of geographic "information" systems mapping. Data in the attribute tables dictates what _can_ get mapped. Open the attribute table of each layer, and study how each row and column is tied to the mapped element. Questions we will answer include:

- What is the unique identifier for each row?
- What other attributes exist?
- What happens when you select a row on the attribute table?
- How do you sort elements?
- Can you build custom queries?
- Can you build graphs?

## Symbolization

[![Screen Shot 2014-01-30 at 3.45.23 PM](images/Screen-Shot-2014-01-30-at-3.45.23-PM-500x177.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2014/01/Screen-Shot-2014-01-30-at-3.45.23-PM.png)

Outlines, fills, colors, weight, action! Here is the design phase of creating a map. Consider color choices: grayscale? color schemes? color hierarchy? Inevitably, you will find yourselves in the throes of ESRI's symbolization quagmire... That said, experiment with two types of symbolization for the workshop data:

1. Categories -> Unique values
2. Quantities -> Graduated colors

## Labeling

[![Screen Shot 2014-01-30 at 3.48.34 PM](images/Screen-Shot-2014-01-30-at-3.48.34-PM-500x203.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2014/01/Screen-Shot-2014-01-30-at-3.48.34-PM.png)

Map elements need labels at times. Consider what needs to be labeled, and what does not. Label sizes, fonts, weights, placement, colors are all things to consider for your map. Understand the relationship between labels, attributes, and layers.

## Choropleth Maps

[![Screen Shot 2014-01-30 at 3.56.27 PM](images/Screen-Shot-2014-01-30-at-3.56.27-PM-500x191.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2014/01/Screen-Shot-2014-01-30-at-3.56.27-PM.png)

For this section, we will focus on creating a choropleth (which just means a colored map based on numerical data)!

When creating a choropleth the following needs to be considered:

1. Is the phenomenon you wish to map choropleth-able?
    1. Choropleths work best when representing data where boundaries are important
    2. Conversely, choropleths do not work well when attempting to show data where boundaries are NOT important/irrelevant
2. Do you have the data in the geographic scale you wish to map it at?
3. Can you connect the data to an existing layer?
4. Which coloring style best represents your data?
    1. If your information is continuous then use a single color gradient
    2. If your information has a positive or negative range, use an opposite color scheme

# Data, data, data!

Let's talk about data manipulation in ArcMap, which is one of the core functions of any GIS program. Within ArcMap "joining" or "connecting" data is a fundamental task for working between data from different sources. There are two basic "joining" tasks that we will cover for dealing with data:

1. #### Joining
    
2. #### Spatial Join
    

## Acquiring data

A) Data for GIS analysis can be sourced from different formats, such as:

- Excel spreadsheets (.xsl)
- Comma separated values (.csv)
- Google Earth/Map KML files (.kml/.kmz)

B) [Social Explorer](http://www.socialexplorer.com/) ([http://www.socialexplorer.com/](http://www.socialexplorer.com/)) is a website that enables access to Census Data, please see this other [tutorial](http://sandbox.idre.ucla.edu/?page_id=189) ([http://sandbox.idre.ucla.edu/?page\_id=189](http://sandbox.idre.ucla.edu/?page_id=189)) for more information!

[![-32-20-](images/32-20--510x207.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2014/09/32-20-.png)

## Editing data

If you already have data you can edit it using either the "Editor" or using the "Field Calculator." Whenever you decide to edit data, you typically want to add a new field so that you do not accidentally modify other ones. To add a new field you have to open up a table, and then click on "Add Field..."

[![addNewField](images/addNewField-510x275.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2014/09/addNewField.png)

Afterwards you can specify the type of field, some of which are defined in the info box below:

\[TBS\_ALERT color="info" heading="Data Types"\]

**Short or Long Integers** - Numbers with no decimals \[ex. 12\] **Float or Double** - Numbers with decimals \[ex. 12.01\] **String** - Text (any combination of letters and numbers) \[ex. Twelve and one hundredth\]

\[/TBS\_ALERT\]

### A) The Editor allows you to type directly onto the fields to change any values, and is useful when you are creating your data from scratch.

For example: If you have data based on Zipcodes, you add a new field for number of enrolled students, and simply type the number in the field when you select the Zipcode.

### B) The "Field Calculator" is used for running calculations and/or operations on the current data.

\[caption id="attachment\_884" align="aligncenter" width="510"\][![Right click on a field for the field calculator](images/48-14-Table-510x292.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2014/09/48-14-Table.png) Right click on a field name in order to access the Field Calculator\[/caption\]

\[caption id="attachment\_885" align="aligncenter" width="465"\][![Field Calculator](images/50-53-Field-Calculator.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2014/09/50-53-Field-Calculator.png) Use a formula in order to calculate what the field should be\[/caption\]

## Joining Data

When you have data with geographic IDs, such as a Zipcode or a FIPS code, you are able to add the table to ArcGIS and then join that to the corresponding geography/GIS file.

\[TBS\_ALERT color="info" heading="What the FIPS?"\]A Federal Information Processing Standards (FIPS) code is what you will encounter when working with data from the US Census, it basically has the following format: \[STATE\]  + \[COUNTY\]  + \[CENSUS TRACT\]  + \[CENSUS BLOCK GROUP\] For example: 06  + 037  + 2653  + 01  or 06037265301 , which is UCLA's census tract. \[/TBS\_ALERT\]

There are 3 steps to joining data:

1\. Clean up the data in the spreadsheet and make sure that the data fields are the **same** type in both the origin table and the destination GIS file. (An example of what means is that a Long Integer field will **not** join to a String field!)

2\. Right click on the layer that you wish to join the data to, and then click on "Join and Relates"

[![workshop3](images/workshop3-510x297.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2014/09/workshop3.png)

3\. Select the field that you are join to in the destination GIS file, and then locate the spreadsheet that you have prepared for the join, and choose the correct field that you have prepared. You can then click "Ok" to complete the join!

##### [![workshop4](images/workshop4.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2014/09/workshop4.png)Congratulations! You have completed your first join!

4\. Now when you navigate to the layer table, you will see that the spreadsheet data was appended to the corresponding layer!

[![workshop5](images/workshop5-510x194.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2014/09/workshop5.png)

# Geoprocessing: Conducting spatial analysis

In addition to editing and visualizing data, GIS can be used to create new data as well. There are three geoprocessing functions that will be covered, which only is a tip of the iceberg when it comes to the various tools that ArcMap provides. Most geoprocessing tools can be found under "Geoprocessing," aside from geocoding.

## Geocoding

Geocoding is the process of assigning a latitude and longitude to addresses, which are then able to be utilized within a spatial context. Unfortunately, ESRI now charges for Geocodes, which makes it quite costly to access this service. There are less accurate but free alternatives online, including one which the Sandbox has developed itself:

[http://sandbox.idre.ucla.edu/geocoder/](http://sandbox.idre.ucla.edu/geocoder/ "http://sandbox.idre.ucla.edu/geocoder/")

For our (inaccurate) geo-coder, all you have to do is place in a few addresses, and then you can copy and paste that into an Excel file and then save it. Once saved, the Excel file can then be loaded into ArcGIS by going to File -> Add data --> Add XY data.[![workshop6](images/workshop6-510x392.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2014/09/workshop6.png)

Finally, your data points will then load on to your map!

## Geoprocessing Menu

The drop down for geoprocessing houses all the tools for accessing spatial analysis.

[![workshop9](images/workshop9-510x283.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2014/09/workshop9.png) Buffers

A buffer is just a circle around a specific point, line, or polygon which is helpful to see what phenomenon are around which areas. Typically, buffers are identified in linear units (kilometers, miles, etc.).

[![workshop8](images/workshop8-510x140.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2014/09/workshop8.png)

Select the buffer tool from the geoprocessing drop down, and then select the input as the layer which you want to draw the buffer around. Then specify an output directory/name and the linear distance (kilometers, miles, etc.).

\[caption id="attachment\_892" align="aligncenter" width="510"\][![workshop10](images/workshop10-510x418.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2014/09/workshop10.png) An example of how the buffer options should be when filled out.\[/caption\]

### Clip

A clip will cut out data from one layer from another, which is useful when you only want to know which features are located within a certain spot. Combining buffers and the clip, results in the map below, which shows the census tracts that 1 mile around geocoded addresses!

[![workshop7](images/workshop7-510x234.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2014/09/workshop7.png)

For the clip options, the input features is the layer that remains (the cookie dough), while the clip features are the layers which you will use to base the clip from (the cookie cutter). Finally, specify an output feature class for your new file, and execute the clip.

\[caption id="attachment\_893" align="aligncenter" width="510"\][![workshop11](images/workshop11-510x418.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2014/09/workshop11.png) An example of the clip options being filled out\[/caption\]

## Exporting maps

To export a map, you go to File -> Export.

[![Export](images/Export.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2014/01/Export.png)

Congratulations! You have completed this introductory GIS workshop, if you would like to check out other self-learning materials, please feel free to look at ESRI's tutorials:

[http://www.esri.com/training/main/training-catalog/course-recommendations](http://www.esri.com/training/main/training-catalog/course-recommendations)

E-mail for questions: albertk\[at\]gmx.com
