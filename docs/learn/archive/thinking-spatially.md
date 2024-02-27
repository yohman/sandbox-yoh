---
title: "Thinking Spatially"
date: "2019-04-25"
categories: 
  - "workshops"
---

## Thinking Spatially

## I want to map... how do I get started?

var name = "Rio"

As members of an academic community with a myriad of research initiatives, the need to map information, to spatially analyze, to geoprocess, and to visualize space and time is becoming ubiquitous. But how do you get started? The answer to this question largely depends on _what_ you want to map, and _how_ you want to create your map. The _what_ is usually easy. It is driven by your passion to pursue a research question and to have maps assist in the development of an argument. The _how_ is the difficult part. It may depend on what data you have, what tools you have access to, how comfortable you are with software packages, if you are open to write code or use the command line. Often times, your research question lends itself to a spatial argument. However, providing insights to questions using spatial visualization tools is a process that involves any number of factors, including: data acquisition, data cleanup, geo-enabling data, geocoding data, georeferencing data, visualizing spatial data, overlaying other spatial data, conducting spatial analysis and/or geoprocessing, analyzing results, visualizing results, and publishing results. For obvious reasons, there is no single application that can accomplish every phase of your spatial process, but in the hopes that one can illuminate some clarity on which tools are available for what purposes, this document provides a broad summary of some of the most useful tools.

### Google Maps/API

![](images/Screen-Shot-2019-04-11-at-11.25.49-AM-e1555007184723-1024x511.png)

