---
title: "Digital Mapping Workshop - Part 3c: Hands-on Leaflet Tutorial"
date: "2015-04-24"
categories: 
  - "workshops"
---

# Let’s dive into making our very first web map!

## 1) Setting up your HTML page:

1. Open a text editor (we recommend [Sublime Text 2](http://www.sublimetext.com/2))
2. Start with a basic HTML page, as follows:
    
    <!DOCTYPE html>
    <html>
    <head>
    	<title>Digital Mapping Leaflet Example</title>
    	<meta charset="utf-8" />
    </head>
    <body>
    </body>
    </html>
    
3. Add a section for the map, called "div":
    
    <div id="map"></div>
    
4. Add some CSS to give spacing for the div and the overall body of the page:
    
    <style type="text/css">
    	html {height: 100%}
    	body {height: 100%}
    	#map {height:100%;}
    </style>
    

## 2) Adding Javascript Libraries:

Now that our page is setup, we can begin with adding content, instead of creating our own applications, we can add-on other functions to our website by including **Javascript Libraries**.

1. First we will bring in [Leaflet](http://www.leafletjs.com/) which is our mapping library:
    
    <!-- Leaflet -->
    <script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>
    <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />
    
2. Next is [jQuery](http://www.jquery.com/) for making Javascript easier and less complicated:
    
    <!-- jQuery -->
    <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
    <script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    
3. _(Optional)_ For prettier styles we can also include [Bootstrap](http://www.getbootstrap.com/):
    
    <!-- bootstrap -->
    <link href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" rel="stylesheet">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    

## 3) Creating your Leaflet Map:

1. So far, your HTML page should look like the following:
    
    <!DOCTYPE html>
    <html>
    <head>
    	<title>Leaflet Quick Start Guide Example</title>
    	<meta charset="utf-8" />
    	<style type="text/css">
    	html {height: 100%}
    	body {height: 100%}
    	#map {height: 100%;}
    	</style>
    	<!-- Leaflet -->
    	<script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>
    	<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />
    
    	<!-- jquery  -->		
    	<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
    	<script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    
    	<!-- bootstrap -->
    	<link href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" rel="stylesheet">
    	<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    
    </head>
    <body>
    	<div id="map"></div>
    </body>
    </html>
    
2. We will add a function for the Leaflet map that loads with the page, like so <body onload="init()">
3. Next, put this init function below the header:
    
    <script type="text/javascript">
    	//make map a global variable
    	var map;
    
    	function init(){
    		map = L.map('map').setView(\[34.06949867805522, -118.44327126718139\], 17);
    
    		L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
    			maxZoom: 18,
    			id: 'examples.map-i875mjb7'
    		}).addTo(map);
    	}
    </script>
    
4. Save your HTML page and you will now see a Leaflet map centered around our location!

[Example](http://sandbox.idre.ucla.edu/Workshops/DigitalMappingWorkshop2015/Leaflet_1_3v2.html)

## 4) Add a marker:

You can create markers in Leaflet by using a basic L.marker(\[lat\],\[long\]).addTo(map), but we can automate this process by creating a function, like follows:

1. We'll give a name to the function "createMarker" and 3 parameters; "latitude", "longitude", and "popupContent":
    
    function createMarker(latitude,longitude,popupContent){
    }
    
2. Next let's use the parameters to create the markers in the function:
    
    function createMarker(latitude,longitude,popupContent){
    	L.marker(\[latitude,longitude\]).addTo(map)
    		.bindPopup(popupContent);
    }
    
3. Finally, we want to createMarkers when the page loads, so at the end of our init function we will add the following:
    
    createMarker(34.06961421319362, -118.44321762300109,"This was a marker made from our function!")
    
4. Your code should look like the following:
    
    <!DOCTYPE html>
    <html>
    <head>
    	<title>Leaflet Quick Start Guide Example</title>
    	<meta charset="utf-8" />
    	<style type="text/css">
    	html {height: 100%}
    	body {height: 100%}
    	#map {height: 100%;}
    	</style>
    	<!-- Leaflet -->
    	<script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>
    	<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />
    
    	<!-- jquery  -->		
    	<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
    	<script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    
    	<!-- bootstrap -->
    	<link href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" rel="stylesheet">
    	<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    
    	<script type="text/javascript">
    		var map;
    
    		function init(){
    			map = L.map('map').setView(\[34.07381780761041, -118.44177995896911\], 17);
    
    			L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
    				maxZoom: 18,
    				id: 'examples.map-i875mjb7'
    			}).addTo(map);
    			createMarker(34.06961421319362, -118.44321762300109,"This was a marker made from our function!")
    		}
    
    		function createMarker(latitude,longitude,popupContent){
    			L.marker(\[latitude,longitude\]).addTo(map)
    				.bindPopup(popupContent);
    		}
    
    	</script>			
    </head>
    <body onload="init()">
    	<div id="map"></div>
    </body>
    </html>
    
    [Example](http://sandbox.idre.ucla.edu/Workshops/DigitalMappingWorkshop2015/Leaflet_1_4.html)
    

## 5) Customizing it up:

Say you'd like to change your base map, you can do so by simply replacing Lines 27 to 30 ("L.tileLayer...")on the previous sample code. But where would you find some sample base maps? [Leaflet Providers](http://leaflet-extras.github.io/leaflet-providers/preview/) which gives you both code snippets and examples of what options are available.

1. Go to Leaflet Providers
2. Find a base map you would like to try on the right side panel (1): [![leafletProvider](images/leafletProvider-1024x672.png)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2015/04/leafletProvider.png)
3. Copy the "Plain JavaScript" code snippet in the top middle of the page (2)
4. Delete the current tileLayer and add the new one, while making sure to add it to the map with .addTo(map).
5. Your final code should look like the following:
    
    <!DOCTYPE html>
    <html>
    <head>
    	<title>Leaflet Quick Start Guide Example</title>
    	<meta charset="utf-8" />
    	<style type="text/css">
    	html {height: 100%}
    	body {height: 100%}
    	#map {height: 100%;}
    	</style>
    	<!-- Leaflet -->
    	<script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>
    	<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />
    
    	<!-- jquery  -->		
    	<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
    	<script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    
    	<!-- bootstrap -->
    	<link href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" rel="stylesheet">
    	<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    
    	<script type="text/javascript">
    	var map;
    	function init(){
    		map = L.map('map').setView(\[34.07381780761041, -118.44177995896911\], 17);
    
    		var Esri\_WorldImagery = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World\_Imagery/MapServer/tile/{z}/{y}/{x}', {
    			attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    		}).addTo(map);
    			
    		createMarker(34.06961421319362, -118.44321762300109,"This was a marker made from our function!")
    	}
    
    	function createMarker(latitude,longitude,popupContent){
    		L.marker(\[latitude,longitude\]).addTo(map)
    			.bindPopup(popupContent);
    		}
    	</script>			
    </head>
    <body onload="init()">
    	<div id="map"></div>
    </body>
    </html>
    

[Example](http://sandbox.idre.ucla.edu/Workshops/DigitalMappingWorkshop2015/Leaflet_1_5a.html)

1. Notice that Lines 28 - 30 use ESRI's satellite base map now; and that's all there is to change your base map!

## 6) Adding your data from GeoJSON.io:

GeoJSON.io allows us to author web content in various formats that can also be consumed by Leaflet (with the help of jQuery).

1. Visit [GeoJSON.io](http://geojson.io/) to author some points or load your data into it!
2. Save as a GeoJSON file and move it to the same directory as your HTML webpage.
3. Create a function called "getData" that will load the geoJSON file:
    
    function getData()
    {
    	var url = 'map.geojson'
    	$.getJSON(url,function(data){
    		$.each(data.features,function(i,val){
    			if(val.geometry.type == "Point"){
    				lng = val.geometry.coordinates\[0\];
    				lat = val.geometry.coordinates\[1\];
    				popup = val.properties.name;
    				createMarker(lat,lng,popup);
    			}
    			else
    			{
    				L.geoJson(val,{onEachFeature: onEachFeature}).addTo(map)
    			}
    		});
    	})
    }
    
4. Notice that "url = map.geojson" is the name as the file we just saved.
5. Let's add an event listener for each click, by using Leaflet's onEachFeature function:
    
    function onEachFeature(feature, layer) {
        // runs only if this feature a property named 'name'
        if (feature.properties && feature.properties.name) {
            layer.bindPopup(feature.properties.name);
        }
    }
    
6. Add the getData(); function to the init function to make it load when the page runs, and congratulations, you have successfully connected a geojson file to Leaflet, as per the sample code below:
    
    <!DOCTYPE html>
    <html>
    <head>
    	<title>Leaflet Quick Start Guide Example</title>
    	<meta charset="utf-8" />
    	<style type="text/css">
    	html {height: 100%}
    	body {height: 100%}
    	#map {height: 100%;}
    	</style>
    	<!-- Leaflet -->
    	<script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>
    	<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />
    
    	<!-- jquery  -->		
    	<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
    	<script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    
    	<!-- bootstrap -->
    	<link href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" rel="stylesheet">
    	<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    
    	<script type="text/javascript">
    	var map;
    	function init(){
    		map = L.map('map').setView(\[34.07381780761041, -118.44177995896911\], 17);
    
    		var Esri\_WorldImagery = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World\_Imagery/MapServer/tile/{z}/{y}/{x}', {
    			attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    		}).addTo(map);
    		getData();
    	}
    
    	function createMarker(latitude,longitude,popupContent){
    		L.marker(\[latitude,longitude\]).addTo(map)
    			.bindPopup(popupContent);
    		}
    
    	function getData()
    	{
    		var url = 'map.geojson'
    		$.getJSON(url,function(data){
    			$.each(data.features,function(i,val){
    				if(val.geometry.type == "Point"){
    					lng = val.geometry.coordinates\[0\];
    					lat = val.geometry.coordinates\[1\];
    					popup = val.properties.name;
    					createMarker(lat,lng,popup);
    				}
    				else
    				{
    					L.geoJson(val,{onEachFeature: onEachFeature}).addTo(map)
    				}
    			});
    		})
    	}
    
    	function onEachFeature(feature, layer) {
    	    // runs only if this feature a property named 'name'
    	    if (feature.properties && feature.properties.name) {
    	        layer.bindPopup(feature.properties.name);
    	    }
    	}	
    
    	</script>			
    </head>
    <body onload="init()">
    	<div id="map"></div>
    </body>
    </html>
    
    [Example](http://sandbox.idre.ucla.edu/Workshops/DigitalMappingWorkshop2015/Leaflet_1_6.html)

\[iframe src="http://sandbox.idre.ucla.edu/Workshops/DigitalMappingWorkshop2015/Leaflet\_1\_6.html"\]
