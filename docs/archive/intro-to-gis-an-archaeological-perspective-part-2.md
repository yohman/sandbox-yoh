---
title: "Intro to GIS: An Archaeological Perspective Part 2"
date: "2019-02-22"
categories: 
  - "workshops"
---

## Intro to GIS: An Archaeological Perspective Part 2

\[TBS\_ALERT color="info" heading="Special Thanks"\] The data used in this workshop has kindly been made available by the University of Jaén.

Name of the project: **Qubbet el-Hawa**  
Institution: **University of Jaén**  
Website: [http://www.ujaen.es/investiga/qubbetelhawa/index.php](http://www.ujaen.es/investiga/qubbetelhawa/index.php)  
Special thanks to **Alejandro Jiménez Serrano** (director of the archaeological project and professor at the University of Jaén), **Luisa García González** (field director and PhD candidate, University of Jaén), and **Patricia Mora Riudavets** (archeological photographer and PhD candidate, University of Alcalá de Henares).  

\[/TBS\_ALERT\]

![QH36-2](images/QH36-2-e1551142291445-1024x490.jpg)

Photo by Patricia Mora

In [Part 1 of the Intro to GIS: An Archaeological Perspective](https://sandbox.idre.ucla.edu/sandbox/intro-to-gis-an-archaeological-perspective-2) series, we covered much ground, mostly around the idea of bringing in archaeological Total Station Data taken in the field, into a digital space that can be controlled by GIS applications. Given that often times data retrieved from a total station is measured in meters and in relative positions, we learned how to "[spatially adjust](http://desktop.arcgis.com/en/arcmap/latest/manage-data/editing-existing-features/about-spatial-adjustment.htm)" the data to their correct spatial coordinates, in this case, using the projection WGS1984 UTM 36N, which is optimal for research conducted in Egypt. We also learned how to "[georeference](http://desktop.arcgis.com/en/arcmap/latest/manage-data/raster-and-images/fundamentals-for-georeferencing-a-raster-dataset.htm)" image data, specifically, field drawings that were then "placed" in their correct spatial location that would then match up with the spatially adjusted total station data points.

## Review Session

Here in Part 2 of this series, we begin with a review session of Part 1. You are tasked to do the following:

- spatially adjust a new set of points taken from the total station
- georeference an architectural plan that corresponds to these points

### Getting Started

To begin, download the following workshop data and unzip it to a local folder on your hard drive.

[Workshop Data](https://ucla.box.com/s/wp5npiuutkmm3vbg6ft1jjpzhkjf88ov)

Open ArcMap. Add a [folder connection](http://desktop.arcgis.com/en/arcmap/latest/map/working-with-arcmap/using-folder-connections.htm) to the folder (**ArchaeologyWorkshop2**) that contains the new data you just downloaded.

Add (drag) the following data layers into your ArcMap project, in this order:

- EgyptGIS.gdb -> C7
- EgyptGIS.gdb -> C9
- QH35P.dxf
- aswan\_google\_satellite.jpg
- QH36\_C7.jpg
- QH36\_C9.jpg

Double check your coordinate system. Go to **Layers**, **Properties**, **Coordinate System** tab, and make sure **Current Coordintate System** is set to **WGS\_1984\_UTM\_Zone\_36N**. If not, navigate through the **Projected Coordinate Systems** to set it.

Change the symbols for C9 and C7 to make them more visible on the map (ex: bright green and red circles, size 10). Your project should now look like this:

![getting-started-part-2](images/getting-started-part-2-e1551289317885-1024x496.png)

### Review Part 1: Spatial Adjustment Revisited

We have a new set of points derived from the Total Station. Same as the previous workshop, we need to spatially adjust these points to place them in their correct location.

#### Adding total station data and saving it into a geodatabase

1. Add **QH35P.dxf** to the map project in ArcMap
2. Expand the group layer and right click on **QH35P.dxf Point, Data, Export Data...**

![save-points-to-geodatabase](images/save-points-to-geodatabase-e1551119050336.png)

Save the **QH35P** points to the **EgyptGIS.gdb**, making sure to select **the data frame** for the coordinate system. When prompted, add it to your current project.

![export-data-2](images/export-data-2-e1551119493157.png)

Delete the **QH35P.dxf Group Layer** from your table of contents.

#### Style your points

Right click on **QH35P** and **zoom to layer**.

Change the style of the points by 1) clicking on the symbol, 2) choose "**Circle 2**", 3) choose a **blue** color, and 4) set the size to **10**.

