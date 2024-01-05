---
title: "How to add your data to ArcGIS"
date: "2018-02-01"
categories: 
  - "tutorials"
---

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
