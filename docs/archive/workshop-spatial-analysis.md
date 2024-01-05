---
title: "Workshop: Spatial Analysis"
date: "2018-02-14"
categories: 
  - "workshops"
---

Network analysis, using vector based data layers, can be useful to determine precise routing directions on a given road network. Here, we will determine best routes between destinations using raster datasets that determine cost based on cumulatively calculated cell values. We will use ESRI's Spatial Analyst tools to perform least cost path analysis.

To begin, download the workshop geodatabase here:

- [Spatial Analyst Workshop Geodatabase](http://sandbox.idre.ucla.edu/workshops/sa_workshop2018.gdb.zip)

### Setting up your project

Through the process of this workshop, you will be creating many new data layers. It is always good practice to designate a path to the geodatabase that you will use to store the layers.

1. Go to File, Map Document Properties...
2. Change the default geodatabase by finding the path to the workshop geodatabase you just downloaded.
3. Also click on the checkbox next to Store relative pathnames to data sources ![](images/sa-map-document-properties-e1518639638350.png)

### Load your layers and set your environment for analysis

1. From the workshop geodatabase, add the following layers to the map (you can drag and drop them from the ArcCatalog side panel on the right:
    1. la
    2. ny
    3. us\_rail
    4. us\_roads
    5. us\_state\_capitals
    6. us\_states
2. Go to Geoprocessing, Environment
    1. Set the Processing Extent to us\_states
    2. Set Raster Analysis, Cell Size to 10000 (meters)
    3. Set Mask to us\_states ![](images/sa-environment-settings-e1518641520884.png)

\[TBS\_ALERT color="info" heading="What are my units?"\]

Are we using feet? Inches? Miles? Or are we more non-American and using meters and kilometers? Your cell sizes and measurements in spatial analysis are dictated by what you chose as the coordinate system for your project. The layers in this workshop's geodatabase have all been projected to USA Contiguous Albers Equal Area Conic USGS, which has a linear unit of Meters.

![](images/sa-current-coordinate-system-e1518716634789.png)

\[/TBS\_ALERT\]

### As the crow flies... Euclidean Distances and Allocations

How clustered are our state capitals? Which areas of our country are not even remotely close to a state capital? We can visually depict distances from any location in the country to their closest state capital by creating raster layers with cell data with distance measure.

1. Open the search box and enter **euclidean distance**
2. Click on the **Euclidean Distance (Spatial Analyst)** tool
    1. For input raster, choose **us\_state\_capitals**
    2. For output raster, choose your geodatabase, and name it **us\_state\_capitals\_euclidean**
    3. Maximum distance: **500000**
    4. For output cell size, enter **10000 ![](images/sa-euclidean-distance-values-1-e1518809963917.png)** 

 

\[TBS\_ALERT color="info" heading="What does the map tell us?"\]![](images/sa-euclidean-map-e1518656157318.png)

Examine the map and explain what you are able to observe. What do the colors represent? What does that tell us about the spatial distribution of our state capitals? Which city is not within 500km of a state capital?

\[/TBS\_ALERT\]

Now, what if we were to redraw our state boundaries? And what if we were asked to do so in away that every single location in the country was allocated to its closest state capital?

1. Open the search panel, and enter **euclidean allocation**
2. Click on the **Euclidean Allocation (Spatial Analyst)** tool
    1. For input raster, **us\_state\_capitals**
    2. For source field, **NAME**
    3. Name the output allocation raster **us\_state\_capitals\_allocation**
    4. For output cell size, enter **10000**

![](images/sa-euclidean-allocation-values-e1518657029747.png)

\[TBS\_ALERT color="info" heading="What does the map tell us?"\]

![](images/sa-euclidean-allocation-e1518657094580.png)

Examine the map and explain what you are able to observe. What do the colors represent? What state would Los Angeles be in?

\[/TBS\_ALERT\]

### Finding the "cheapest" route between two cities

First, convert the layers that we will use for our cost analysis into rasters. For this workshop, we will convert our roads and railways.

1. In the search box, enter **Feature to Raster** and click on the tool
    1. Input features: **us\_roads**
    2. Field: **NewClass**
    3. Output raster: **us\_roads\_raster**
    4. Output cell size: **10000**
2. Repeat the process but perform it with us\_rail
    1. Input features: **us\_rail**
    2. Field: **Class**
    3. Output raster: **us\_rail\_raster**
    4. Output cell size: **10000**

In order to calculate the accumulated cost distance from LA, we need to create two rasters: one for distance, and one for direction. This will allow us to later calculate the least cost path from LA to any destination in the US.

1. Search for cost distance and click on the tool
    1. Input source: **la**
    2. Input cost raster: **us\_roads\_raster**
    3. Output distance raster: **CostDistance\_LA\_roads**
    4. Output backlink raster: **CostDirection\_LA\_roads** ![](images/sa-cost-distance-parameters-2-e1518810643870.png)
2. Also create the cost distance rasters for the railways:
    1. Input source: **la**
    2. Input cost raster: **us\_rail\_raster**
    3. Output distance raster: **CostDistance\_LA\_rail**
    4. Output backlink raster: **CostDirection\_LA\_rail**

Finally, we are ready to calculate the least cost path between Los Angeles and New York.

1. Search for **cost path** and click on the tool
    1. Input raster destination: **ny**
    2. Destination field: **OBJECTID**
    3. Input cost distance raster: **CostDistance\_LA\_roads**
    4. Input cost backlink raster: **CostDirection\_LA\_roads**
    5. Output raster: **CostPath\_LA\_NY\_roads** ![](images/sa-cost-path-la-ny-roads-e1518724367977.png)
2. Repeat the steps for the railways
    1. Input raster destination: **ny**
    2. Destination field: **OBJECTID**
    3. Input cost distance raster: **CostDistance\_LA\_rail**
    4. Input cost backlink raster: **CostDirection\_LA\_rail**
    5. Output raster: **CostPath\_LA\_NY\_rail**

\[TBS\_ALERT color="info" heading="What does the map tell us?"\]

![](images/sa-cost-path-map-e1518724599880.png)

Which path has a higher cost? How many state capitals does each path travel through?

\[/TBS\_ALERT\]

\[TBS\_ALERT color="alert" heading="Where can I find out more?"\]

Find out more about cost distance analysis [here](http://desktop.arcgis.com/en/arcmap/10.5/tools/spatial-analyst-toolbox/how-the-cost-distance-tools-work.htm).

\[/TBS\_ALERT\]