While we use Google Maps seemingly daily, let's not forget that it is most likely the world's most powerful GIS. Its features include a global reach, [temporality](https://www.google.com/maps/@34.0687751,-118.4450444,3a,60y,311.36h,92.57t/data=!3m6!1e1!3m4!1srJo6WOkVunyPIFnKD9wT1w!2e0!7i16384!8i8192), transportation metrics, satellite and street map imagery, 3D navigation, and participatory and private data creation. The Google eco-system contains a slate of developer API's, that is, programming interfaces that allows you to utilize their computational and visualizational libraries for your own purposes. For example, [Google Maps Javascript API](https://cloud.google.com/maps-platform/maps/) lets you to create interactive Google web maps and overlay it with your own data; [Google Geocoding API](https://cloud.google.com/maps-platform/places/) allows you to convert any text based location into map coordinates; [Google Charts API](https://developers.google.com/chart/) allows you to visualize data in the form of [charts](https://developers.google.com/chart/interactive/docs/gallery/bubblechart) and graphs. Is it free? [No](https://cloud.google.com/maps-platform/pricing/). For researchers, the caveat is that any Google process requires results to be shown on their products and in public the sphere. Deviations from this violate their [user agreement](https://cloud.google.com/maps-platform/terms/maps-service-terms/), or would come at a prohibitive cost.

### Social Explorer

![Social Explorer](images/Social-Explorer-e1516309262695-1024x455.png)

[https://www.socialexplorer.com/](https://www.socialexplorer.com/)

Imagine a platform that gives you access to every census variable for every moment in history since it was collected (think 1790 onwards), has the ability to generate beautiful maps (including side-by-side maps for comparisons), allows you to create presentation narratives (think map centered power point), and let's you share, embed, and download your data and maps.

### Google Earth

![](images/Screen-Shot-2019-04-11-at-4.14.26-PM-e1555024496720-1024x470.png)

[https://www.google.com/earth/](https://www.google.com/earth/) | [Los Angeles Historical Map Collection (KMZ)](https://sandbox.idre.ucla.edu/kml/Los%20Angeles%20Historical%20Maps.kmz)

Even before Google Maps, Google Earth existed in the name of "Keyhole Earth Viewer." Google would acquire Keyhole in 2004 and the rest, as they say, is history. While the boundaries between Google Maps and Google Earth are beginning to blur (Maps now includes 3D capabilities), Google Earth remains relevant as a 3D mapping platform to visualize historical imagery, and to create 3D geospatial narratives.

### Palladio

![human-border-mapping](images/human-border-mapping-e1551810866736-1024x347.png)

[Palladio Home](http://hdlab.stanford.edu/palladio/) | [Miriam's excellent workshop](http://miriamposner.com/blog/getting-started-with-palladio/)

Do you need a jack-of-all-trades data visualizer? [Palladio](http://hdlab.stanford.edu/palladio/), a data visualization tool built by the folks from [Stanford's Humanities Lab](http://hdlab.stanford.edu/) combines mapping, temporal charts, faceted browsing, network diagrams, and gallery views.

### D3-Geo

![d3 geo](images/Screen-Shot-2019-04-11-at-4.22.04-PM-e1555024966689-1024x614.png)

[D3](https://d3js.org/) | [d3-geo](https://observablehq.com/collection/@d3/d3-geo) | [command line D3](https://medium.com/@mbostock/command-line-cartography-part-1-897aa8f8ca2c)  

Fancy yourself for your coding chops? Give D3 a whirl, a web-based platform for data visualization. What distinguishes D3 (which stands for Data Driven Documents) visualizations from other libraries is that mapping is but one of its many outputs. Data can be ingested and reimagined in seemingly endless possibilities. Maps can be designed to be static, [animated](https://bost.ocks.org/mike/nations/), 3D, [reprojected](https://bl.ocks.org/syntagmatic/ba569633d51ebec6ec6e), and data can be made to [move](https://earth.nullschool.net/) if you so desire.

### Leaflet

![leaflet js](images/Screen-Shot-2019-04-11-at-4.37.55-PM-e1555025987214.png)

[https://leafletjs.com/](https://leafletjs.com/)

What about an open source equivalent to Google Maps?

### ArcGIS/Map/Pro

Favored by many, ESRI's ArcGIS is the industry standard as a software package for digital mapping. ESRI has been around even before Microsoft, founded by the charismatic Jack Dangermond, an environmental scientist in 1969.

### ArcGIS Online

![ArcGIS Online Hyper Dublin](images/Screen-Shot-2019-09-04-at-12.12.13-PM-e1567624364974-1024x445.png)

[https://www.arcgis.com/home/webmap/viewer.html?webmap=bb5d6e0845a9448bae2a317964ab7f8b](https://www.arcgis.com/home/webmap/viewer.html?webmap=bb5d6e0845a9448bae2a317964ab7f8b)

### Google Earth Engine

![Google Earth Engine](images/Screen-Shot-2019-04-11-at-4.59.59-PM-e1555027247448-1024x400.png)

[https://earthengine.google.com/](https://earthengine.google.com/)

Remote sensing technology has never been made more available than it is today, thanks to the efforts of the Google Earth Engine team. Now, with just a few lines of code, researchers are able to access a multi-petabyte catalog of satellite imagery and geospatial datasets for planetary-scale analysis.

## Tool Matrix

<table class="wp-block-table" style="width:100%;font-size:0.8em"><tbody><tr><td></td><td>Open Source?</td><td>Coding?</td><td>Publishable?</td></tr><tr><td>Google Maps API</td><td>no, requires key,<br>pay as you go</td><td>javascript</td><td>yes, but only on<br>a google map</td></tr><tr><td>Google Earth</td><td>no, but application is<br>free to download</td><td>none</td><td>can export with<br>google logo</td></tr><tr><td>Google Earth Engine</td><td>no, requires direct<br>approval from Google</td><td>javascript</td><td>yes</td></tr><tr><td>Palladio</td><td>yes</td><td>none</td><td>no</td></tr><tr><td>Social Explorer</td><td>no, but licensed<br>to all UCLA users</td><td>none</td><td>yes</td></tr><tr><td>ArcMap/ArcPro</td><td>no, but licensed<br>to all UCLA users</td><td>none</td><td>yes</td></tr><tr><td>ArcGIS Online</td><td>no, but licensed<br>to all UCLA users</td><td>none</td><td>yes</td></tr><tr><td>QGIS</td><td>yes</td><td>none</td><td>yes</td></tr><tr><td>Leaflet</td><td>yes</td><td>javascript</td><td>yes</td></tr><tr><td>Mapbox</td><td>no, requires key,<br>pay as you go</td><td>javascript</td><td>yes</td></tr></tbody></table>

## From text to map

Behind any beautiful digital map lies the reality that every point, line or polygon is generated by some form of numerical and textual data.  Here is an example of a "placemark" written in KML:

<Placemark>
	<name>YRL</name>
	<description>Don't fall asleep! Data is fun!</description>
	<Point>
		<coordinates>-118.441539, 34.074992</coordinates>
	</Point>
</Placemark>

A few more options...

<Placemark>
	<name>YRL</name>
	<description>Don't fall asleep! Data is fun!</description>
	<LookAt>
		<longitude>-118.441539</longitude>
		<latitude>34.074992</latitude>
		<heading>45</heading>
		<tilt>50</tilt>
		<range>500</range>
	</LookAt>
	<Point>
		<coordinates>-118.441539,34.074992</coordinates>
	</Point>
</Placemark>

```
<Placemark>
	<name>YRL</name>
	<description>Don't fall asleep! Data is fun!</description>
	<LookAt>
		<longitude>-118.441539</longitude>
		<latitude>34.074992</latitude>
		<heading>45</heading>
		<tilt>50</tilt>
		<range>500</range>
	</LookAt>
	<Point>
		<coordinates>-118.441539,34.074992,1000</coordinates>
		<altitudeMode>absolute</altitudeMode>		
	</Point>
</Placemark>
```

<Placemark>
	<name>YRL</name>
	<description>Don't fall asleep! Data is fun!</description>
	<LookAt>
		<longitude>-118.441539</longitude>
		<latitude>34.074992</latitude>
		<heading>45</heading>
		<tilt>50</tilt>
		<range>500</range>
	</LookAt>
	<Point>
		<coordinates>-118.441539,34.074992,1000</coordinates>
		<altitudeMode>absolute</altitudeMode>		
	</Point>
</Placemark>

<Placemark>
	<name>YRL</name>
	<description>Don't fall asleep! Data is fun!</description>
	<LookAt>
		<longitude>-118.441539</longitude>
		<latitude>34.074992</latitude>
		<heading>45</heading>
		<tilt>50</tilt>
		<range>500</range>
	</LookAt>
	<Point>
		<coordinates>-118.441539,34.074992,1000</coordinates>
		<altitudeMode>absolute</altitudeMode>		
	</Point>
</Placemark>

Instruction: Copy and paste this code into a text editor, and save it as a .kml file. Double click on the file to open it in Google Earth.

## A Simple Web Map

A different markup language produces a map for a different platform. Here, we combine CSS, HTML, and Javascript to produce a map using the open-source map library Leaflet:

<!-- leaflet css -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css" integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA==" crossorigin=""/>

<!-- leaflet javascript -->
<script src="https://unpkg.com/leaflet@1.4.0/dist/leaflet.js" integrity="sha512-QVftwZFqvtRNi0ZyCtsznlKSWOStnDORoefr1enyq5mVL4tmKB3S/EnC3rRJcxCPavG10IcrVGSmPh6Qw5lwrg==" crossorigin=""></script>

<!-- the map container -->
<div id="map" style="width: 600px; height: 400px;"></div>

<!-- the javascript to make the map -->
<script>

	var map = L.map('map').setView(\[34.074992,-118.441539\], 18);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	L.marker(\[34.074992,-118.441539\]).addTo(map)
		.bindPopup("Don't fall asleep! Data is fun!")
		.openPopup();

</script>

Instructions: Paste this code into a text editor, and save it as an html file. Double click to open the map on a web browser.

## History mapped

A paper map can be scanned and made digital.  As an image, it does not know "where it is", in terms of its spatiality.  A process called "georeferencing" allows us to "spatialize" printed documents, and put them in the context of other spatial layers.  Here is an example of one of the most famous historical maps, the "John Snow Map" from 1854 that illustrates a Cholera outbreak that attacked London.

[![John Snow Cholera map (1854)](images/snowmap_1854.jpg)](http://www.ph.ucla.edu/epi/snow/snowmap_1854.jpg)

The same map can be visualized on a GIS platform, in this case, Google Earth:

[![John Snow map on google earth](images/johnsnow_ge-650x488.jpg)](http://sandbox.idre.ucla.edu/sandbox/wp-content/uploads/2015/04/johnsnow_ge.jpg)

\[[John Snow in Google Earth](http://sandbox.idre.ucla.edu/kml/snow.kmz)\]

\[TBS\_ALERT color="success" heading="How to view in Google Earth"\]

1. Right click on the hyperlink and select "copy link address"
2. Open Google Earth, Add, Network Link
3. Give the network link a name, and paste the hyperlink

\[/TBS\_ALERT\]

### Age of Los Angeles

[![](images/Age-of-Los-Angeles-e1540831518999.png)](http://cityhubla.github.io/LA_Building_Age/)

\[[http://cityhubla.github.io/LA\_Building\_Age/](http://cityhubla.github.io/LA_Building_Age/)\]

## Palladio Workshop

[Palladio Workshop](https://sandbox.idre.ucla.edu/sandbox/palladio-workshop)

[![](images/Palladio-1-e1523299347889-300x187.png)](https://sandbox.idre.ucla.edu/sandbox/palladio-workshop)

Visualizing A Century of New Yorker Stories What does a century of stories, navigating through space…
