---
title: "Summer GIS Workshop 2018"
date: "2018-06-24"
categories: 
  - "workshops"
---

## Outline

#### [https://sandbox.idre.ucla.edu/sandbox/summer-gis-workshop-2018](https://sandbox.idre.ucla.edu/sandbox/summer-gis-workshop-2018)

#### **Part 1: Introduction to GIS and ESRI**

1. Background: Geographical information in the U.S.
2. Hello Map: Thematic Mapping and the basics
    - Connecting a folder
    - Adding Layers
    - Setting the projection
    - Attributes
    - Symbolization
    - Labeling
    - Choropleth Maps

#### **Part 2: Working with Social Explorer**

1. Data, data, data!
2. Acquiring data
3. Import the data into ArcMap
4. The leading zero nightmare...
5. Joining data

#### **Part 3: Joining GIS with your research**

1. Scenario 1: Point data exists in csv format
2. Scenario 2: Join based on unique ID
3. Scenario 3: Locate data based on addresses

## Part I: Introduction to GIS and ESRI

### Gettin' down and dirty with ESRI

The first step in this tutorial is to understand that we are covering the basics of desktop GIS analysis using ESRI's ArcGIS software suite. This is by no means an all encompassing "entirety of GIS" tutorial, but rather a view on how GIS is used to build maps from ESRI's perspective, limited by the functionalities of the software covered.

The core function of the ESRI ArcGIS suite lies within two programs:

1. ArcCatalog - for managing GIS datasets
2. ArcMap - for mapping GIS datasets

![ArcIcons](images/ArcIcons.png)

\[TBS\_ALERT color="info" heading="What about OpenSource Alternatives?"\]

