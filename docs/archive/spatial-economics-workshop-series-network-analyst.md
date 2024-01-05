---
title: "Spatial Economics Workshop Series: Network Analyst"
date: "2018-01-30"
categories: 
  - "workshops"
---

- [Last week's assignment](https://docs.google.com/document/d/11loPFABGybOtgTbNqU0SsOm3PkLQWK_RUq0-3bvuAjQ/edit#)

![](images/OD-Matrix-map-e1517532333380.png)

What is the optimal route to get to a group of locations? And what happens when there is a "disruption" on particular pathways? This workshop examines the amount of time (cost) that it takes to traverse a given network of roads between a series of provided locations.

## Part I. Download and prepare the data

First, download and unzip the states, county, and city geodatabase from our class server:

- [Workshop Data Download Link](https://sandbox.idre.ucla.edu/Workshops/workshop2018.zip)

The US Department of Transportation provides nationwide spatial data of our road network. Let's download their data to use in this workshop, where we will conduct a series of network analyses.

- Download new data set
    - [Roads](https://www.fhwa.dot.gov/planning/processes/tools/nhpn/)
    - [Metadata](https://www.fhwa.dot.gov/planning/processes/tools/nhpn/2015/nhpnmetadata.txt)

\[TBS\_ALERT color="info" heading="What? Just California?"\]For the purposes of this workshop, we will only use the road networks for California. Using the nationwide network would have been preferred, but given that larger datasets take much longer to run "geo" processes, we will first extract the roads for California.\[/TBS\_ALERT\]

### Extract California roads

1. Open **ArcMap**
2. Add **NHPNLine.shp** and **US\_States**
3. Turn off **NHPNLine**, and highlight **California** (use the selection tool) ![](images/select-feature-tool-e1517358308800.png)
4. Go to **Selection**, **Select by Location**, **select features from NHPLine**, source layer: **us\_states**, and check the "**use selected features**" ![](images/Save-selected-e1517354614265.png)
5. Right click on **NHPNLine**, **Data**, **Export Data**, put it in your geodatabase, and give it the filename **ca\_roads** ![](images/export-data-ca-roads-e1517354783997.png)

### Extract the counties for California.

1. Add **us\_counties** to ArcMap
2. Go to **Selection**, **Select by Attributes**
3. The FIPS code for California is **06**. Enter the following SQL query and apply: ![](images/Select-by-Attribute-Counties-e1517436521502.png)
4. Right click on **us\_counties**, **data**, **export data**, and save it as **ca\_counties** in your geodatabase.

### Extract the cities for California

By now you should have a handle on how to filter and create new spatial layers. Repeat the steps to generate ca\_cities from the us\_cities layer.

Close ArcMap. There is no need to save the project at this time.

## Get in the Zone! (11)

Before we begin to create a network dataset, we need to set the correct projection for our project. For any type of spatial analysis that requires geoprocessing, it is highly recommended to use a projected coordinate system, and to have every single layer in your project have the same projection.

1. Open the search window, and enter "**batch project**"
2. Click on the **Batch Project** tool
3. Drag and drop the three California datasets into the the input feature class box
4. For Output Workspace, navigate to your **workshop2018.gdb** geodatabase
5. For Output Coordinate System, choose **NAD 1983 UTM Zone 11N** (type in the search box to find it)
6. Click **OK ![](images/batch-project-utm-e1517506013123.png)** 
7. You should now have three new layers in your geodatabase. Rename them as:
    1. ca\_cities\_1 -> **ca\_cities\_utm**
    2. ca\_counties\_1 -> **ca\_counties\_utm**
    3. ca\_roads\_1 -> **ca\_roads\_utm**

## Part II. Calculating Cost

We now have all our data projected and ready to go. But before we do any network analysis, we want to create "cost" fields in our network dataset. Essentially, we want to measure cost as a factor of time. Faster roads, like interstate and freeways, will assume a lower cost of travel (less minutes), while slower roads, like arterial roads, will assume a higher cost (more minutes to travel).

Let's take a look at how the Department of Transportation classifies different roads on the network. The metadata is available on their website [here](https://www.fhwa.dot.gov/planning/processes/tools/nhpn/2015/nhpnmetadata.txt). Scroll down until you find the documentation on the FCLASS field. ![](images/FCLASS-documatation-e1517510992548.png)

In order to simplify our cost calculation, we will create our own reclassification using only 3 classes. To do so, we will group all freeways and interstates into one class, arterial roads in another, and all the remaining roads as a third class.

1. Open a new ArcMap project
2. Add **ca\_roads\_utm** (the one that has the UTM projection)
3. Right click on **ca\_roads\_utm** and go to properties and click on the **Fields** tab
4. Deselect all the fields except for **MILES** and **FCLASS**
5. Open its attribute table
6. Add a new field, and name it **NewClass**, and give it a type **Short Integer**.
7. Once created, right click on the header, and select **Field Calculator**.
8. Make sure the parser is set to **VB Script**
9. Check the **Show Codeblock** box
10. Enter the following formula in the **Pre-Logic Script Code**
    
    dim n
    if \[FCLASS\] = 1 or \[FCLASS\] = 11 or \[FCLASS\] = 12 then
    	n = 1
    elseif \[FCLASS\] = 2 or \[FCLASS\] = 6 or \[FCLASS\] = 14 or \[FCLASS\] = 16 then
    	n = 2
    else
    	n = 3
    end if
    
11. Enter "**n**" in the second box labeled **NewClass=** ![](images/Field-Calculator-NewClass-e1517356709530.png)
12. Now let's assign speed limits to each class. Create a new field, and title it **Speed** of type **Short Integer**.
13. In the field calculator, enter the following VB script:
    
    dim n
    if \[NewClass\] = 1 then
    	n = 60
    elseif \[NewClass\] = 2 then
    	n = 40
    elseif \[NewClass\] = 3 then
    	n = 20
    end if
    
14. Now add another field, and name it **Time\_Minutes**.
15. Give it a type **Float**.
16. In the field calculator, enter the following formula:
    
    \[MILES\]/ \[Speed\]\*60
    

### Creating a disruption on the network

We have now created a cost field in terms of how many minutes it costs to travel each segment of our network. Let's presume, however, that a disruption has occurred, and certain segments of our network incur a 10% increase in cost. To make matters simple for our workshop, let's presume that all roads within Los Angeles County will incur this additional cost of 10%. In other words, it takes 10% longer to travel roads in Los Angeles County as compared to any other roads on the network.

1. Create a new field for our disrupted cost, and name it **Time\_Minutes\_LA**
2. Give it a type **Float**
3. In the field calculator, copy the values from **Time\_Minutes** ![](images/field-calculator-time_minutes-e1517518909130.png)
4. Now select only the roads that are within LA County.
5. Use the selection tool to highlight LA County ![](images/Highlight-LA-County-e1517519121551.png)
6. Go to **Selection**, **Select by Location**.
7. Select features from **ca\_roads\_utm** that **intersect** with **selected features** (checkbox) from **ca\_counties\_utm** ![](images/Select-roads-in-LA-County-e1517519385933.png)
8. In the attribute table for the ca\_roads\_utm, notice that 8878 out of 61,973 segments are selected. Click on the "Show selected records button" ![](images/selected-roads-e1517519585261.png)
9. Click on the header for Time\_Minutes\_LA and bring up the field calculator.
10. Add 10% cost to the selected LA County Roads ![](images/adding-10-disruption-cost-e1517519677577.png)
11. Save your project as **NetworkWorkshop.mdb**
12. Close ArcMap

We now have two cost fields in our network data. Next, we will create a network dataset that allows ArcMap to run analyses.

## Part III. Creating a Network Data Set

1. Open ArcCatalog and locate your geodatabase.
2. Right click on the geodatabase and click "New" then "Feature Data Set" [![](images/2018-01-31-17_01_33-2018-01-31-16_40_58-Layer-Properties.png-@-116-Layer-2-RGB_8-_-e1517447015537.png)](https://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2018/01/2018-01-31-17_01_33-2018-01-31-16_40_58-Layer-Properties.png-@-116-Layer-2-RGB_8-_.png)
3. Add a new **feature dataset** and call it "**ca\_transportation**"
4. Give it a NAD 1983 UTM Zone 11N coordinate system.
5. Ignore the other options, and finish.
6. Drag the ca\_roads\_utm layer into the ca\_transportation feature dataset you just created ![](images/drag-roads-to-feature-e1517520307186.png)
7. Right click on **ca\_transportation**, **New**, **Network Dataset**[![](images/2_networkdataset-e1517447394919.png)](https://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2018/01/2_networkdataset-e1517447394919.png)
8. Proceed through the New Network Dataset Wizard:
    1. Give it a name [![](images/3_New-Network-Dataset-e1517447451780-1024x988.png)](https://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2018/01/3_New-Network-Dataset-e1517447451780.png)
    2. Choose **ca\_roads\_utm** as the feature class participating in the network dataset.
    3. Choose to model turns in the network.
    4. Choose "None" for elevation modeling.
    5. Add an attribute for the network dataset called "Minutes"
    6. Make sure the units are minutes in the dialogue box.
    7. In evaluators, make sure the that "Type" is Field and that the Value is "Time\_Minutes"
    8. Duplicate the "Minutes" field
    9. Change the value from "Time\_Minutes" to "Time\_Minutes\_LA"; this will be used to model traffic in LA.
    10. Rename "Minutes\_2" to "Minutes\_LA"
9. Title the network dataset as "ca\_transportation\_ND"
10. Choose "yes" to build the Network Dataset.

#### Take a break while the Network Data Set builds

## Part IV. Network Analysis

1. Close ArcCatalog and re-open ArcMap
2. Add the following layers into your map:
    - **ca\_cities\_utm**
    - **ca\_counties\_utm**
    - Go into the "**ca\_transportation feature class**" and add:
        - "**ca\_transportation\_ND**"
            - Do not add all features that participate in the network database as we don't really need them.
3. Go to "**Customize**" and then "**Extensions**".
4. Make sure the Network Analyst Extension has a check mark next to it, indicating that it is on.
5. Right click anywhere near the toolbar and click on "**Network Analyst**" to turn on the **Network Analyst Toolbar:**
6. Click the **Network Analysis Window Icon**: ![](images/network-analyst-toolbar-e1517528424491.png)
7. Our task will be to calculate an Origin-Destination Cost Matrix from the most populous city in California to the next 10 populous cities.
8. Click the **Network Analyst** dropdown and select "**New OD Cost Matrix**"
9. New layers should propagate in both the Network Analysis window and the Table of Contents for the project.
10. Open the attribute table for **ca\_cities\_utm** and order by **population\_2007**.
11. Select the highest value, which happens to be **Los Angeles.**
12. With the city highlighted, we will right click on "**Origins**" and click "**Load locations**" ![](images/load-locations-e1517528584980.png)
13. Return to the attribute table and choose the next 10 cities: ![](images/next-10-cities-e1517528651541.png)
14. Right click on Destinations:
15. Load the data in. ![](images/origin-destination-list-e1517528744567.png)
16. Close the attribute table.
17. Go back to the Network Analyst toolbar and click on "Solve" ![](images/solve-button-e1517528817343.png)
18. The Origin-Destinations will be calculated.
19. Right click on "**Lines**" and open the attribute table for the to see to OD-Matrix.
20. Export as a csv file to save it out of ArcMap.
21. To simulate Los Angeles traffic, we will use the **Minutes\_LA** field.
22. First, let's copy the OD Matrix we just made. Right click on **OD Cost Matrix** in the table of contents and click **Copy**
23. Right click on the **Layers** and choose **Paste Layer**
24. You should rename the layer to **OD Cost Matrix LA**
25. Now on the Network Analyst window click on **OD Matrix Properties ![](images/OD-Matrix-Properties-button-e1517529052758.png)** 
26. Switch to the "Analysis Settings" tab
27. Choose Minutes\_LA ![](images/choose-minutes-LA-for-cost-e1517529152724.png)
28. Choose to solve the analysis again.
29. Open the attribute table for the lines.
30. Compare the two OD-Matrices.

#### Pop quiz: Travel to which cities have been negatively impacted by Los Angeles traffic?

## Assignment

Choose a topic of interest that can be visualized as a county based US map from data that is available on Social Explorer. Download your data of choice from Social Explorer, join it to the county layer provided in this workshop, and symbolize it to create a choropleth map. Add a short paragraph description that describes the map.

\[TBS\_ALERT color="danger" heading="Submit your map!"\]Post your map on this **[Google Doc](https://docs.google.com/document/d/11loPFABGybOtgTbNqU0SsOm3PkLQWK_RUq0-3bvuAjQ/edit?usp=sharing)**. Add a title, your name, your map image, and your paragraph.\[/TBS\_ALERT\]
