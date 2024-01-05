---
title: "Open Data and Tableau"
date: "2019-10-24"
categories: 
  - "workshops"
---

### Acquiring data

The open data movement has made more and more data available for academics to download and use for their research. But how can we map this data? This workshop will take you through the process of acquiring data from the [Los Angeles Open Data portal](https://data.lacity.org/) and visualizing it on [Tableau](https://public.tableau.com/s/) for further analysis.

### The Los Angeles Open Data Portal

  
Go to the [LA Data Portal](https://data.lacity.org/), and search for arrest data:  

![](images/search-for-crime-data-e1571933940657-1024x419.png)

  
Inspect the data  

![](images/arrest-data-e1571934050229-1024x688.png)

  
1.3 million records! Let's filter it down to something more manageable.  

![](images/view-data-e1571934165890-1024x229.png)

![filter-arrests](images/filter-arrests-e1571934969724.jpg)

Now add the filter to narrow down the data to one month:

![](images/arrest-filter-between-e1571935774747.png)

![](images/arrest-between-dates-e1571935957609.png)

  
Export the data  

![export as csv](images/export-as-csv-e1538496456287.png)

### Cleaning up those coordinates

Open the downloaded data in Excel. Scroll to the right until you see the Location column.

![](images/open-data-location-column-e1524865676923.png)

Hmm, that's strange, the latitude and longitude columns are in the same column! Most GIS plaforms will not like this. Let's clean this up.

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

Open Tableau Public. Click "Text file" and open the arrest data you just downloaded from the LA Data Portal.  

![](images/tableau-open-text-e1571935299284.jpg)

![](images/tableau-with-data-e1571936210361-1024x699.png)

  
Create a worksheet, click on "Sheet 1" at the bottom of the window. Under "measures," double click on **Lat**, then double click on **Lon**.  

![](images/tableau-lat-lon-e1571936431915-1024x699.png)

  
Drag ReportID into the Marks box:  

![](images/tableau-drag-id-e1571936580265.png)

  
Switch to the **Pan** tool (or type **F** on your keyboard) and zoom into Los Angeles.  

![](images/tableau-map-pan-tool-e1571936828120.png)

  
Drag **Sex Code** into the Color box:  

![](images/tableau-sex-code-to-color-e1571937011335.png)

![](images/tableau-gender-arrest-map-e1571937177655.png)

  
Add another worksheet.  

![](images/tableau-new-worksheet-e1571937283577.png)

  
Double click on **Descent Code** under **Dimensions**.  
  
Drag **Number of Records** from **Measures** to the count column (bunch of Abc's).  
  

![](images/tableau-descent-drag-e1571937559875.png)

  
Go to **Show Me** (top right) and select the bubble chart:  

![](images/tableau-bubble-chart-e1571937763849.png)

  
Add another worksheet.  
  
Double click on **Charge Description** under Dimensions.  
  
Drag **Number of Records** into the Abc column.  
  
Expand **Show Me** (top right) and select the bar graph.  
  
Click on **Charge Description** next to Rows (top).  
  
Select **Sort...** from the drop down menu.  

![](images/tableau-sort-charges-e1571938067111.png)

  
Sort by **Field**, **Descending**.  

![](images/tableaue-sort-by-field-descending-e1571938211944.png)

  
Drag **Sex Code** to the Color box.  

![](images/tableau-sex-to-color-e1571938417327.png)

![](images/tableaue-charges-by-sex-code-e1571938488135.png)

  
Now create a new dashboard.  

![](images/tableau-new-dashboard-e1571938630760.png)

  
Change **Size** to **Automatic**.  

![](images/tableau-dashboard-size-e1571938732754.png)

  
Drag each sheet into the dashboard:  

![](images/tableau-drag-sheets-into-dashboard-e1571938856518.png)

  
Click on Sheet 1 to highlight it, and enable the filter (it should turn white):  

![](images/tableau-turn-filter-on-e1571939365640.png)

  
Repeat for the other two sheets so that each sheet is linked to one another.  
  
Click on different elements on the charts and notice how each sheet changes as you do so.  
  
Select the Radial Selection from the map tools.  

![](images/tableau-map-radial-selection-e1571939836745.png)

  
Click and drag different areas of the map. How does that inform the other elements of your dashboard, and what are some discoveries you find interesting?
