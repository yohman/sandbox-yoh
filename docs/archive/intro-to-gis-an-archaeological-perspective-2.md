---
title: "Intro to GIS, An Archaeological Perspective"
date: "2019-02-06"
categories: 
  - "workshops"
---

## Intro to GIS: An Archaeological Perspective

\[TBS\_ALERT color="info" heading="Special Thanks"\] The data used in this workshop has kindly been made available by the University of Jaén.

Name of the project: **Qubbet el-Hawa**  
Institution: **University of Jaén**  
Website: [http://www.ujaen.es/investiga/qubbetelhawa/index.php](http://www.ujaen.es/investiga/qubbetelhawa/index.php)  
Special thanks to **Alejandro Jiménez Serrano** (director of the archaeological project and professor at the University of Jaén), **Luisa García González** (field director and PhD candidate, University of Jaén), and **Patricia Mora Riudavets** (archeological photographer and PhD candidate, University of Alcalá de Henares).  

\[/TBS\_ALERT\]

![](images/sergio-in-aswan-e1550084765566-1024x665.jpg)

## Part 1: Introduction to GIS and ESRI

### Gettin' down and dirty with ESRI

The first step in this tutorial is to understand that we are covering the basics of desktop GIS analysis using ESRI's ArcGIS software suite. This is by no means an all encompassing "entirety of GIS" tutorial, but rather a view on how GIS can be used to build maps from ESRI's perspective, limited by the functionalities of the software being covered. There are many other tools you may want to consider to do your spatial analysis, including [R](http://spatial.ly/r/), Python, [Carto](https://carto.com/), [Mapbox](https://www.mapbox.com/), [D3](https://d3js.org/), and [qGIS](https://www.qgis.org/en/site/).

The core function of the ESRI ArcGIS suite lies within two programs:

1. ArcCatalog - for managing GIS datasets
2. ArcMap - for mapping GIS datasets
3. ArcScene - for 3D mapping

![arcgis icons](images/arcgis-icons-1-e1550260015966.png)

\[TBS\_ALERT color="info" heading="What about OpenSource alternatives?"\]

[QGIS](http://www.qgis.org/en/site/) is as an alternative to ArcGIS that is free and openly available to the public on all computing platforms. Despite the accessibility of QGIS, there is a steeper learning curve for those learning GIS for the first time. However, those seeking a free low-cost alternative to ArcGIS can apply the concepts learned in this workshop with that program.

\[/TBS\_ALERT\]

### Hello Data

A GIS dataset can be any of the following:

1. a vector layer - points, lines or polygons
2. a raster layer - a drawing (image), Satellite imagery, elevation data
3. tabular data - excel spreadsheet, csv, etc.
4. AutoCAD data - .dxf export from an Electronic Total Station

Our workshop data contains multiple files and can be downloaded here:

[Workshop Data Download Link](https://sandbox.idre.ucla.edu/workshops/data/ArchaeologyWorkshop.zip)

Create a project folder in your harddrive, and download and unzip ArchaeologyWorkshop.zip. You will learn how to inspect the geodatabase data in ArcCatalog, then use ArcMap to create some maps.

Here is a look at our workshop data:

ArchaeologyWorkshop  
|--C7.dxf  
|--C9.dxf  
|--QH35P.dxf  
|--QH36\_C7.jpg  
|--QH36\_C9.jpg  
|--aswan\_google\_satellite.jpg

### Connecting a folder in ArcCatalog

Open ArcCatalog, find the top menu bar, and click the second button to the left, which is the "Connect Folder" button.

![ArcCatalog3](images/ArcCatalog3.png)

Navigate to the **Folder** where you extracted the "workshopData2018.zip" file and then select "OK".

\[TBS\_ALERT color="danger" heading="Do not try to connect a file!"\]If you try to connect files, you will notice that the "OK" button is grayed out, connecting folders allows you only to choose folders.\[/TBS\_ALERT\]

### View and Preview the data

After you've connected the folder, you can check **Folder Connections** and open the Folder which you've connected. Locate "ArchaeologyWorkshop " and expand its contents. Click on the **aswan\_google\_satellite** raster. It should look like this:

![arccatalog-workshop-data](images/arccatalog-workshop-data-e1550260415713.png)

## Part 2: Hello Egypt: Setting the projection

![](images/Africa.png)

Source: https://www.xmswiki.com/wiki/UTM\_Coordinate\_System

Geographic coordinate systems are typically measured in decimal degrees, and are useful when your data is global and/or comes with latitude and longitude coordinates. However, because of its angular units, it is not recommended for spatial analysis. Instead, one should consider using a projected coordinate system that is suited to the region of analysis.  Given that we are only working with **Egypt** based data, let's set our projection to the following UTM zone that is specifically optimized for our region of interest:

- WGS 1984 UTM Zone 36N

\[TBS\_ALERT color="danger" heading="So what does UTM 36N look like?"\] There are 60 longitudinal UTM Grid Zones of the World, numbered 1 to 60 starting at 180°W. Each of these zones is 6 degrees wide, apart from a few exceptions around Norway and Svalbard ([source](http://www.dmap.co.uk/utmworld.htm)). So what does UTM 36N look like? As you can see from the map below, it prioritizes a small (6 degree) sliver of the Earth with Egypt positioned within it. The green circle represents the 0,0 center of the zone.

![](images/utm36n-791x1024.jpg)

\[/TBS\_ALERT\]

### Launching ArcMap

The time has come to fire up ArcMap and take the first step to become a digital cartographer. If prompted with a **Getting Started** window, click **Cancel**.

Take note of the layout:

![](images/arcmap-layout-e1550599569967.png)

1. Menu items and shortcut buttons
2. Table of content options
    - List by source is on by default
    - Switch to **List by drawing order** when reordering layers
3. Layers
    - This is where your data layers will show up
4. Map Canvas
5. ArcCatalog tab
6. Search tab

### Setting the projection

Let's set our projection with this in mind:

1. Right click on "**Layers**" and go to "**properties**" (or just double click on "Layers")
2. Select the "**Coordinate Systems**" tab
3. Go to "**Projected Coordinate Systems**", "**UTM**", "**WGS 1984**", "**Northern Hemisphere**", and choose "**WGS 1984 UTM Zone 36N**"
4. Click on the "Add to favorites" button to save this projection

![](images/set-projection-2-e1549478766774.png)

\[TBS\_ALERT color="danger" heading="It's on the fly!"\]The software will warn you that you are projecting your datasets on the fly (note that it is not _reprojecting_ the actual data, it is doing so only within the scope of this project space). If you want to perform spatial analysis, it is recommended that all layers in your project be reprojected to an appropriate coordinate system. More information on how to do this can be found [here](https://support.esri.com/en/technical-article/000004886).\[/TBS\_ALERT\]

## Part 3: Adding Data in ArcMap

There are two ways to add data to your ArcMap project.

1. Click on the **Add Data** button, or...
2. Click on the **Catalog tab**, and drag your data into the canvas

![arcmap add data](images/arcmap-add-data-e1550600677548.png)

### Adding data from a Total Station

![sergio-with-total-station](images/sergio-with-total-station-1024x684.jpg)

Data from an archaeological fieldwork site is typically collected from an Electronic Total Station. In this workshop we will focus on data collected and extracted in the AutoCAD format having a .dxf file extension. When exploring dxf files in ArcCatalog, a single file expands to reveal the following subsections:

![](images/dxf-subsections-2-e1549481275318.png)

Dragging the dxf file, in this case, **C7\_1.dxf**, into the ArcMap project window will draw the layer. Repeat this process for both **C7** and **C9**. Click **OK** if you get an **Unknown Spatial Reference** warning (more on this later).  

![](images/add-dxf-to-arcmap-e1549481535585-1024x688.png)

Expand the Group layers in the table of contents on the left. Each dxf subsection is displayed as a separate layer with a checkbox that can be turned on or off.

  
\[TBS\_ALERT color="danger" heading=" It's only in memory!"\]While ArcMap does a wonderful job to display the raw dxf data, this visual representation is only recorded in memory. In order to modify and work with this data, we must copy and transform the data to a GIS format. We will use a _geodatabase,_ a format that is widely used and supported in ArcGIS projects.\[/TBS\_ALERT\]

### Adding Total Station Data to a geodatabase

Create a [**geodatabase**](http://desktop.arcgis.com/en/arcmap/latest/manage-data/geodatabases/what-is-a-geodatabase.htm). Essentially, a geodatabase is a container of spatial data, it will allow us to store multiple spatial layers used in our project into a single geodatabase.

1. Click the **Catalog** Tab
2. Right click on the parent folder where you want to create your geodatabase (in this case, it will be your **ArchaeologyWorkshop** folder)
3. Go to **New, File Geodatabase, New File Geodatabase**
4. Rename the geodatabase to **EgyptGIS.gdb**.

![](images/create-geodatabase-e1549482694329.png)

Before moving on, make this geodatabase the DEFAULT geodatabase for our project. This is generally good practice, and will save us time in future steps.

1. Go to **File**, **Map Document Properties**
2. At the bottom, change the **Default Geodatabase** to **EgyptGIS.gdb**.
3. Also, change **Pathnames** to "**relative**" by clicking on the checkbox

![](images/change-default-database-e1549497062143.png)

Next, add the total station point data to the newly created geodatabase.

1. Expand the **C7** and **C9** layers to reveal their contents in the table of contents
2. Right click on **C7.dxf Point, Data, Export Data.**..

![](images/export-CAD-to-geodatabase-e1549495972898.png)

In the Export Data dialog box:

1. Use the coordinate system as: **the data frame <- VERY IMPORTANT!**
2. choose the **EgyptGIS.gdb** and name your data "**C9**"

![](images/export-data-1-e1549655575470.png)

Repeat for **C9**. Remove the original dxf files from your project.

## Part 4: Spatial Adjustment, Let's fly to Egypt!

Although we have set our projection to a UTM that is based in Egypt, the data from the Total Station are mapped relative to the total station. When we load the data in ArcMap onto a UTM 36N project, it positions our data relative to the 0,0 point of origin. We will now need to "snap" the data points to their correct locations.

![](images/spatial-adjustment-overview-e1549913242487.png)

### Editor: On!

Turn on the "**Editor**." This is a necessary step in order to start to "edit" our data, as we are set to move our data points to a new location.

Go to **Customize**, **Toolbars**, **Editor**

![](images/editor-toolbar-e1549914333199.png)

In the editor toolbar, click on **Editor, Start Editing**

![](images/start-editing-e1549914513218.png)

### Spatial Adjustment Toolbar: On!

Enable the **Spatial Adjustment** toolbar. Go to **Customize, Toolbars, Spatial Adjustment**

![](images/spatial-adjustment-toolbar-e1549914754556.png)

We are ready to spatially adjust our data. Choose the data to adjust.

![](images/set-adjust-data-e1549934952900.png)

![](images/choose-data-to-adjust-e1549934818977.png)

Center the data points in your screen by right clicking on either **C9** or **C7**, and go to **Zoom to layer.** There are three reference points used in this project.

![](images/reference-points-e1549559923280.png)

In the Spatial Adjustment toolbar, click on the **New Displacement Link t**ool

![](images/New-Displacement-Link-Tool-e1549933268375.png)

Hover over point 1. It should now highlight the point with the label "**C9 point**"

![](images/hover-point-in-spatial-adjustment-e1549933646208.png)

Move the mouse off of the point. An arrow should show up. Click to position the point away from the original point. Do not worry about where it is positioned at the moment.

![](images/spatial-adjustment-arrow-e1549933869311.png)

Repeat the process for all three reference points.

![](images/repeat-3-points-spatial-adjustment-e1549933995247.png)

Open the link table.

![](images/Open-the-link-table-e1549934105585.png)

Add the following coordinates to the link table\*

<table class="wp-block-table"><tbody><tr><td>Reference point</td><td>x</td><td>y</td></tr><tr><td>1</td><td>488828.660</td><td>2665694.686</td></tr><tr><td>2</td><td>488832.470</td><td>2665708.021</td></tr><tr><td>3</td><td>488823.844</td><td>2665703.100</td></tr></tbody></table>

![](images/Link-Table-1-e1549934632660.png)

\* _These numbers are estimates created for the sole purpose of this workshop, and are not reflective of the real numbers derived from the total station._ 

Finalize the adjustment:

![](images/adjust-e1549935231144.png)

Your data disappears from your screen. But don't panic! It just means that it has warped (or spatially adjusted) itself to its new location.

Add the satellite image **aswan\_google\_satellite.jpg** to your map. Right click on it from the table of contents, and **Zoom to Layer**. Zoom in further to the extent of the data points.

![](images/aswan-with-data-points-e1549935751303.png)

### Recalculate feature boundaries

When data is "adjusted" spatially, the boundaries are modified. ArcMap does not record the new extent automatically. Let's recalculate the boundaries for our C7 and C9 layers. This will allow us to easily navigate to each layer in our project

1. Bring up the search window (**Ctrl-F**)
2. Type "**Recalculate extent**" in the search box
3. Click on "**Recalculate Feature Class Extent**"
4. Select **C9** for the input features and click OK
5. Right click on **C9** from the table of contents, and **Zoom to Layer**
6. Repeat for **C7**

## Midterm Exercise

Practice makes perfect. In your workshop data folder, find the autocad file QH35P.dxf. Repeat the steps above to spatially adjust the data. Here are some helpful tips to get you going:

- Note that QH35P, like C7 and C9, also has the same three reference points to help you adjust your data
- Make sure to export and save the data into your geodatabase _before_ you start spatial adjustment
- Also make sure to export the data using the coordinate system of the Data Frame (not the layer's source data)

## Part 5: Georeference field drawings

![](images/QH36_C9-1-1024x859.jpg)

The above drawing was authored by Sergio during his fieldwork in Aswan. It is drawn to scale, with great attention to detail. Each data point collected by the total station is marked clearly with a "+" sign, as indicated in the following zoomed in view:

![](images/sergio-and-his-xs-e1550012786314.png)

The challenge then lies in overlaying this sketch to match the data points collected by the total station, the results of which would greatly enhance the visual reproduction of our archaeological site.

### The georeferencing toolbar

Much like the spatial adjustment toolbar (which allowed us to "move" vector data), the georeferencing toolbar allows us to "move" raster data. Since our sketch is a scanned jpeg image, we will use the georeferencing toolbar to scale and rotate it to its correct spatial location.

Go to **Customize**, **Toolbars**, **Georeferencing** to enable the georeferencing toolbar. Notice that most of the functions are grayed out for now.

![](images/georeferencing-toolbar-e1550014209651.png)

### Bring in the sketch!

Add Sergio's beautiful field sketch, **QH36\_C9.jpg** from the workshop data folder, into the ArcMap window.

\[TBS\_ALERT color="info" heading="Where is my image?"\]

When the image is first added to ArcMap as a jpg (or other image formats like tiff's or png's), it has no spatial reference. In other words, it does not know where it is in the world. ArcMap automatically assigns the top left corner of the image to the 0,0 point of origin of the current map layout. Each pixel is given one meter in length, so an image that is 4000 pixels wide would stretch from (0,0) to (4000,0).

\[/TBS\_ALERT\]

Now let's georeference this image. Right click on the **C9** layer of points from the table of contents, and **Zoom to Layer.**

1. In the Georeferencing toolbar, you should now see **QH36\_C9.jpg** selected in the dropdown box.
2. Click on the Georeferencing menu dropdown, and select **Fit To Display**

![](images/fit-to-display-e1550016757153.png)

The drawing should now be "placed" on the map.

![](images/placed-image-for-georeferencing-e1550016929959.png)

The drawing is placed within the current window, making it easier to see it in reference to the total station reference points. Now we want to match the drawing to our points. There is no "correct" way to do this per se, but we will try to match three points from three corners of our drawing.

### Control point #1

Zoom in to the tip of the "finger" (bottom left). Our first control point will be the point circled below.

![](images/first-control-point-e1550079761469.png)

1. On the georeferencing toolbar, select the **Add control point** button
2. Click on our first control point location

![](images/add-control-point-button-1-e1550080158894.png)

Zoom out (use the scroll wheel), and pan the map (hold down "c") to the location of the **C9** total station points. Find the matching dot and click to record the first control point.

![](images/first-control-point-match-e1550081606500.png)

### Control point #2

Zoom back out and zoom into the bottom right corner of the sketch. Locate the following point, and mark it as a new control point.

![](images/second-control-point-e1550081761918.png)

Zoom back out and back in to the matching total station point, and click to record our second control point. Are you getting the hang of this now?

![](images/second-control-point-match-e1550082540719.png)

### Control point #3

For our final control point, zoom out and in to the top left corner of our drawing, which has now been scaled and rotated based on our first 2 control points. It is almost, but not quite, perfectly situated, so let's make a final adjustment. Click on a crosshair from the drawing (1) and click on the total station dot next to it (2).

![](images/third-control-point-e1550082903975.png)

Zoom out to observe your work, and marvel at Sergio's immaculate field sketch precision.

![C9-georeferenced](images/C9-georeferenced-e1550083080599.png)

The final - and important - step is to save your georeferenced image. Go to the georeferencing toolbar and **Update Georeferencing.** This ensures that your work is saved.

![](images/update-georeferencing-e1550617249772.png)

## Final Exercise

More practice makes more perfect! Find the image file QH36\_C7.jpg in the workshop data folder, and repeat the steps to georeference the image to the C7 total station points.

- Don't forget to "fit to display" to make the process easier
- Choose at least three points from the sketch as reference points to georeference the image
