---
title: "Getting Started with Spatial Research"
date: "2019-09-05"
categories: 
  - "workshops"
---

## Getting Started with Spatial Research

### I need maps for my research... how do I get started?

As members of an academic community with a myriad of research initiatives, the need to map information, to spatially analyze, to geoprocess, and to visualize space and time is becoming ubiquitous. But how do you get started? The answer to this question largely depends on _what_ you want to map, and _how_ you want to create your map. The _what_ is usually easy. It is driven by your passion to pursue a research question and to have maps assist in the development of an argument. The _how_ is the difficult part. It may depend on what data you have, what tools you have access to, how comfortable you are with software packages, if you are open to write code or use the command line. Often times, your research question lends itself to a spatial argument. However, providing insights to questions using spatial visualization tools is a process that involves any number of factors, including: data acquisition, data cleanup, geo-enabling data, geocoding data, georeferencing data, visualizing spatial data, overlaying other spatial data, conducting spatial analysis and/or geoprocessing, analyzing results, visualizing results, and publishing results. There is no single application that can accomplish every phase of your spatial process. The table below provides some clarity on which tools are available for what purposes, and it is followed by a broad summary of some of the most useful tools.

\[table id=1 /\]

Other notable mapping tools, used primarily as multi-layered, web-based presentation platforms:

- [Neatline](https://neatline.org/) - an add-on tool for Omeka, Neatline allows scholars, students, and curators to tell stories with maps and timelines
- [Carto](https://carto.com/) - an online spatial database platform for the more advanced cartographer in you
- [History Pin](https://www.historypin.org/en/) - "pin" your history on this map-based platform that allows for geotemporal story telling
- [David Rumsey Historical Map Collection](https://www.davidrumsey.com) - a great resource for georeferenced historical maps

### Google Earth

![Google Earth Screenshot](images/image-2-e1567799343720-1024x480.png)

[https://www.google.com/earth/](https://www.google.com/earth/) | [Los Angeles Historical Map Collection (KMZ)](https://sandbox.idre.ucla.edu/kml/Los%20Angeles%20Historical%20Maps.kmz)

Even before Google Maps, Google Earth existed in the name of "Keyhole Earth Viewer." Google would acquire Keyhole in 2004 and the rest, as they say, is history. While the boundaries between Google Maps and Google Earth are beginning to blur (Maps now includes 3D capabilities), Google Earth remains relevant as a 3D mapping platform to visualize historical imagery, and to create 3D geospatial narratives.

### Google Maps/API

![](images/Screen-Shot-2019-04-11-at-11.25.49-AM-e1555007184723-1024x511.png)

While we use Google Maps seemingly daily, let's not forget that it is most likely the world's most powerful GIS. Its features include a global reach, [temporality](https://www.google.com/maps/@34.0687751,-118.4450444,3a,60y,311.36h,92.57t/data=!3m6!1e1!3m4!1srJo6WOkVunyPIFnKD9wT1w!2e0!7i16384!8i8192), transportation metrics, satellite and street map imagery, 3D navigation, and participatory and private data creation. The Google eco-system contains a slate of developer API's, that is, programming interfaces that allows you to utilize their computational and visualizational libraries for your own purposes. For example, [Google Maps Javascript API](https://cloud.google.com/maps-platform/maps/) lets you to create interactive Google web maps and overlay it with your own data; [Google Geocoding API](https://cloud.google.com/maps-platform/places/) allows you to convert any text based location into map coordinates; [Google Charts API](https://developers.google.com/chart/) allows you to visualize data in the form of [charts](https://developers.google.com/chart/interactive/docs/gallery/bubblechart) and graphs. Is it free? [No](https://cloud.google.com/maps-platform/pricing/). For researchers, the caveat is that any Google process requires results to be shown on their products and in public the sphere. Deviations from this violate their [user agreement](https://cloud.google.com/maps-platform/terms/maps-service-terms/), or would come at a prohibitive cost.

### Social Explorer

![Social Explorer](images/Social-Explorer-e1516309262695-1024x455.png)

[https://www.socialexplorer.com/](https://www.socialexplorer.com/)

Imagine a platform that gives you access to every census variable for every moment in history since it was collected (think 1790 onwards), has the ability to generate beautiful maps (including side-by-side maps for comparisons), allows you to create presentation narratives (think map centered power point), and let's you share, embed, and download your data and maps.

- 10/22/2019 New feature: [change over time](https://www.socialexplorer.com/blog/post/introducing-our-new-change-over-time-feature-10095)

### Tableau

![mapping in tableau](images/image-3-e1568224758810-1024x603.png)

[https://www.tableau.com/](https://www.tableau.com/)

Need to discover hidden patterns in your data? Need to link maps with charts? Tableau provides interfaces that allow you to do just that, interconnect different parameters of your data to discover, rank, and expose relevant metrics from your data. In addition, it can handle large datasets (~millions). The catch? For the free version (Tableau Public), you can only save your projects online in public mode, meaning that your visualizations must be shared on the web.

### R + RStudio

![rstudio](images/rstudio-1024x704.png)

While WYSIWYG software packages like [ArcGIS](https://www.esri.com/en-us/arcgis/about-arcgis/overview) and [QGIS](https://www.qgis.org/) remain a standard in cartographic representations, open source, scripting solutions have always had a strong cadre of support, especially for advanced spatial research initiatives. With a development history that harks back to the late 1990s, [R](https://www.r-project.org/) has been championed as the free and open source programming tool for statisticians the world over. With its growth and foray into data viz, more and more researchers are adopting R as a solution for their spatial needs, due to its scripting capability, and strong statistical integration.

- [Spatializing Data with R](https://sandbox.idre.ucla.edu/sandbox/spatializing-data-with-r)

### Palladio

![Palladio screenshot](images/image-1-e1567799098880-1024x497.png)

[Palladio Home](http://hdlab.stanford.edu/palladio/) | [Miriam's excellent workshop](http://miriamposner.com/blog/getting-started-with-palladio/) | [sample data import](https://sandbox.idre.ucla.edu/data/palladio/forensic4palladio.json)

Do you need a jack-of-all-trades data visualizer? [Palladio](http://hdlab.stanford.edu/palladio/), a data visualization tool built by the folks from [Stanford's Humanities Lab](http://hdlab.stanford.edu/) combines mapping, temporal charts, faceted browsing, network diagrams, and gallery views. Its strength lies in its ability to visualize data dynamical through multiple filters. As an example, one can instantly see the distribution of data over time, while simultaneously viewing it on a map to get a sense of the data's correlation in space and time. Beware, however, of using Palladio for any dataset beyond 5,000 data points. As a javascript, browser-based platform, the performance is only as good as your local computer's capacity.

### ArcGIS Online

![ArcGIS Online Hyper Dublin](images/Screen-Shot-2019-09-04-at-12.12.13-PM-e1567624364974-1024x445.png)

[ArcGIS Sample Project](https://www.arcgis.com/home/webmap/viewer.html?webmap=bb5d6e0845a9448bae2a317964ab7f8bhttps://www.arcgis.com/home/webmap/viewer.html?webmap=bb5d6e0845a9448bae2a317964ab7f8b)

Not ready for a full-blown immersive GIS desktop experience? Try [ArcGIS Online](https://www.esri.com/en-us/arcgis/products/arcgis-online/overview), a web-based GIS platform that allows you to upload spatial layers, or create customs layers directly. Licensed users will also have the ability to conduct basic geoprocesses such as joining, data aggregation, and hot spot analysis.

### ArcGIS/Map/Pro

![](images/arcgis-e1571788904701-1024x484.jpg)

[https://www.esri.com/en-us/arcgis/products/arcgis-pro/overview](https://www.esri.com/en-us/arcgis/products/arcgis-pro/overview)

Favored by many, ESRI's ArcGIS is the industry standard as a software package for digital mapping. ESRI has been around even before Microsoft, founded by the charismatic Jack Dangermond, an environmental scientist in 1969. Users have long been enamored by ArcGIS's broad reach to all spectrums of research, with much of the workflow and usability tailored to the expert cartographer. The ArcGIS desktop products have a steep learning curve, but for those who are planning on conducting spatial analysis for the long haul, it can be an essential piece to your research toolset. Note however, that none of the ArcGIS desktop products work on a Mac.

### QGIS

![QGIS Screenshot](images/image-e1567728116993-1024x556.png)

[Download it here](https://qgis.org/en/site/)  

[QGIS](https://qgis.org/en/site/) is the open source standard for desktop GIS. In much the same way as the ArcGIS counter part, QGIS comes with a steep learning curve, but comes with all the features you need for your spatial needs. First launched in 2002, QGIS has a vibrant open source community that continues to develop and support the product. What's more, if you want to use GIS for advanced spatial analysis on a Mac, this may be your best option.

### Leaflet and OpenStreetMap

![leaflet js](images/Screen-Shot-2019-04-11-at-4.37.55-PM-e1555025987214.png)

[https://leafletjs.com/](https://leafletjs.com/)

What about an open source equivalent to Google Maps API? [Leaflet](https://leafletjs.com) and [OpenStreetMap](https://www.openstreetmap.org/) are your open source javascript alternatives that come at no cost or fear of depracation. For simple web maps, choose leaflet, for more advanced functions and presentations, and especially if you are using projections, choose OpenStreetMap.

### Google Earth Engine

![Google Earth Engine](images/Screen-Shot-2019-04-11-at-4.59.59-PM-e1555027247448-1024x400.png)

[https://earthengine.google.com/](https://earthengine.google.com/) | If you have an account, try the [code editor](https://code.earthengine.google.com/)

Remote sensing technology has never been made more available than it is today, thanks to the efforts of the [Google Earth Engine](https://earthengine.google.com) team. Now, with just a few lines of code, researchers are able to access a multi-petabyte catalog of satellite imagery and geospatial datasets for planetary-scale analysis. With over 40 years of historical imagery and scientific datasets, you can analyze forest and water coverage, land use change, or assess the health of agricultural fields, among many other possible analyses.

### D3-Geo

![d3 geo](images/Screen-Shot-2019-04-11-at-4.22.04-PM-e1555024966689-1024x614.png)

[D3](https://d3js.org/) | [d3-geo](https://observablehq.com/collection/@d3/d3-geo) | [command line D3](https://medium.com/@mbostock/command-line-cartography-part-1-897aa8f8ca2c)  

Fancy yourself for your coding chops? Give D3 a whirl, a web-based platform for data visualization. What distinguishes D3 (which stands for Data Driven Documents) visualizations from other libraries is that mapping is but one of its many outputs. Data can be ingested and reimagined in seemingly endless possibilities. Maps can be designed to be static, [animated](https://bost.ocks.org/mike/nations/), 3D, [reprojected](https://bl.ocks.org/syntagmatic/ba569633d51ebec6ec6e), and data can be made to [move](https://earth.nullschool.net/) if you so desire.

## From text to map

Behind any beautiful digital map lies the reality that every point, line or polygon is generated by some form of numerical and textual data.  Here is an example of a point, or "placemark," written in KML:

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
		<coordinates>-118.441539,34.074992,1000</coordinates>
		<altitudeMode>absolute</altitudeMode>		
	</Point>
</Placemark>

<Placemark> 
	<LineString>
	<tessellate>1</tessellate>
		<coordinates>
			-118.426843,33.946385
			139.779839,35.549397
		</coordinates>
	</LineString>
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
		attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
	L.marker(\[34.074992,-118.441539\]).addTo(map)
		.bindPopup("Don't fall asleep! Data is fun!")
		.openPopup();
</script>

Instructions: Paste this code into a text editor, and save it as an html file. Double click to open the map on a web browser.

## Map Sandbox: Let's create some maps

Experiment with different tools with this sample dataset from the Los Angeles Data Portal. Each dataset contains columns for latitude and longitude, allowing you to import into the various platforms discussed here.

- Part 1: [Mapping crime data in Tableau](https://sandbox.idre.ucla.edu/sandbox/open-data-and-tableau)
- Part 2: [Mapping crime data in R](https://sandbox.idre.ucla.edu/sandbox/spatializing-data-with-r)
- Part 3: [Mapping crime data in ArcMap](https://sandbox.idre.ucla.edu/sandbox/intro-to-gis-got-data-lets-map-it)

Open Data and Guides:

- [LA City Open Data Portal](https://data.lacity.org)
- [Guide to getting data from the Los Angeles Open Data Portal](https://ucladataguides.readthedocs.io/en/latest/working_with_data/data_portal.html)
- [ArcMap Tutorial with crime data analysis](https://sandbox.idre.ucla.edu/sandbox/intro-to-gis-got-data-lets-map-it)

Sample datasets:

- [Los Angeles Arrests in September 2019](http://sandbox.idre.ucla.edu/data/Arrest_Data_2019_09.csv)
- [Stolen Bikes in Los Angeles 2019](https://sandbox.idre.ucla.edu/data/gis workshop/STOLEN%20BIKE%202019.csv) ([source](https://data.lacity.org/A-Safe-City/Crime-Data-from-2010-to-Present/63jg-8b9z))
- [Child Abuse 2019](https://sandbox.idre.ucla.edu/data/gis workshop/CHILD%20ABUSE%202019.csv) ([source](https://data.lacity.org/A-Safe-City/Crime-Data-from-2010-to-Present/63jg-8b9z))

Sample results ([Social Explorer,](https://www.socialexplorer.com/explore-maps) [Tableau Public](https://public.tableau.com/en-us/s/) shown below):

![social explorer with uploaded data](images/image-5-1024x720.png)

![mapping in tableau](images/image-3-e1568224758810-1024x603.png)

Additional Resources

- [The Battle of the Maps: GIS Day 2019](http://gisday.ucla.edu)
- [GIS and Python Workshop](https://idre.ucla.edu/calendar-event/introduction-to-gis-and-python)
