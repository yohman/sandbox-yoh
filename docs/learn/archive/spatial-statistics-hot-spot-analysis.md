---
title: "Spatial Statistics: Hot spot analysis"
date: "2018-04-06"
categories: 
  - "workshops"
---

Hot spot analysis is a great tool that allows us to pinpoint the location of clustering and dispersion in our data. This is especially helpful when we are dealing with lots of data incidents, such as crime data over time, where many incidents overlap one another, making it difficult to visually determine exactly where the "hot" and "cold" spots are in our data. It is also useful for temporal analysis, helping us determine seasonal locational shifts in the data being examined.

For this workshop, we will be using crime data downloaded from the Los Angeles Data Portal:

- [Los Angeles Crime Data](https://data.lacity.org/A-Safe-City/Crime-Data-from-2010-to-Present/y8tr-7khq)

For the purposes of the workshop, the data has been cleaned up, divided into separate layers per year, and converted into a geodatabase. Download the following class data to your local drive.

- [Class geodatabase](https://sandbox.idre.ucla.edu/workshops/data/spatialstats.zip)
    - la\_neighborhoods
    - la\_crime\_2010
    - la\_crime\_2011
    - la\_crime\_2012
    - la\_crime\_2013
    - la\_crime\_2014
    - la\_crime\_2015
    - la\_crime\_2016
    - la\_crime\_2017

\[TBS\_ALERT color="info" heading="Is your data projected?"\]

Geoprocessing should always be conducted with **_projected_** data. If your data is not projected, ie, it is in a geographic coordinate system (with coordinates in decimal degrees), make sure to project your data first. The data in this tutorial was originally downloaded from the LA Open Data Portal, with crime incidents recorded in decimal degrees (latitude and longitude degrees). This data was then projected to  UTM N Zone 11 to conform to a preferred projection for data in Los Angeles. If you are using your own data, make sure to project it to the region your data belongs to.

\[/TBS\_ALERT\]

### Setting up your project

Through the process of this workshop, you will be creating many new data layers. It is always good practice to designate a path to the geodatabase that you will use to store the layers.

1. Go to **File, Map Document Properties...**
2. Change the default geodatabase by finding the path to the workshop geodatabase you just downloaded.
3. Also click on the checkbox next to **Store relative pathnames to data sources** ![](images/sa-map-document-properties-e1518639638350.png)

We will also be performing various geoprocessing tasks. In order to make it easy for us to interpret our results in real time, let's "disable" background processing of our geoprocessing tasks.

1. Click on Geoprocessing from the menu, and go to Geoprocessing options ![](images/image-e1523405673365.png)
2. Make sure that Background Processing is unchecked![](images/image-1-e1523405797504.png)

## Is there clustering?

![](images/GUID-5CCEE7E5-839C-46E8-A88B-FCD02F07B209-web.gif)

In order to begin hot spot analysis, we must first determine whether, statistically speaking, there is clustering evident in our data. One approach to do so is to run our data through the Spatial Autocorrelation (Global Moran's I). This tool helps us determine whether or not our data is randomly distributed or not. In other words, what are the chances that the incidents in your data are located where they are randomly? Or perhaps, are there certain incidents located closer to other incidents? And what may explain this clustering? Let's find out if the data we will use in this class (crime data in Los Angeles) has evidence of clustering or dispersion.

### Choose a neighborhood

We could perform our hot spot analysis on the entire dataset, but two reasons prevent us from doing so. One, the data is very big (hundreds of thousands of records), and performing large scale statistical analysis on this amount of data will be very time consuming. Second, the scale is too big, meaning, that we would not get much variation at the local level. For the purposes of this tutorial, we will work at the neighborhood level, to allow us to see hot spots within individual neighborhood. Let's begin by load the following layers to our map:

- **lacity\_neighborhoods**
- **la\_crime\_2010**

Once loaded, turn off the crime data for better efficiency and visibility (it's a huge dataset, so only turn it on when necessary). Next, select a neighborhood to analyze. For example, to choose Downtown:

1. 1. Click on the select tool ![](images/select-feature-tool-e1517358308800.png)
    2. Click on the Downtown polygon on the map

Select all the crime incidents that occurred within the downtown boundaries.

1. Go to **Selection**, **Select by Location**, and enter the following information: ![](images/select-by-location-1-e1523055215405.png)
2. Turn on the crime layer. You should see the crime incidents inside the downtown polygon selected. In the table of contents, right click on **la\_crime\_2010** and **Export Data**: ![](images/export-downtown-crime-e1523055367239.png)
3. Export the data into your geodatabase: ![](images/export-downtown-crime-2-e1523055536706.png)
4. Click "yes" to add the data to the map

### Count overlapping incidents

![](images/GUID-520B7CB1-0A0B-4E81-A2A2-57A337D7564A-web.gif)

The LAPD records arrest locations to the closest intersection of where it occurred. What this means is that many incidents that happen close-by are visually stacked on top of one another, appearing as a single point. In order to provide an aggregate of overlapping points, let's run the **Collect Events** tool.

1. **ArcToolbox, Spatial Statistics Tools, Utilities, Collect Events** ![](images/collect-events-tool-e1523054314640.png)
2. Enter the following information: ![](images/collect-events-1-e1523055795527.png)

### Determine whether there is clustering

1. Run the **Spatial Autocorrelation** tool on the selected geography (in this case, downtown Los Angeles)
    1. **ArcToolbox, Spatial Statistics Tools, Analyzing Patterns, Spatial Autocorrelation** ![](images/spatial-autocorrelation-tool-e1523053979494.png)
    2. Enter the following information: ![](images/spatial-autocorrelation-entry-e1523055973468.png)
    3. To see your results, go to **Geoprocessing, Results ![](images/geoprocessing-results-e1523406290690.png)** 
    4. Then expand Current Session, Spatial Autocorrelation, and double click on the Report File ![](images/spatial-autocorrelation-results-e1523056123378.png)

\[TBS\_ALERT color="info" heading="What do the results tell us?"\]

![](images/Spatial-Autocorrelation-Report-e1523460164888.png)

\[/TBS\_ALERT\]

### Hot Spot Analysis

![](images/GUID-595F969A-A1F3-453B-83AD-E4B3AC6277BF-web.png)

Now that we have determined that there is, indeed, statistically significant spatial clustering in our data, let's find out _where_ there are hot spots and cold spots in our data. Hot spots are areas that show statistically higher tendencies to cluster spatially. This is determined by looking at each incident within the context of neighboring features. In other words, a single point with high values isn't necessarily a hot spot. It becomes a hot spot only when its neighbors also have high values.

Let's run the hot spot analysis tool on our downtown crime data. In your **Spatial Statistics Tools**, expand **Mapping Clusters**, and double click on **Optimized Hot Spot Analysis**.

![](images/Optimized-Hot-Spot-Analysis-tool-e1523461298314.png)

In the pop up window, select **downtown\_crime\_2010**, and make sure that **COUNT\_INCIDENTS\_WITHIN\_FISHNET\_POLYGONS** is selected. This will create a bunch of grid cells wherever there are incidents of crime present.

![](images/Optimized-Hot-Spot-Analysis-entry-e1523056416363.png)

Nice! We have now converted our overlapping incidents into color coded grid cells.

![](images/Hot-Spots-Downtown-1-e1523461648655.png)

Notice the legend for our results. ![](images/hot-spots-legend-1-e1523461878466.png)

Also open the attribute table. Right click on downtown\_crime\_2010\_HotSpot, and Open Attribute Table![](images/open-attribute-table-e1523461988729.png)

The table represents each displayed cell.

- **JOIN\_COUNT** tells us how many incidents fall within a cell
- **GiZScore** tells us the Z score (positive values indicates it is proportionally above the values for the entire dataset)
- **GiPValue** gives us the P value
- **NNeighbors** is the number of neighboring incidents that it has taken into account to compare to the sum of the entire dataset
- **Gi\_Bin** gives us a number that is associated to the confidence level displayed on the map

![](images/hot-spot-attribute-table-e1523462083375.png)

Finally, let's label the grid cells with the JOIN\_COUNT to give us an idea of why certain areas are hot, and others are cold.

1. Right click on **downtown\_crime\_2010\_HotSpot**, click on **Properties**, and click on the **Labels** tab.
2. Check the box to label the features, and choose **JOIN\_COUNT** for the label field

![](images/Joint-Count-labels-e1523056563949.png)

\[TBS\_ALERT color="info" heading="What do these numbers tell us?"\]![](images/Hot-Spots-Downtown-e1523056605908.png)

\[/TBS\_ALERT\]

### Resources

- [ArcGIS Optimized Hotspot Analysis](http://pro.arcgis.com/en/pro-app/tool-reference/spatial-statistics/optimized-hot-spot-analysis.htm)
- [ArcGIS Collect Events](http://pro.arcgis.com/en/pro-app/tool-reference/spatial-statistics/collect-events.htm)
- [ArcGIS Spatial Autocorrelation](http://pro.arcgis.com/en/pro-app/tool-reference/spatial-statistics/spatial-autocorrelation.htm)

### Data Sources

- [Los Angeles Crime Data](https://data.lacity.org/A-Safe-City/Crime-Data-from-2010-to-Present/y8tr-7khq)
- [Los Angeles Businesses](https://data.lacity.org/A-Prosperous-City/Listing-of-Active-Businesses/6rrh-rzua/data)
