---
title: "Google Maps? Nah, Leaflet it go."
date: "2014-11-20"
categories: 
  - "tutorials"
---

[![leafletPic](images/leafletPic.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2014/11/leafletPic.png)

Coding a map is a little bit different than using an application to create a map because instead of fiddling around with a user-interface to generate the end product, the maps are generated beforehand (i.e. programmed).

While [Google Maps API](https://developers.google.com/maps/) is probably one of the most commonly used map applications programming interface (API), we will not be going over it because there are some limitations of being tied to that platform, mainly in the realm of customization and depreciation.BUT! To see what it can do, feel free to check out Yoh's getlatlon website!

[http://getlatllon.yohman.com/getlatlon/](http://getlatllon.yohman.com/getlatlon/)

While there are many alternatives to choose from, such as OpenLayers or D3, we will be using Leaflet for its simplicity and customization features.

We will start by looking at the documentation:

[http://leafletjs.com/reference.html](http://leafletjs.com/reference.html)

### Step 1: Open up a text editor

### Step 2: Create your HTML document

1. You want to begin by including leaflet into your page:
    
     <script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>
    
2. Next let's include the leaflet css file:
    
    <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />
    
3. Now create a <div> container to put the map in, giving it a default height of 800 pixels:
    
    <div id="map" style="height:800px"></div>
    

### Step 3: Creating the map

Now that you may be feeling confident, but that map is not **vary** functional either, so let's start adding "variables" and "functions."

1. When coding in HTML/javascript, most variables and functions can go anywhere, but consistency and logical flow is key.
2. Feel free to copy and paste this code after the "map" div to get started:
    
    <script>
    	// define the map location and zoom level
    	var map = L.map('map').setView(\[34.069, -118.445\], 15);
    
    	// use the free open street map as the base layer
    	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);
    </script>
    
3. Now once you save and refresh your page you should have a map centered on Rolfe!
4. There are two things to notice with this addition, which are "var" and "function".
5. Save your file as a .html file and open it up in a web browser!
6. Congratulations you have created your first maproom!

[Example code](https://sandbox.idre.ucla.edu/testroom/albert/leaflet/test.html)

<!DOCTYPE html>
<html>
<head>
	<title>Leaflet Quick Start Guide Example</title>
	<meta charset="utf-8" />

<script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>
<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />

</head>
<body>
	<div id="map" style="height:800px"></div>

	<script>
		var map = L.map('map').setView(\[34.069605325880865, -118.44331418252563\], 17);

		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			maxZoom: 18,
			id: 'examples.map-i875mjb7'
		}).addTo(map);
	</script>
</body>
</html>

### Challenge! Add a marker:

1. Copy and paste this code to create a marker in your map room:
    
    		L.marker(\[34.069605325880865, -118.44331418252563\]).addTo(map)
    			.bindPopup("<b>Hello!</b><br />We are hereabouts.").openPopup();
    
2. See if you can figure out where the code should go, if not here is a hint!

[Example code](https://sandbox.idre.ucla.edu/testroom/albert/leaflet/test2.html)
