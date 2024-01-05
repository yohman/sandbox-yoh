---
title: "Intro to GIS: An Archaeological Perspective"
date: "2019-02-06"
---

\[TBS\_ALERT color="info" heading="Pre-class poll"\]Welcome! Before we begin our adventure on "spatial thinking," please take a minute to [take this poll](https://onlinepoll.ucla.edu/polls/2665/responses/enter_password).

[Pre-workshop poll](https://onlinepoll.ucla.edu/polls/2665/responses/enter_password) (password: "ucla") Bonus: [Poll Results](https://onlinepoll.ucla.edu/polls/2665/responses/summary) | [Batch geocoder](https://sandbox.idre.ucla.edu/tools/geocoder/)

After the workshop, please take this survey:

[Post-workshop survey](https://bit.ly/2RLCsBY)

\[/TBS\_ALERT\]

#### [**Part 1: Introduction to GIS and ESRI**](#part1)

1. [Background: Geographical information in the U.S.](#background)
2. [Hello Map: Thematic Mapping and the basics](#hellomap)
    - Connecting a folder
    - Adding Layers
    - Setting the projection
    - Attributes
    - Symbolization
    - Labeling
    - Choropleth Maps

#### [**Part 2: Working with spatial data**](#part2)

1. Acquiring data
2. The LA Data Portal
3. Project the data
4. Hot spot analysis

# Part I: Introduction to GIS and ESRI

### Gettin' down and dirty with ESRI

The first step in this tutorial is to understand that we are covering the basics of desktop GIS analysis using ESRI's ArcGIS software suite. This is by no means an all encompassing "entirety of GIS" tutorial, but rather a view on how GIS can be used to build maps from ESRI's perspective, limited by the functionalities of the software being covered. There are many other tools you may want to consider to do your spatial analysis, including [R](http://spatial.ly/r/), Python, [Carto](https://carto.com/), [Mapbox](https://www.mapbox.com/), [D3](https://d3js.org/), and [qGIS](https://www.qgis.org/en/site/).

The core function of the ESRI ArcGIS suite lies within two programs:

1. ArcCatalog - for managing GIS datasets
2. ArcMap - for mapping GIS datasets

![ArcIcons](images/ArcIcons.png)

\[TBS\_ALERT color="info" heading="What about OpenSource alternatives?"\]

[QGIS](http://www.qgis.org/en/site/) is as an alternative to ArcGIS that is free and openly available to the public on all computing platforms. Despite the accessibility of QGIS, there is a steeper learning curve for those learning GIS for the first time. However, those seeking a free low-cost alternative to ArcGIS can apply the concepts learned in this workshop with that program.

\[/TBS\_ALERT\]

### Hello Map

With geographical ideas in mind, it is finally time to map something! For this exercise, you are provided with a Workshop \[simple\_tooltip content='A geodatabase is shown as a folder. '\]geodatabase\[/simple\_tooltip\], which is a collection of GIS datasets. A GIS dataset can be any of the following:

1. a vector layer - points, lines or polygons
2. a raster layer - an image, Satellite imagery, elevation data
3. tabular data - excel spreadsheet, csv, etc.

\[TBS\_ALERT color="info" heading="Vector vs. Rasters"\]Geographic data is stored either as [vector](http://support.esri.com/sitecore/content/support/Home/other-resources/gis-dictionary/term/vector) data (as points, lines, or polygons) or [raster](http://support.esri.com/sitecore/content/support/Home/other-resources/gis-dictionary/term/raster) data (as pixel grids).

Because of these differences in data storage, vector data is best suited for a human geography context (ex. urban planning, transportation forecasting, asset mapping), while raster data are best used for storing data on physical geography (ex. satellite imagery, elevation, watersheds, vegetation).

In ArcGIS, vector data is stored as individual .shp files or feature classes within a geodatabase. Raster data is stored as .tiffs, .jpgs, or other image formats. \[/TBS\_ALERT\]

Our geodatabase contains multiple GIS feature classes.

- [Workshop Data Download Link](https://sandbox.idre.ucla.edu/Workshops/workshopData2018.zip)

Download and \[simple\_tooltip content='Extracting means using a program, such as 7zip to unzip files from a single file.'\]extract\[/simple\_tooltip\] Workshop.zip. Locate Workshop.gdb, and put it in a project folder for this workshop. You will learn how to inspect the geodatabase data in ArcCatalog, then use ArcMap to create some maps.

Here is a look at our Workshop geodatabase:

workshop2018.gdb
|--us\_cities
|--us\_counties
|--us\_states

### Connecting a folder in ArcCatalog

Open up ArcCatalog and click the second button to the left, which is the "Connect Folder" button.

![ArcCatalog3](images/ArcCatalog3.png)

Navigate to the **Folder** where you extracted the "workshopData2018.zip" file and then select "OK".

\[TBS\_ALERT color="danger" heading="Do not try to connect a file!"\]If you try to connect files, you will notice that the "OK" button is grayed out, connecting folders allows you only to choose folders.\[/TBS\_ALERT\]

### View and Preview the data

After you've connected the folder, you can check **Folder Connections** and open the Folder which you've connected. Locate "**workshop2018.gdb**" and double click it to view its contents. Browse for **us\_states** and click the "**Preview**" tab.

### Hello Egypt: Setting the projection

Geographic coordinate systems are typically measured in decimal degrees, and are useful when your data is global and/or comes with latitude and longitude coordinates. However, because of its angular units, it is not recommended for spatial analysis. Instead, one should consider using a projected coordinate system that is suited to the region of analysis.  Given that we are only working with **Egypt** based data, let's set our projection to the following UTM zone that is specifically optimized for our region of interest:

- WGS 1984 UTM Zone 36N

Let's set our projection with this in mind:

1. Right click on "**Layers**" and go to "**properties**" (or just double click on "Layers")
2. Select the "**Coordinate Systems**" tab
3. Go to "**Projected Coordinate Systems**", "**UTM**", "**WGS 1984**", "**Northern Hemisphere**", and choose "**WGS 1984 UTM Zone 36N**"

![](images/set-projection-e1549474617737.png)

\[TBS\_ALERT color="danger" heading="It's on the fly!"\]The software will warn you that you are projecting your datasets on the fly (note that it is not _reprojecting_ the actual data, it is doing so only within the scope of this project space). If you want to perform spatial analysis, it is recommended that all layers in your project be reprojected to an appropriate coordinate system. More information on how to do this can be found [here](https://support.esri.com/en/technical-article/000004886).\[/TBS\_ALERT\]

### Adding Layers

Now the time has come to fire up ArcMap and become a digital cartographer! The first step for any GIS project is to have data (more on this later). In order to add data to your project click on the "**Add data**" button:

![addData](images/addData.png)

Notice how the connected folder can be selected and datasets be added now? Also, if your map is feeling a bit empty, you can add base maps by clicking the upside down triangle next to the **Add Data** button. Adding a basemap only provides reference information and nothing else.

### Order your layers

Vector layers are also referred to as "feature classes" in ESRI-Land. All GIS datasets can be added in this same way. Now drag each layer and re-order them. If you are familiar with Adobe Photoshop or Illustrator, you will recognize conceptual similarities with layering. What happens when layers are re-ordered? How does this dictate your strategy on building a single flattened map with multiple layers?

\[TBS\_ALERT color="info" heading="Challenge Exercise"\]Modify your map by changing fill colors, outline colors, symbol sizes, symbol colors to make it look like this:

![](images/US-Map-e1516301440489.png)

\[/TBS\_ALERT\]

### Symbolization

Outlines, fills, colors, weight, action! Here is where the artist in you comes out and the design phase of creating a map begins. Consider color choices: grayscale? Color schemes? Color hierarchy? Inevitably, you will find yourselves in the throes of ESRI's symbolization quagmire...

### Labeling

![](images/Labeling-e1516302424726.png)

Map elements need labels at times. Consider what needs to be labeled, and what does not. Label sizes, fonts, weights, placement, colors are all things to consider for your map. Understand the relationship between labels, attributes, and layers.

\[TBS\_ALERT color="info" heading="Labels hard to read? Halo it!"\]Sometimes your labels may be hard to read, depending on what resides in the background. In this situation, you can add a white "halo" to your labels to make them "pop" some more. This feature is very, very hidden in ArcMap, but here is how to get to it:

1. Go the **Label** tab
2. Click "**Symbol**"
3. Click "**Edit symbol**"
4. Click "**Mask**"
5. Choose "**Halo**"

![](images/Halo-e1516390561590.png)

\[/TBS\_ALERT\]

### Attributes

![](images/Attribute-Table-1-e1516387556924.png)

Every layer (feature class) comes with attributes. This is the all-important "information" part of geographic "information" systems mapping. Data in the attribute tables dictates what _can_ get mapped. Open the attribute table of each layer (right click on the layer from the table of contents, **Open Attribute Table**):

![open attribute table](images/open-attribute-table-e1538584340846.png)

Study how each row and column is tied to the mapped element. Questions we will answer include:

- What is the unique identifier for each row?
- What other attributes exist?
- What happens when you select a row on the attribute table?
- How do you sort elements?
- Can you build custom queries?
- Can you build graphs?

### Choropleth Maps

![](images/Choropleth-Map-e1516303937369.png)

For this section, we will focus on creating a choropleth (which just means a colored map based on numerical data)!

When creating a choropleth the following needs to be considered:

1. Is the data _choropleth-able_?
    1. Choropleths work best when representing data where boundaries are important
    2. Conversely, choropleths do not work well when attempting to show data where boundaries are NOT important/irrelevant
2. Do you have the data in the geographic scale you wish to map it at?
3. Can you connect the data to an existing layer?
4. Which coloring style best represents your data?
    1. If your information is continuous then use a single color gradient
    2. If your information has a positive or negative range, use an opposite color scheme

To create a choropleth map, follow these steps:

1. Right click on **us\_counties** and go to **properties** (or just double click it!)
2. Select the **Symbology** tab, click on **Quantities**, and select **POP2010** for the Value field.

![](images/choropleth-settings-e1538512169989.png)

Now click on the **Classify** button. There are several methods to choose from. Look at the [following documentation](http://pro.arcgis.com/en/pro-app/help/mapping/layer-properties/data-classification-methods.htm) to determine which method is best suited for your data.

![classification choices](images/classification-choices-e1538517900653.png)

# Part 2: Working with spatial data

### Acquiring data

The open data movement has made more and more data available for academics to download and use for their research. But how can we map this data? This workshop will take you through the process of acquiring data from the [Los Angeles Open Data portal](https://data.lacity.org/) and visualizing it on ArcGIS for further analysis. [Los Angeles Open Data portal](https://data.lacity.org/)

### The Los Angeles Open Data Portal

Search for crime data

 

![](images/open-data-search-1-e1524853436494.png)

Inspect the data

![](images/open-data-crime-data-e1524853710964.png)

Almost 2 million records! Let's filter it down to something more manageable.

![view data](images/2018-10-02-08_57_05-Crime-Data-from-2010-to-Present-_-Los-Angeles-Open-Data-Portal-e1538496083813.png)

Now add the filter to narrow down the data to one month:

![filter crime data by date reported](images/filter-crime-data-by-date-reported-e1538496252882.png)

 

![filter crime data by date reported](images/filter-crime-data-by-date-reported-1-e1538580605581.png)

Export the data

![export as csv](images/export-as-csv-e1538496456287.png)

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

Start a brand new ArcMap project and add the csv file (remember the **Add Data** button?). Right click on the csv file and **Display XY Data**.

![](images/open-data-display-xy-e1524870101534.png)

1. Set X to **Longitude**
2. Set Y to **Latitude**
3. Click **Edit** for the coordinate system
4. Enter "**WGS 1984**" in the search box
5. Choose **WGS 1984**

![](images/open-data-set-coordinate-system-e1524870277327.png)

Now save your new layer as a shapefile, or geodatabase:

![](images/open-data-export-data-e1525276046743.png)

![](images/open-data-export-into-geodatabase-e1525276199611.png)

### Project the data

Our data is currently in a geographic coordinate system (WGS1984). Let's change this to a projected coordinate system. The UTM zone for Los Angeles is **UTM Zone 11N**.

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

Now perform a [kernel density](http://pro.arcgis.com/en/pro-app/tool-reference/spatial-analyst/how-kernel-density-works.htm) to visualize the density of Hispanic arrests in Los Angeles. In the search box, enter "**kernel**" and click on the **Kernel Density (Spatial Analyst)** tool. Enter the four boxes as shown below:

![](images/hispanic-kernel-e1525280163943.png)

Add a **basemap**, and change the **symbology** to make the visual more powerful:

![](images/kernel-crime-map-e1525280341147.png)

Repeat the process for other race categories:

<table><tbody><tr><td>Black <img class="alignnone size-full wp-image-3313" src="images/kernel-black-e1525280897233.png" alt="" width="991" height="731"></td><td>White<img class="alignnone size-full wp-image-3314" src="images/kernel-white-e1525281024184.png" alt="" width="991" height="731"></td><td>Hispanic<img class="alignnone size-full wp-image-3312" src="images/kernel-hispanic-e1525280752322.png" alt="" width="991" height="731"></td></tr></tbody></table>

 

### Data in this tutorial

- [LAPD Crime Data 2010 (csv)](http://gis.ucla.edu/geodata/dataset/lapd-crime-data-2010)

### Thanks for attending the workshop!

#### Please fill out the feedback form to see what we can improve upon:

[Post workshop survey](https://bit.ly/2RLCsBY)

#### For more learning you can check out ESRI's tutorials:

[http://www.esri.com/training/main/training-catalog/course-recommendations](http://www.esri.com/training/main/training-catalog/course-recommendations)