[QGIS](http://www.qgis.org/en/site/) is as an alternative to ArcGIS that is free and openly available to the public on all computing platforms. Despite the accessibility of QGIS, there is a steeper learning curve for those learning GIS for the first time. However, those seeking a free low-cost alternative to ArcGIS can apply the concepts learned in this workshop with that program.

For those interested in seeing the comparison between QGIS and ArcGIS you can check out this external article here: [http://www.xyht.com/spatial-itgis/qgis-v-arcgis/](http://www.xyht.com/spatial-itgis/qgis-v-arcgis/)

\[/TBS\_ALERT\]

### A little geo-background: Geographical information in the U.S.A.

Demographic information in the USA is typically arranged in a hierarchical geography, starting from large to small. Starting from States, information gets broken down into Counties or Metropolitan Statistical Areas (MSAs). Each of those are comprised of Census Places which are similar to cities in their size and composition. The neighborhoods of each city are broken down into a Census Tract. Census Tracts are then subdivided further into Census Block Groups. Finally, Census Block Groups compose of Census Blocks, but data is not usually published at this level for privacy concerns.

![](images/US-Geographies-e1516386477547.png)

 

\[TBS\_ALERT color="info" heading=""\]In short US geography is organized like this:

**States** → **Counties / Metropolitan Statistical Areas** → **Census Places** → **Census Tract** → **Census Block Group** → **Census Block**

\[/TBS\_ALERT\]

### Basics of Thematic Mapping

With geographical ideas in mind, now it is finally time to map something! For this exercise, you are provided with a Workshop \[simple\_tooltip content='A geodatabase is shown as a folder. '\]geodatabase\[/simple\_tooltip\], which is a collection of GIS datasets. A GIS dataset can be any of the following:

1. a vector layer - points, lines or polygons
2. a raster layer - an image, Satellite imagery, elevation data
3. tabular data - excel spreadsheet, csv, etc.

\[TBS\_ALERT color="info" heading="Vector vs. Rasters"\]Geographic data is stored either as [vector](http://support.esri.com/sitecore/content/support/Home/other-resources/gis-dictionary/term/vector) data (as points, lines, or polygons) or [raster](http://support.esri.com/sitecore/content/support/Home/other-resources/gis-dictionary/term/raster) data (as pixel grids).

Because of these differences in data storage, vector data is best suited for a human geography context (ex. urban planning, transportation forecasting, asset mapping), while raster data are best used for storing data on physical geography (ex. satellite imagery, elevation, watersheds, vegetation).

In ArcGIS, vector data is stored as individual .shp files (or feature classes within a geodatabase), while raster data is stored as .tiffs, .jpgs, or other image formats. \[/TBS\_ALERT\]

In other words, our geodatabase contains one or multiple GIS datasets.

- [Workshop Data Download Link](https://sandbox.idre.ucla.edu/Workshops/workshopData2018.zip)

Download and \[simple\_tooltip content='Extracting means using a program, such as 7zip to unzip files from a single file.'\]extract\[/simple\_tooltip\] Workshop.zip.

Then locate Workshop.gdb, and put it in a project folder for this workshop. You will learn how to inspect the geodatabase data in ArcCatalog, then use ArcMap to create some maps.

Here is a look at our Workshop geodatabase:

Workshop.gdb
|--us\_cities
|--us\_counties
|--us\_states

### Connecting a folder in ArcCatalog

Open up ArcCatalog and click the second button to left, which is the "Connect Folder" button.

![ArcCatalog3](images/ArcCatalog3.png)

Navigate to the **Folder** where you extracted the "Workshop.zip" file and then select "OK".

\[TBS\_ALERT color="danger" heading="Do not try to connect a file!"\]If you try to connect files, you will notice that the "OK" button is grayed out, connecting folders allows you only to choose folders.\[/TBS\_ALERT\]

### View and Preview the data

After you've connected the folder, now you can check Folder Connections and open the Folder which you've connected.

Locate "Workshop.gdb" and double click it to view its contents.

Browse for us\_states and click the "Preview" tab.

### Adding Layers

Now the time has come to fire up ArcMap and get to map making!

The first step for any GIS project is to have data (more on this later!). In order to add data to your project click on the "Add data" button:

![addData](images/addData.png)

Notice how the connected folder can be selected and datasets be added now? Also, if your map is feeling a bit empty, you can add base maps by clicking the upside down triangle next to the Add Data button. Adding a basemap only provides reference information and nothing else.

\[TBS\_ALERT color="info" heading="ArcCatalog in ArcMap?"\] You can also connect folders in ArcMap by clicking a button, but we didn't do so because we wanted to demo ArcCatalog. You can even access ArcCatalog in ArcMap, but the view is rather constrained, so we opted to demo the standalone program.\[/TBS\_ALERT\]

### Setting the projection

The datasets provided in this workshop are in a geographic coordinate system (GCS\_WGS\_1984). By default, the project thus assumes a "flat" view of the earth, intended to support datasets for the entire world. Given that we are only working with US based data, we can choose to visualize our maps with a more "US-centric" perspective. Let's set our projection with this in mind:

1. Right click on "Layers" and go to "properties"
2. Select the "coordinate systems" tab
3. Go to "Projected Coordinate Systems", "Continental", "North America", and choose "USA Contiguous Albers Equal Area Conic USGS"

![](images/projection-e1516301085784.png)

\[TBS\_ALERT color="danger" heading="It's on the fly!"\]The software will warn you that you are projecting your datasets on the fly (note that it is not _reprojecting_ the actual data, it is doing so only within the scope of this project space). If you want to perform spatial analysis, it is recommended that all layers in your project be reprojected to an appropriate coordinate system. More information on how to do this can be found [here](https://support.esri.com/en/technical-article/000004886).\[/TBS\_ALERT\]

### Order your layers

Vector layers are also referred to as "feature classes" in ESRILand. All GIS datasets can be added in this same way. Now drag each layer and re-order them. If you are familiar with Adobe Photoshop or Illustrator, you will recognize conceptual similarities with layering. What happens when layers are re-ordered? How does this dictate your strategy on building a single flattened map with multiple layers?

\[TBS\_ALERT color="info" heading="Challenge Exercise"\]Modify your map by changing fill colors, outline colors, symbol sizes, symbol colors to make it look like this:

![](images/US-Map-e1516301440489.png)

\[/TBS\_ALERT\]

### Attributes

![](images/Attribute-Table-1-e1516387556924.png)

Every layer (feature class) comes with attributes. This is the all-important "information" part of geographic "information" systems mapping. Data in the attribute tables dictates what _can_ get mapped. Open the attribute table of each layer, and study how each row and column is tied to the mapped element. Questions we will answer include:

- What is the unique identifier for each row?
- What other attributes exist?
- What happens when you select a row on the attribute table?
- How do you sort elements?
- Can you build custom queries?
- Can you build graphs?

### Symbolization

Outlines, fills, colors, weight, action! Here is the design phase of creating a map. Consider color choices: grayscale? color schemes? color hierarchy? Inevitably, you will find yourselves in the throes of ESRI's symbolization quagmire... That said, experiment with two types of symbolization with the workshop data:

1. Categories -> Unique values
2. Quantities -> Graduated colors

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

### Choropleth Maps

![](images/Choropleth-Map-e1516303937369.png)

For this section, we will focus on creating a choropleth (which just means a colored map based on numerical data)!

When creating a choropleth the following needs to be considered:

1. Is the data choropleth-able?
    1. Choropleths work best when representing data where boundaries are important
    2. Conversely, choropleths do not work well when attempting to show data where boundaries are NOT important/irrelevant
2. Do you have the data in the geographic scale you wish to map it at?
3. Can you connect the data to an existing layer?
4. Which coloring style best represents your data?
    1. If your information is continuous then use a single color gradient
    2. If your information has a positive or negative range, use an opposite color scheme

## Part 2: Working with Social Explorer

### ![](images/Social-Explorer-e1516309262695.png)

### Data, data, data!

Let's talk about data manipulation in ArcMap, which is one of the core functions of any GIS program. Within ArcMap "joining" or "connecting" data is a fundamental task for working between data from different sources. There are two basic "joining" method available:

1. Joining - connecting an external data source to a GIS dataset
2. Spatial Join - connecting data based on geography

This workshop will focus on the first "joining" method, which is more applicable to non-geographic datasets, such as excel spreadsheets, CSVs, and other data tables.

### Acquiring data

Social Explorer provides data for the entire US Census (1790 to 2010) and the American Community Survey (2005 to 2015).

\[TBS\_ALERT color="info" heading="Check this out!"\]For a more detailed workshop on using Social Explorer, [visit this page](https://sandbox.idre.ucla.edu/sandbox/getting-started-with-social-explorer-and-exporting-data).\[/TBS\_ALERT\]

Let's download employment data from Social Explorer:

1. Go to [Social Explorer](https://www.socialexplorer.com/) and click on the "**Tables**" tab
2. Select "**American Community Survey (5-Year Estimates)"**
3. Click on "**Begin Report**" for the newest survey
4. Select "**County**" for geographic type, highlight "**All counties**" and click the "**Add**" button, and then click on "**Proceed to Tables**"![](images/ACS-Selection-e1516309472262.png)
5. Click on the "**Select by Keyword**" tab, and enter "**employment**"
6. Highlight "**T33. Employment Status for Total Populations 16 Years and Over**" and click on "**Add**" and then "**Show results**"![](images/Social-Explorer-data-preview-e1516309689183.png)
7. Click on the **header** for the table to go to the Data Dictionary page that describes this data. This will open in a new window. Keep this window open, we will come back to it later. ![](images/Table-details-e1516309847621.png)
8. Go back to the report page, and click on the "**Data Download**" tab
9. Click on the "**County data (CSV)**" link to download the data into your project folder. Name the file "**employment.csv**"

### Import the data into ArcMap

Let's import this new employment table into ArcMap.

1. Click on the **add data** button and import the **employment.csv** table
2. Right click on the table (from the left panel table of contents) and go to "**properties**"
3. By default, social explorer creates many columns, many of which we do not need. Click on the "**uncheck all**" button (looks like an empty piece of paper), and select the following fields:
    1. Geo\_FIPS
    2. Geo\_NAME
    3. SE\_T033\_001
    4. SE\_T033\_002
    5. SE\_T033\_003
    6. SE\_T033\_004
    7. SE\_T033\_005
    8. SE\_T033\_006
    9. SE\_T033\_007
4. Right click on the table again, and click on "open" (or use the CTRL-T shortcut)![](images/Employment-Data-view-e1516310782269.png)
5. Let's add this table to our workshop geodatabase. Right click on the table, click "**Data**", and "**Export**"![](images/Export-data-e1516310980190.png)
6. Click on the **yellow folder** button, navigate to your "**workshop.gdb**" geodatabase, and save the table as "**employment**". Choose "**yes**" to add it to your project.![](images/Save-into-geodatabase-e1516311348374.png)
7. Right click on **employment.csv** and remove it from your project

### Zeroing in on a problem with a "leading zero"

Open the attribute table for your employment table. Notice the column Geo\_FIPS. The first record is for Autauga County in Alabama. The Geo\_FIPS is "1001". However, [the "real" FIPS code for Autauga County is "01001"](https://www.nrcs.usda.gov/wps/portal/nrcs/detail/national/home/?cid=nrcs143_013697) (with a leading "0"). Arc interprets the column as numeric, and therefore crops any leading zeroes in the column. This poses a problem when we need to use this column to join the data to another layer with the same FIPS code. The following python code fixes this problem by creating a new column and adding the leading zeroes:

1. Click on the table menu button, and click "**Add Field...**" ![](images/Table-menu-button-e1516314140452.png)
2. Name the new field "**FIPS**", type "**Text**", and Length "**5**" ![](images/FIPS-field-settings-e1516314360489.png)
3. In the table view, right click on the new column header, and click "**Field Calculator**" ![](images/Field-calculator-e1516314596382.png)
4. In the field calculator, choose the "Python" parser, and enter the following formula: str( !Geo\_FIPS! ).zfill(5) ![](images/Python-zero-fill-e1516314778730.png)

### Joining data

Now we are ready to join our employment data to our county layer.

1. Right click on "**us\_counties**", "**Joins and relates**", "**Join...**" ![](images/Joining-data-e1516314901827.png)
2. Choose "**FIPS**" as the field to join, select the "**employment**" table, and also choose "**FIPS**" to base the join on. ![](images/Joining-data-options-e1516315059616.png)
3. Right click on "**us\_counties**" and go to "**Properties**", "**Symbology**". Now... remember the Data Dictionary tab that you opened when you downloaded the data from Social Explorer? Here is where it comes handy, as the data fields are not descriptive. In case you lost the tab, here it is again: ![](images/Table-details-e1516309847621.png)
4. Let's map the nation's unemployment rate. For "**Value**", select "**Unemployed**", or "**SE\_T033\_006**".
5. Let's also normalize the data by the employable population. For "**Normalization**", select "**Population 16 Years and Over**", or "**SE\_T033\_001**" ![](images/Employment-layer-properties-e1516316613304.png)
6. The employment rate in December 2017 is at **4.1%**. Let's build a map that will visually reflects this rate.
7. Click on the "**Classify**" button
8. Select "**Manual**"
9. In the "**Break Values**" box, enter the following breaks: **0.02, 0.04, 0.06, 0.08** ![](images/Employment-classification-e1516316865748.png)
10. Click **OK**. Back in the layer property screen, choose a color ramp that goes from "cold" to "hot". Red colors should generally be used to symbolize problem areas, so flip the colors if necessary (right click on the header "**Symbol**").
11. In the "**Label**" column, label each symbol as follows: ![](images/Employment-color-and-label-properties-e1516317152397.png)

\[TBS\_ALERT color="info" heading="You are done!"\]Your final map should look like this:

![](images/US-Unemployment-e1516317910846.png)

\[/TBS\_ALERT\]

### Part 3: Joining GIS with your research

#### Scenario 1: Point data exists in csv format

Download and open the following "[uspop.csv](https://sandbox.idre.ucla.edu/Workshops/uspop.csv)" file.

This data set happens to have "latitude" and "longitude" columns!

[![](images/2018-01-24-12_36_49-uspop.csv-Excel-e1516826656685.png)](https://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2018/01/2018-01-24-12_36_49-uspop.csv-Excel.png)Let's add the data to our ArcGIS map using the normal "Add data" box.[![](images/2-e1516826610275.png)](https://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2018/01/2.png)Now we will right click on the data and go to Display XY Data[![](images/3-e1516827117337.png)](https://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2018/01/3-e1516827117337.png)You should edit the coordinate system to be WGS 1984

[![](images/4-e1516827165136.png)](https://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2018/01/4-e1516827165136.png)The dialogue box should be as follows:

[![](images/5-e1516827204607.png)](https://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2018/01/5-e1516827204607.png)Click OK and the points should show up!

[![](images/6-e1516827248682-1024x511.png)](https://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2018/01/6-e1516827248682.png)

In order to use the points, you then have to export the points as a shapefile:

[![](images/2018-01-24-12_48_33-Untitled-ArcMap-e1516827075268.png)](https://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2018/01/2018-01-24-12_48_33-Untitled-ArcMap-e1516827075268.png)

Now you can change the symbology:

[![](images/2018-01-24-12_54_44-Untitled-ArcMap-e1516827310354-1024x474.png)](https://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2018/01/2018-01-24-12_54_44-Untitled-ArcMap-e1516827310354.png)

Keep these points for the next scenario!

#### Scenario 2: Join based on unique ID

Say you have new data only based on city names, how would you join it?

Go ahead and download the [uswalkscore.csv](https://sandbox.idre.ucla.edu/Workshops/uswalkscore.csv) file.

Notice that there is no latitude or longitude.

Add the uswalkscore.csv file to our ArcMap project.

[![](images/2018-01-24-13_14_58-Add-Data-e1516828562538.png)](https://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2018/01/2018-01-24-13_14_58-Add-Data-e1516828562538.png)

Now right click on the shapefile from the previous exercise and click Join and Relates and then Join. (Remember!! This can work with other data that already has spatial information, like states or countries)

[![](images/2018-01-24-13_16_20-Untitled-ArcMap-e1516828654760.png)](https://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2018/01/2018-01-24-13_16_20-Untitled-ArcMap-e1516828654760.png)In the following dialogue box, make sure to select "City" for the field that the join will be based on. Then choose the "us\_pop" layer and select the "City" field.

For Join Options, select "Keep only matching records" so that the resulting shapefile contains just the data we connected.

Your dialogue box should look like the following:

[![](images/2018-01-24-13_18_28-Join-Data-e1516828881476.png)](https://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2018/01/2018-01-24-13_18_28-Join-Data.png)Now you can map your data by using the walk score:

[![](images/2018-01-24-13_25_55-Untitled-ArcMap-e1516829261793-1024x452.png)](https://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2018/01/2018-01-24-13_25_55-Untitled-ArcMap-e1516829261793.png)

#### Scenario 3: Locate data based on addresses (geocoding)

The last way to add data is to geocode, because there are now price limitations with geocoding, one simple but midly inaccurate way to geocode is using UCLA's own geocoder:

##### [http://gis.ucla.edu/geocoder](http://gis.ucla.edu/geocoder)

You can see the formatting requirements for UCLA's geocoder which mandates  that specific columns have to be in a particular order.

Once geocoding is done, you can save it as a csv file.

Here is an example of saving it out:

[https://sandbox.idre.ucla.edu/Workshops/geocodeexample.csv](https://sandbox.idre.ucla.edu/Workshops/geocodeexample.csv)

Then add the latitude/longitude as XY coordinates, just like in the first scenario.

### Thanks for attending the workshop!

#### Please fill out the feedback form to see what we can improve upon:

[https://docs.google.com/forms/d/e/1FAIpQLSfZphK7NhCj25FWZLpgdDTm1StDlfI5OOAHO9eSVS2caBIRaQ/viewform](https://docs.google.com/forms/d/e/1FAIpQLSfZphK7NhCj25FWZLpgdDTm1StDlfI5OOAHO9eSVS2caBIRaQ/viewform)

#### For more learning you can check out ESRI's tutorials:

[http://www.esri.com/training/main/training-catalog/course-recommendations](http://www.esri.com/training/main/training-catalog/course-recommendations)