![change-point-style](images/change-point-style-e1551120031170.png)

#### Add the toolbars

Turn on the Editor toolbar (Customize, Toolbars, Editor).

Click on the Editor drop down menu, and select Start Editing.

![](images/start-editing-e1549914513218.png)

Turn on the **spatial adjustment** toolbar (**Customize**, **Toolbars**, **Spatial Adjustment**).

On the toolbar, Set Adjust Data...

![set-adjust-data](images/set-adjust-data-e1549934952900.png)

#### Start "adjusting"

Choose **All features in these layer**s, and only select **QH35P** (remember that the other two layers have already been adjusted).

![](images/choose-input-for-adjustment-e1551120850174.png)

Choose the **New displacement link tool.**

![](images/New-Displacement-Link-Tool-e1549933268375.png)

Displace the three reference points as shown below:

![displacing-QH35P](images/displacing-QH35P-e1551121063248.png)

Bring up the link table.

![Open-the-link-table](images/Open-the-link-table-e1549934105585.png)

Enter the same reference point coordinates as we did in part one of the workshop

Add the following coordinates to the link table\*

<table class="wp-block-table"><tbody><tr><td>Reference point</td><td>x</td><td>y</td></tr><tr><td>1</td><td>488828.660</td><td>2665694.686</td></tr><tr><td>2</td><td>488832.470</td><td>2665708.021</td></tr><tr><td>3</td><td>488823.844</td><td>2665703.100</td></tr></tbody></table>

![](images/Link-Table-1-e1549934632660.png)

\* _These numbers are estimates created for the sole purpose of this workshop, and are not reflective of the real numbers derived from the total station._ 

Finalize the adjustment:

![](images/adjust-e1549935231144.png)

Your data disappears from your screen. But don’t panic! It just means that it has warped (or spatially adjusted) itself to its new location.

#### Recalculate feature boundaries

When data is “adjusted” spatially, the boundaries are modified. ArcMap does not record the new extent automatically. Let’s recalculate the boundaries for our C7 and C9 layers. This will allow us to easily navigate to each layer in our project

1. Bring up the search window (**Ctrl-F**)
2. Type “**Recalculate extent**” in the search box
3. Click on “**Recalculate Feature Class Extent**“
4. Select **QH35P**for the input features and click OK
5. Right click on **QH35P** from the table of contents, and **Zoom to Layer**

![QH35P-adjusted](images/QH35P-adjusted-e1551122605943-1024x563.png)

### Review Part 2: Georeference a site plan

Turn on the georeferencing toolbar.

![](images/georeferencing-toolbar-e1550014209651.png)

Add **QHSitePlan.png** to the project. If prompted to build pyramids, say yes.

Make sure that QHSitePlan.png is selected in the toolbar, and fit to display.

![fit-to-display-1](images/fit-to-display-1-e1551123817428.png)

We will use just two points to georeference this site plan.

Select the Add control points tool.

![](images/add-control-point-button-e1550079950192.png)

Click on the point labeled "**1**" below, and click again to its corresponding place in the satellite image. Repeat for the point labeled "**2**":

![georeference-points-for-site-plan-1](images/georeference-points-for-site-plan-1-e1551290857538.png)

#### Finetuning your georeference points

If you need to adjust your control points, click on the Select Link tool, and move the control points accordingly.

![select-link-in-georeferencing-toolbar](images/select-link-in-georeferencing-toolbar-e1551124302380.png)

**Update Georeferencing** to save your work.

![update-georeferencing-1](images/update-georeferencing-1-e1551124507223.png)

Your project should now look like this:

![site-plan-georeferenced](images/site-plan-georeferenced-e1551124404550-1024x690.png)

## Adding New Objects

![Photo of QH35P](images/QH35P-e1551209569720-1024x680.jpg)

Photo by Patricia Mora

We now have our total station points spatially adjusted, layered on top of a georeferenced site plan. Using our GIS platform, let's create a brand new layer for object points, and use the map to generate these points of inquiry.

