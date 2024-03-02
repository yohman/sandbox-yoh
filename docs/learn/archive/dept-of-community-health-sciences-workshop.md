---
title: "Department of Community Health Sciences GIS Workshop"
date: "2015-05-28"
categories: 
  - "workshops"
---

#### Welcome to the Department of Community Health Sciences GIS Workshop!

#### First, please navigate to this page using the URL below:

#### [http://sandbox.idre.ucla.edu/sandbox/dept-of-community-health-sciences-workshop](http://sandbox.idre.ucla.edu/sandbox/dept-of-community-health-sciences-workshop)

#### And then download the Workshop tutorial files:

#### [http://sandbox.idre.ucla.edu/Workshops/DCHS\_Workshop.zip](http://sandbox.idre.ucla.edu/Workshops/DCHS_Workshop.zip)

# Other Links

ESRI's Self-learning Tutorials: [http://www.esri.com/training/main/training-catalog/course-recommendations](http://www.esri.com/training/main/training-catalog/course-recommendations)

Social Explorer: [http://www.socialexplorer.com/](http://www.socialexplorer.com/)

# Outline:

1. Introduction to GIS and ESRI
    1. Background: Geographical information in the U.S.
2. Hello Map: Thematic Mapping and the basics
    1. Connecting a folder
    2. Adding Layers
    3. Attributes
    4. Symbolization
    5. Labeling
    6. Creating/Styling a map
3. Data, data, data!
    1. Acquiring data
    2. Formatting data
    3. Joining data
    4. Geocoding
4. Exporting maps
5. Geoprocessing: Conducting spatial analysis\*
    1. Buffers
    2. Clipping
    3. Spatial Joins

_\*Time permitting_

Part I: Introduction to GIS and ESRI

### The ESRI way of GIS

The first step in this tutorial is to understand that we are covering the basics of desktop GIS analysis using ESRI's ArcGIS software suite. This is by no means an all encompassing "this is all of GIS" tutorial, but rather a view on how GIS is used to build maps from ESRI's perspective, limited by the functionalities of the software covered.

The core function of the ESRI ArcGIS suite lies within two programs:

1. ArcCatalog - for managing GIS datasets
2. ArcMap - for mapping GIS datasets

![ArcIcons](images/ArcIcons.png)

\[TBS\_ALERT color="info" heading="A note about OpenSource Alternatives"\]

[QGIS](http://www.qgis.org/en/site/) is as an alternative to ArcGIS that is free and openly available to the public on all computing platforms. Despite the accessibility of QGIS, there is a steeper learning curve for those learning GIS for the first time. However, those seeking a free low-cost alternative to ArcGIS can apply the concepts learned in this workshop with that program.

For those interested in seeing the comparison between QGIS and ArcGIS you can check out this external article here: [http://www.xyht.com/spatial-itgis/qgis-v-arcgis/](http://www.xyht.com/spatial-itgis/qgis-v-arcgis/)

\[/TBS\_ALERT\]

## A little background: Geographical information in the U.S.A.

Demographic information in the USA is typically arranged in a hierarchical geography, starting from large to small. Starting from States, the information gets broken down into Counties or Metropolitan Statistical Areas (MSAs) which are smaller regions within States. Each of those are comprised of Census Places which are similar to cities in their size and composition. Finally, the neighborhoods of each city are broken down into a Census Block Group. The last and smallest geographic unit is the Census Tract, which is a subdivision of Census Block Groups.

[![ca](images/ca-150x150.jpg)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2014/01/ca.jpg) [![ca2](images/ca2-150x150.jpg)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2014/01/ca2.jpg) [![ca3](images/ca3-150x150.jpg)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2014/01/ca3.jpg)

## Hello Map: Thematic Mapping and the basics

Now it's finally time to actually map something! For this exercise, you are provided with a Workshop geodatabase, which is a collection of GIS datasets. A GIS dataset can be any of the following:

1. a vector layer - points, lines or polygons
2. a raster layer - an image, Satellite imagery, elevation data
3. tabular data - excel spreadsheet, csv, etc.

\[TBS\_ALERT color="info" heading="Vector vs. Rasters"\]Geographic data is stored either as [vector](http://support.esri.com/en/knowledgebase/GISdictionary/popup/vector) data (as points, lines, or polygons) or [raster](http://support.esri.com/en/knowledgebase/GISdictionary/popup/raster) data (as pixel grids).

Because of these differences in data storage, vector data is best suited for a human geography context (ex. urban planning, transportation forecasting, asset mapping), while raster data are best used for storing data on physical geography (ex. satellite imagery, elevation, watersheds, vegetation).

In ArcGIS, vector data is stored as individual .shp files (or feature classes within a geodatabase), while raster data is stored as .tiffs, .jpgs, or other image formats. \[/TBS\_ALERT\]

In other words, our geodatabase contains one or multiple GIS datasets. Here is a look at our Workshop geodatabase:

Workshop.gdb
|--CA\_Boundary
   |--CA\_County
      |--CA\_Zipcodes
      |--CA\_CensusTracts
         |--CA\_Blockgroups
|--LA\_Boundary
   |--LA\_BusStops
     |--LA\_Zipcodes
       |--LA\_CensusTracts
         |--LA\_CensusBlocks
|--Tables
   |--Obesity

- [Workshop.gdb Download Link](http://sandbox.idre.ucla.edu/Workshops/DCHS_Workshop.zip)

Download and extract Workshop.zip. Then locate Workshop.gdb, and put it in a project folder for this workshop. For this workshop, you will learn how to inspect the geodatabase data in ArcCatalog, then use ArcMap to create some maps.

## Connecting a folder in ArcCatalog

Open up ArcCatalog and click the second button to left, which is the "Connect Folder" button.

![ArcCatalog3](images/ArcCatalog3.png)

Navigate to the **Folder** where you extracted the "Workshop.zip" file and then select "OK".

\[TBS\_ALERT color="danger" heading="Do not try to connect a file!"\]If you try to connect files, you will notice that the "OK" button is grayed out, connecting folders allows you only to choose folders.\[/TBS\_ALERT\]

## View and Preview the data

After you've connected the folder, now you can check Folder Connections and open the Folder which you've connected.

Locate "Workshop.gdb" and double click it to view its contents.

Browse for CA\_Boundary and click the "Preview" tab to view the shape of California.

## Adding Layers

Now the time has come to fire up ArcMap and get to map making!

The first step for any GIS project is to have data (more on this later!). In order to add data to your project click on the "Add data" button:

![addData](images/addData.png)

Notice how the connected folder can be selected and datasets be added now? Also, if your map is feeling a bit empty, you can add base maps by clicking the upside down triangle next to the Add Data button. Adding a basemap only provides reference information and nothing else.

\[TBS\_ALERT color="info" heading="ArcCatalog in ArcMap?"\] You can also connect folders in ArcMap by clicking a button, but we didn't do so because we wanted to demo ArcCatalog. You can even access ArcCatalog in ArcMap, but the view is rather constrained, so we opted to demo the standalone program.\[/TBS\_ALERT\]

Vector layers are also referred to as "feature classes" in ESRILand. All GIS datasets can be added in this same way. Now drag each layer and re-order them. If you are familiar with Adobe Photoshop or Illustrator, you will recognize conceptual similarities with layering. What happens when layers are re-ordered? How does this dictate your strategy on building a single flattened map with multiple layers?

[![workshop1](images/workshop1-510x188.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2014/09/workshop1.png)

## Attributes

![TableView](images/TableView.png)

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

Let's talk about data manipulation in ArcMap, which is one of the core functions of any GIS program. Within ArcMap "joining" or "connecting" data is a fundamental task for working between data from different sources. There are two basic "joining" method available:

1. #### Joining - connecting an external data source to a GIS dataset
    
2. #### Spatial Join - connecting data based on geography
    

This workshop will focus on the first "joining" method, which is more applicable to non-geographic datasets, such as excel spreadsheets, CSVs, and other data tables.

## Acquiring data non-geographic spatial data

A) Non-geographic spatial data for GIS analysis can be sourced from different formats, such as:

- Excel spreadsheets (.xsl)
- Comma separated values (.csv)
- Google Earth/Map KML files (.kml/.kmz)

B) [Social Explorer](http://www.socialexplorer.com/) ([http://www.socialexplorer.com/](http://www.socialexplorer.com/)) is a website that enables access to Census Data, please see this other [tutorial](http://sandbox.idre.ucla.edu/?page_id=189) for more information!

The key is that there has to be a column which is able to link the non-geographic data to some spatial data set, such as States, Countries, FIPS Codes, Zipcodes.

![joining](images/joining.png)

## Editing data

When the "key" field is which formatted in differently, the table will only join if the connecting table has exactly the same formatting and values.

To ensure this formatting, and to introduce a new concept, there is the ability to "Edit" data in ArcMap.

If you already have data loaded into ArcMap you can edit using either the "Editor" or using the "Field Calculator." Whenever you decide to edit data, you typically want to add a new field so that you do not accidentally modify other ones. To add a new field you have to open up a table, and then click on "Add Field..."

[![addNewField](images/addNewField-510x275.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2014/09/addNewField.png)\[TBS\_ALERT color="danger" heading="Can I edit my excel tables?"\]No, unfortunately, you cannot edit Excel spreadsheets, CSVs, and other data tables imported into ArcMap, only GIS datasets! Make edits to your external data outside of ArcMap beforehand!\[/TBS\_ALERT\]

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

\[TBS\_ALERT color="info" heading="What the FIPS?"\]A Federal Information Processing Standards (FIPS) code is what you will encounter when working with data from the US Census, it basically has the following format: \[STATE\] + \[COUNTY\] + \[CENSUS TRACT\] + \[CENSUS BLOCK GROUP\] For example: 06 + 037 + 2653 + 01 or 06037265301 , which is UCLA's census tract. \[/TBS\_ALERT\]

There are 3 steps to joining data:

1\. Clean up the data in the spreadsheet and make sure that the data fields are the **same** type in both the origin table and the destination GIS file. An example of what means is that an Integer field will **not** join to a String field!

2\. Right click on the layer that you wish to join the data to, and then click on "Join and Relates"

[![workshop3](images/workshop3-510x297.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2014/09/workshop3.png)

3\. Select the field that you are join to in the destination GIS file, and then locate the spreadsheet that you have prepared for the join, and choose the correct field that you have prepared. You can then click "Ok" to complete the join!

[![Join1](images/Join1.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2015/05/Join1.png)

##### Congratulations! You have completed your first join!

4\. Now when you navigate to the layer table, you will see that the spreadsheet data was appended to the corresponding layer!

[![JoinAddedFields2](images/JoinAddedFields2.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2015/05/JoinAddedFields2.png)

## Saving the Join

In order to make the "join" permanent, you can save a new dataset by exporting the data.

1. Right click on the geographic dataset that the non-geographic spatial data was joined to, in this example the LA\_CensusTracts
2. Go to "Data" then "Export Data..." [![savingTheJoin](images/savingTheJoin.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2015/05/savingTheJoin.png)
3. Select a location and name for the new shapefile (or Feature Class if you are saving the file back into the Geodatabase)

## Utilizing the Join

Now that we have the join up and running, we will utilize what we previously learned to attempt the following challenges:

Challenge 1: Create a map that highlights percent minority populations

Challenge 2: Which census tract has the lowest percent of highschool graduates?

Challenge 3: Can you join the store and obesity tables to census tracts, and find out which store resides in the census tract with the lowest median income (out of the 7 stores)?

## Geocoding

Geocoding is the process of assigning a latitude and longitude to addresses, which are then able to be utilized within a spatial context. Unfortunately, ESRI now charges for Geocodes, which makes it quite costly to access this service.

There are less accurate but free alternatives online, including one which the Sandbox has developed itself:

[http://sandbox.idre.ucla.edu/tools/geocoder/](http://sandbox.idre.ucla.edu/tools/geocoder/ "http://sandbox.idre.ucla.edu/geocoder/")

For our (inaccurate) geo-coder, all you have to do is place in a few addresses, and then you can copy and paste that into an Excel file and then save it. Once saved, the Excel file can then be loaded into ArcGIS by going to File -> Add data --> Add XY data.

[![workshop6](images/workshop6-510x392.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2014/09/workshop6.png)

Finally, your data points will then load on to your map!

## Exporting maps

To export a map, you go to File -> Export.

![Export](images/Export.png)

# Extra Material - Geoprocessing: Conducting spatial analysis

In addition to editing and visualizing data, GIS can be used to create new data as well. There are three geoprocessing functions that will be covered, which only is a tip of the iceberg when it comes to the various tools that ArcMap provides. Most geoprocessing tools can be found under "Geoprocessing," aside from geocoding.

## Geoprocessing Menu

The drop down for geoprocessing houses all the tools for accessing spatial analysis.

[![workshop9](images/workshop9-510x283.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2014/09/workshop9.png)

## Buffers

A buffer is just a circle around a specific point, line, or polygon which is helpful to see what phenomenon are around which areas. Typically, buffers are identified in linear units (kilometers, miles, etc.).

[![workshop8](images/workshop8-510x140.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2014/09/workshop8.png)

Select the buffer tool from the geoprocessing drop down, and then select the input as the layer which you want to draw the buffer around. Then specify an output directory/name and the linear distance (kilometers, miles, etc.).

\[caption id="attachment\_892" align="aligncenter" width="510"\][![workshop10](images/workshop10-510x418.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2014/09/workshop10.png) An example of how the buffer options should be when filled out.\[/caption\]

## Clip

A clip will cut out data from one layer from another, which is useful when you only want to know which features are located within a certain spot. Combining buffers and the clip, results in the map below, which shows the census tracts that 1 mile around geocoded addresses!

[![workshop7](images/workshop7-510x234.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2014/09/workshop7.png)

For the clip options, the input features is the layer that remains (the cookie dough), while the clip features are the layers which you will use to base the clip from (the cookie cutter). Finally, specify an output feature class for your new file, and execute the clip.

\[caption id="attachment\_893" align="aligncenter" width="510"\][![workshop11](images/workshop11-510x418.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2014/09/workshop11.png) An example of the clip options being filled out\[/caption\]

 

Congratulations! You have completed this introductory GIS workshop, if you would like to check out other self-learning materials, please feel free to look at ESRI's tutorials:

[http://www.esri.com/training/main/training-catalog/course-recommendations](http://www.esri.com/training/main/training-catalog/course-recommendations)

E-mail for questions: albertk\[at\]gmx.com
