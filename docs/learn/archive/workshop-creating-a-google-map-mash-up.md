---
title: "Workshop:  Creating a Google Map \"Mash-up\""
date: "2013-10-23"
categories: 
  - "workshops"
---

For this week’s assignment, you will set up your own website, and perform the following tasks

1. Create a Maproom using Google Maps API
2. Add your own data from ArcMap to the Maproom as a KML file
3. Add demographic data to your Maproom using ArcGIS Online

### Part 1:  Creating Your Google Maps Mash-up

1. Open a text editor (Dreamweaver is preferred, but NotePad++, Wordpad are alternatives)
2. Create a new file.  If using Dreamweaver, make sure you are in “code view”.  If Dreamweaver automatically generates code based on their templates, makes sure to delete it and start with a blank sheet (press Ctrl-A, then Delete).
3. Copy and paste the code sample below:

<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
<style type="text/css">
  html { height: 100% }
  body { height: 100%; margin: 0px; padding: 0px }
  #map\_canvas { height: 100% }
</style>
<script type="text/javascript"
    src="http://maps.google.com/maps/api/js?sensor=false">
</script>
<script type="text/javascript">
  function initialize() {
    var latlng = new google.maps.LatLng(34.07017474556608, -118.44412005000004);
    var myOptions = {
      zoom: 15,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map\_canvas"),
        myOptions);
  }

</script>
</head>
<body onload="initialize()">
  <div id="map\_canvas" style="width:100%; height:100%"></div>
</body>
</html>

7. Save your file in a local directory and name it “maproom.html”.
8. Navigate to your file with windows explorer (or My Computer), and open the file in a browser.  What do you see?
9. Let’s change the default location.  First, find the following lines of code in your maproom.html:

var latlng = new google.maps.LatLng(-34.397, 150.644);

