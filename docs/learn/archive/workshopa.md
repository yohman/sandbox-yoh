---
title: "Spatial Statistics: Central means and directional distributions"
date: "2018-02-15"
categories: 
  - "workshops"
---

Mapping the distribution of central features and distributional trends can provide visual insights into your data that may not otherwise be apparent. In this workshop, we will map the three major race categories by state, and determine whether or not there are distributional trends between racial categories.

To begin, download the workshop geodatabase here:

- [Spatial Statistics Workshop Geodatabase](http://sandbox.idre.ucla.edu/workshops/ss_workshop2018.gdb.zip)

### Setting up your project

Through the process of this workshop, you will be creating many new data layers. It is always good practice to designate a path to the geodatabase that you will use to store the layers.

1. Go to File, Map Document Properties...
2. Change the default geodatabase by finding the path to the workshop geodatabase you just downloaded.
3. Also click on the checkbox next to Store relative pathnames to data sources ![](images/sa-map-document-properties-e1518639638350.png)

### Finding the center mean for different population groups

![](images/GUID-1F7217DA-FC4E-46A2-B91C-7AB5E53DDA9C-web.png)

1. Open ArcMap and add the **us\_states** and **us\_counties** layers
2. Go to **Windows**, **Catalog** to open the Catalog panel on the right
3. Expand **Toolboxes**, **System Toolboxes, Spatial Statistics Tools, Measuring Geographic Distributions** ![](images/ss-spatial-stats-toolbox-e1518735321785.png)
4. Double click on the **Mean Center** tool
    1. Input: **us\_counties**
    2. Output: **us\_counties\_MeanCenter\_white**
    3. Weight: **WHITE**
    4. Case field: **STATE\_FIPS** (this creates a different point per state) ![](images/ss-mean-center-params-e1518735528487.png)
    5. A new layer should appear on your map. Modify the symbology: ![](images/ss-symbology-e1518735688788.png)
    6. Repeat steps 1~5, choosing **BLACK** and **HISPANIC** respectively to produce 3 different colored dots per state.

\[TBS\_ALERT color="info" heading="What does the map tell us?"\]

![](images/ss-mean-center-map-e1518735947903.png)

Examine the map and explain what you are able to observe. What do the colors represent? What does that tell us about the spatial distribution of our population by race categories?

\[/TBS\_ALERT\]

### Measuring directional distribution

![](images/GUID-13B1B03F-A692-49E5-B371-C2095CADCA5A-web.png)

Now let's see if there are any central tendencies, dispersion, and directional trends to our data.

1. From the Spatial Statistics Toolbox, double click on the **Directional Distribution (Standard Deviational Ellipse)** tool
    1. Input: **us\_counties**
    2. Output: **us\_counties\_DirectionalDistr\_white**
    3. Weight Field: **WHITE**
    4. Case Field: **STATE\_FIPS** ![](images/ss-directional-distribution-params-e1518737242917.png) \[TBS\_ALERT color="info" heading="How big is my ellipse?"\] Notice the option to choose 1, 2, or 3 standard deviations for your ellipse size. For 2-dimensional data, that is, data with an x and a y,  one standard deviational ellipse will cover approximately 63 percent of the features; two standard deviations will contain approximately 98 percent of the features; and three standard deviations will cover approximately 99.9 percent of the features. \[/TBS\_ALERT\]
2. Modify the symbology of the ellipse to match the color of the mean center dot for the same race category
3. Repeat steps 1~2 for **BLACK** and **HISPANIC**

\[TBS\_ALERT color="info" heading="What does the map tell us?"\]

![](images/ss-directional-distribution-map-e1518737520215.png)Examine the map and explain what you are able to observe. What do the colors represent? What insights do the size, shape, and overlap of ellipses provide?

\[/TBS\_ALERT\]

### Resources

- [ArcGIS Central Mean](http://pro.arcgis.com/en/pro-app/tool-reference/spatial-statistics/h-how-mean-center-spatial-statistics-works.htm)
- [ArcGIS Directional Distribution](http://pro.arcgis.com/en/pro-app/tool-reference/spatial-statistics/directional-distribution.htm)
