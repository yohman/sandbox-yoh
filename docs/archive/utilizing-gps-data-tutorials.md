---
title: "Part 2b - Utilizing GPS Data: Tutorials"
date: "2015-04-16"
---

So you've gone out in the field and collected some data, what do you do now?

If you'd like share and utilize it, then you can utilize your data on the web or through using desktop GIS solutions.

[![garminGPS_usb](images/garminGPS_usb-1024x300.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2015/04/garminGPS_usb.png)

1. Connect your GPS device to the computer, either via USB cable or through a serial cable (for older devices)
2. Locate the GPX folder and transfer the files onto your computer \[TBS\_ALERT color="info" heading="What the GPX?"\] GPX files are XML files that are used to store GPS data. \[/TBS\_ALERT\]
3. After you have your GPX data, you can manipulate it in various applications both on the Desktop and through Web-based interfaces.

# Desktop:

## **QGIS - Spatial Analysis with your data points**

### Part 1: Check to see if GPS tools are enabled

1. Go to **Plugins** -> **Manage and Install Plugins...** and search for "GPS tools" [![qGIS_plugin](images/qGIS_plugin-1024x687.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2015/04/qGIS_plugin.png)
2. Tick the check box to ensure that the plugin is installed. [![qgis_GPS](images/qgis_GPS.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2015/04/qgis_GPS.png)
3. To visualize your GPS data on a basemap, download the "OpenLayers plugin" by searching "OpenLayers" and ticking that checkbox.
4. Add a Google satellite basemap by going to **Web** [![count1](images/count1.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2015/04/count1.png) -> **OpenLayers** -> **Google Maps** -> **Google Satellite [![qGISload](images/qGISload-1024x687.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2015/04/qGISload.png)** 
5. Next, open the GPS Tools plugin by going **Vector** **[![count2](images/count2.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2015/04/count2.png)**\-> **GPS** -> ****GPS Tools****
6. Locate the GPX file that you have downloaded from your GPS device.
7. You can select which data to import: waypoints are single points, while routes are lines, and tracks are "breadcrumb" trails left behind from routes that are created. [![qgis_dataPointsImport](images/qgis_dataPointsImport.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2015/04/qgis_dataPointsImport.png)
8. Congratulations, you have added GPS data to your map project! [![loadedPoints](images/loadedPoints-1024x766.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2015/04/loadedPoints.png)

###  Part 2 - Spatial Analysis, QGIS, and GPS

With the GPX now loaded, we can run spatial analysis.

One possible visualization of data points through hotspot analysis, which looks at the density of points in a specific area and averages out the distance to the nearest points.

1. Load some GPX point data, such as waypoints
2. Open the Hotspot Analysis Tool [![BetterHotspot](images/BetterHotspot.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2015/04/BetterHotspot.png)

### GPS Track Editor

1.  Load your GPX points
