---
title: "Workshop: Network Analysis Part 2"
date: "2018-02-12"
categories: 
  - "workshops"
---

To begin, download the workshop geodatabase here:

- [Network Analyst Workshop Geodatabase](http://sandbox.idre.ucla.edu/workshops/na_workshop2018.gdb.zip)

### Setting up your project

1. Add the following layers to your map
    1. **ca\_transportation\_ND**
    2. **ca\_cities\_utm**
    3. **ca\_counties\_utm**

### Route

## ![](images/Network-Analyst-Route-e1518475367878.png)

1. Create a **New Route** from the network analyst dropdown ![](images/na-new-route-e1518813958260.png)
2. Open the attribute table for **ca\_cities\_utm**
3. Sort the table by **POP2007** (double click on the header twice)
4. Select the top 10 cities in California ![](images/na-top-10-cities-e1518814035706.png)
5. In the Network Analyst panel, right click on **Stops** and **Load Locations** ![](images/na-load-locations-e1518814098853.png)
6. Click the **Solve** button ![](images/na-solve-button-e1518813644919.png)

### Service Area

1. Create a **New Service Area** project by clicking on the Network Analyst dropdown ![](images/na-service-area-dropdown-e1518813181531.png)
2. From the table of contents, highlight **Facilities** ![](images/na-highlight-facilities-e1518813239216.png)
3. Click on the service area properties button ![](images/na-service-area-properties-e1518813335769.png)
4. Click the **Polygon Generation** tab and choose **Merge by break value** ![](images/na-service-area-merge-e1518813413315.png)
5. Click the **Analysis Settings** tab. For **Default Breaks**, enter **5,10,15**
6. Click the **Accumulation tab**. Check **Minutes\_LA** and **Minutes**
7. Zoom into downtown Los Angeles
8. from the network Analyst toolbar, click on the "add" button ![](images/na-add-facility-e1518813094285.png)
9. Add a facility somewhere in downtown Los Angeles
10. Click on the solve button ![](images/na-solve-button-e1518813644919.png)
11. Add another facility in Santa Monica
12. Click on the solve button again
13. Repeat the process, adding more and more facilities to cover much of Los Angeles.

\[TBS\_ALERT color="info" heading="What does the map tell us?"\]

![](images/Service-Area-Overview-e1518474876194.png)

How many facilities did you add? Where might you continue to add facilities to cover larger areas of Los Angeles?

\[/TBS\_ALERT\]