To add a new empty layer (called a [feature class](http://desktop.arcgis.com/en/arcmap/latest/manage-data/geodatabases/feature-class-basics.htm)):

1. Open the **Catalog** tab window, and right click on **EgyptGIS.gdb**
2. Click on **New**
3. Select **Feature Class...**

![](images/new-feature-class-in-geodatabase-e1551130513488.png)

Enter **Observations** for the name, and select **Point Features** for the type of feature class to create.

![new feature class window](images/new-feature-class-window-1-e1551142493429.png)

For the coordinate system, choose **Projected Coordinate Systems, UTM, WGS 1984, WGS 1984 UTM Zone 36N**

![wgs 1984 utm 36n](images/wgs-1984-utm-36n-e1551142958813.png)

Accept the defaults for **XY Tolerance** and **Database storage**. For the attribute table, enter a new field for "**Name**", and give it a "**Text**" datatype.

![new-feature-class-attributes](images/new-feature-class-attributes-e1551143205464.png)

Your new feature class layer should appear in the table of contents.

1. Click on the default symbol
2. Scroll down and choose the green star
3. Change the color to yellow
4. Make it big!

![new-feature-class-star-symbol](images/new-feature-class-star-symbol-e1551144218559.png)

In the editor toolbar, select the **Create Features** tool. The right sidebar should now be activated with a new tab.

![create-feature-button](images/create-feature-button-e1551145324418.png)

Select the feature class that you just created, **Observations**.

**IMPORTANT!** If you do not see your new feature class listed, stop and start the editor to refresh the list.

Under Construction Tools, make sure that **Point** is selected.

![create-feature-point](images/create-feature-point-e1551208735646.png)

Follow these steps to create an observation point.

1. Zoom in to an area of interest around the southeast section of the site plan, and add an observation point.
2. In the **Editor** toolbar, activate the **Attributes** panel.
3. In the Attributes panel, enter a name for your observation.

![add-new-observation-attributes](images/add-new-observation-attributes-e1551211008775.png)

Repeat these steps to create as many observations as you would like.

In the editor toolbar, Stop Editing to save your new observation points.

## Attaching photos and documents

You would like to use your GIS project to attach relevant photos and documents to your field observations.

ArcGIS calls the process of attaching media to objects "[Enabling Attachments](http://desktop.arcgis.com/en/arcmap/latest/manage-data/editing-attributes/enabling-attachments-on-a-feature-class.htm)." Follow these steps to get started:

1. Enable the **Catalog** panel (Windows, Catalog)
2. Right click on your **Observations** feature class
3. Go to **Manage**
4. **Create Attachments**

![create-attachments](images/create-attachments-e1551212670548.png)

In the Editor toolbar, Start Editing and select the edit tool:

![edit-tool-from-toolbar](images/edit-tool-from-toolbar-e1551213005847.png)

  

1. Click on an object that you created in your **Observations** feature class.
2. Activate the **Attributes** side panel
3. Click on the **Attachment clip**
4. Click the **Add** button and attach the file **Object 1.jpg** (or any relevant image file you can find)
5. Click **OK** and Stop your Editor session

![adding-an-attachment](images/adding-an-attachment-e1551292090254-1024x508.png)

### Viewing attachments

Attachments are stored in a relational database within ArcMap. You can therefore attach as many documents to any number of objects. Viewing attachments, however, is not as easy as you may think. One way is to use the **Identify** tool:

1. Select the **Identify** tool
2. Click on an object with attachments
3. Select the **attachment** clip
4. Double click on an attachment to view its contents

![viewing-attachments-using-the-identify-tool](images/viewing-attachments-using-the-identify-tool-e1551293241448-1024x517.png)

Alternatively, you can view attachments using the **HTML popup** window as shown below:

![html-popup-window](images/html-popup-window-e1551214234167.png)

## Publishing

ArcGIS provides the bare minimum functions to produce publishable maps. To produce professional quality maps, it is highly recommended to export the map into Adobe Illustrator and apply additional design elements for publication purposes.

With that in mind, let's look at the publication functions provided by ArcMap. By default, ArcMap opens in "**Data View.**" Switch to "Layout View" by going to **View**, **Layout View**, or by clicking on the Layout View button as shown below (1).

![layout-view](images/layout-view-e1551220809306-1024x688.png)

Your window will now look like a piece of paper with a re-sizable map positioned within it. A Layout toolbar is also activated (2).

Go to the Insert menu option (3) and inspect all the different elements that you can add to your map.

Now go about it! Create your own personalized layout of the map.

![print out view](images/EgyptWeek2-e1551222500715-791x1024.jpg)