13. Notice the latitude and longitude values.  This determines the default center location of your map. These are the numbers you want to change.
14. **Changing the center of the map:** Go to [http://getlatlon.yohman.com](http://getlatlon.yohman.com/).  Enter your home address (or any desired location).  Copy the latitude, longitude numbers and replace the values from the step above.  Save the file, and refresh your web browser.  Is your map now centered on your home?
15. **Setting the zoom level:** Find the line that sets the zoom level.  It should be set at “15”.  Change this number to a value between 0 and 20.  Save and refresh.  What number is the “most” zoomed in?  What number is the “most” zoomed out?
16. **Change the basemap:** Find the line that sets the basemap:
    
    mapTypeId: google.maps.MapTypeId.ROADMAP
    
    You can change the MapTypeId from ROADMAP to other values.  Here are the valid map types:
    - ROADMAP displays the normal, default 2D tiles of Google Maps.
    - SATELLITE displays photographic tiles.
    - HYBRID displays a mix of photographic tiles and a tile layer for prominent features (roads, city names).
    - TERRAIN displays physical relief tiles for displaying elevation and water features (mountains, rivers, etc.).
17. **Adding a point marker:** The following code produces a marker icon on the center of your map.  **REPLACE** the LatLng values with the latitude longitude coordinates you used for the center of _your_ map.

var marker\_latlng = new google.maps.LatLng(-34.397, 150.644);

var marker = new google.maps.Marker({
position: marker\_latlng,
map: map,
title:"Hello World!"
});

Make sure to position this code within the initialize() function (ie, inside the opening “{“ and closing “}”, preferably right before the closing “}”.21. Save your file, and refresh the map.  You should see a Marker at the center of your map.
22. Now let’s add an “info” window to your google marker point. Just below the marker code from the previous step, add the following:

var contentString = 'My info window content';

var infowindow = new google.maps.InfoWindow({
content: contentString
});

google.maps.event.addListener(marker, 'click', function() {
infowindow.open(map,marker);
});

26. Refresh your map, and click on the marker icon.  Feel free to change the Info content by editing the contentString portion of the marker code.
27. Now you know how to create a google mash-up!  You have learned how to create a map, center the map, and apply a default zoom level.  You also know how to add marker points and create info windows with content.

### Part 2:  Upload your files to your BOL account

In order to make your website public to the world, you need to upload it to a web server.  Fortunately, as a member of the UCLA community, you are granted 100MB of free web space on BOL!  Let’s take advantage of this.

1. Go to [http://mail.ucla.edu](http://mail.ucla.edu/) and log in.
2. Click on “File Manager” on the left menu bar.
3. Now click on the “browse” button and upload the following files:
    - maproom.html
4. Now let’s have a look at your website. Your website should be:http://_your\_bol\_username_.bol.ucla.edu/maproom.html

### Adding a Historical Map base layer

Wouldn't it be great to add a historical map as a base layer, instead of the existing Google Maps layers? The Hypercities project provides a huge collection of historical map layers.

1. First, decide on a layer to add by going to the [tiled maps directory](http://tiles.ats.ucla.edu/tiles/).
2. Decide on a map, and click on the folder link

### Part 3:  Adding data from a point shapefile to your Maproom

Next, let’s add your own data to your maproom.  These are the steps you will take:

- Convert a shapefile to a layer
- Style it
- Convert the layer to kml/kmz
- Upload the KMZ file to your bol account.
- Link your maproom to the kml file.

1. Download LACounty\_retail\_center.shp from the class website.
2. Open ArcCatalog and navigate to find LACounty\_retailcenter.shp.  Right click and select **Create layer...**.
3. Now let’s select a symbol style for your points.  Right click on the layer you created (LACounty\_retailcenter.lyr) and go to properties, symbology.  Select a symbol style for your layer.
4. Open ArcToolbox, click on **Conversion Tools**, **To KML** and double click on **Layer to KML**.  Enter the following values:
    1. **Layer**:  Add your newly created layer
    2. **Output File**:  click on the folder icon, find a location and name your file “LARetail.kmz”
    3. **Layer Output Scale**: enter “1”
5. Upload the newly created kmz file to your bol account.  Follow the steps from the previous section to do so.
6. Adding a KMZ layer to your Maproom is very easy.  As long as the KMZ file is located on the “web”, all you need to do is link to it.  Add the following lines of code to your Maproom.html file:

var kmlLayer = new google.maps.KmlLayer('http://yourusername.bol.ucla.edu/LARetail.kmz');
kmlLayer.setMap(map);

11. Save Maproom.html, upload it again to your BOL account, and refresh your maproom.

### Part 4: Adding demographic layers from ArcGIS Server to your Maproom

Now we are ready to add yet another layer to our Maproom.  This time, you will be adding one (or more) layers from ESRI’s ArcGIS Online service.

1. In order for your google mash-up to allow for ArcGIS overlays, you need to include the ArcGIS javascript library. Open your Maproom.html file in Dreamweaver.  Look for the lines of code that added the Google Maps API:

<script src="http://maps.google.com/maps/api/js?sensor=false" type="text/javascript">
</script>

Add the following lines of code right below the code above that adds the google maps api library:

<script src="http://google-maps-utility-library-v3.googlecode.com/svn-history/r172/trunk/arcgislink/src/arcgislink.js" type="text/javascript"></script>

8. Prepare your Maproom to accept an ArcGIS layer.  First, find the last line of your javascript code.  If you have followed this tutorial, it should be:

kmlLayer.setMap(map);

12. Right below this line, add the following code:

var url = 'enter\_a\_map\_service\_URL';

var agsType = new gmaps.ags.MapType(url,{name:'ArcGIS', opacity:0.5});

map.overlayMapTypes.insertAt(0, agsType);

17. Go to [http://www.esri.com/software/arcgis/arcgis-online-map-and-task-services/map-services.html](http://www.esri.com/software/arcgis/arcgis-online-map-and-task-services/map-services.html).  Look at the various layers that are made available to you.  Select one, and click on the thumbnail image.
18. Copy the URL for the map service (in green), and replace the text in your code “enter\_a\_map\_service\_URL” with the URL.
19. Save and upload your file to your BOL account and refresh your maproom.
